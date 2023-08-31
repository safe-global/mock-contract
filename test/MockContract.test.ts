import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployContractUnderTest, deployMockContractFixture } from "./fixtures";
import { expect } from "chai";
import { ZeroAddress, FunctionFragment, MaxUint256 } from "ethers";
import { ComplexInterface, MockContract } from "../types";

describe("MockContract", function () {
  async function setupTests() {
    return loadFixture(async function setup() {
      const signers: SignerWithAddress[] = await ethers.getSigners();
      const { mockContract } = await deployMockContractFixture(signers[0])
      const complexInterface = await ethers.getContractAt("ComplexInterface", mockContract.target,)
      const { contractUnderTest } = await deployContractUnderTest(signers[0], mockContract.target,)

      return { mockContract, signers, complexInterface, contractUnderTest };
    })
  }

  it("should return null if not mocked", async function () {
    const { complexInterface } = await setupTests();

    expect(await complexInterface.acceptUintReturnUintView(0n)).equal(0n)
  })

  it("should return null if not mocked when called by contract under test", async function () {
    const { contractUnderTest, } = await setupTests();

    expect(await contractUnderTest.callMethodThatReturnsBool()).equal(false)
  });

  describe("givenAnyReturn", function () {
    it("should return the mocked value", async function () {
      const { mockContract, complexInterface, signers } = await setupTests();

      await mockContract.givenAnyReturn(ethers.AbiCoder.defaultAbiCoder().encode(["bool"], [true]))

      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(true)

      // Check that other methods also return true
      expect(await complexInterface.acceptUintReturnBoolView(10)).equal(true)

      // // Check that we can reset
      await mockContract.reset()
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(false)

      // Check convenience methods
      await mockContract.givenAnyReturnBool(true)
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(true)

      // Check that we can override via convenience methods
      await mockContract.givenAnyReturnUint(42)
      expect(await complexInterface.acceptUintReturnUintView(7)).equal(42)

      const signerAddress = signers[0].address
      await mockContract.givenAnyReturnAddress(signerAddress)
      expect(await complexInterface.acceptUintReturnAddressView(7)).equal(signerAddress)
    });
  });

  describe("givenAnyRevert", function () {
    it("should revert if mocked", async function () {
      const { mockContract, complexInterface } = await setupTests()
      await mockContract.givenAnyRevert();

      // On error it should return the error message for a call
      await expect(complexInterface.methodA()).to.be.revertedWith("")

      // Check that other calls also error
      await expect(complexInterface.methodB()).to.be.revertedWith("")

      // Check that we can reset revert
      await mockContract.reset()

      // Transaction should be successful
      await complexInterface.methodA()
    });
  });

  describe("givenAnyRevertWithMessage", function () {
    it("should revert if mocked and return message", async function () {
      const { mockContract, complexInterface } = await setupTests()

      await mockContract.givenAnyRevertWithMessage("This is Sparta!!!");

      // On error it should return the error message for a call
      await expect(complexInterface.methodA()).to.be.revertedWith("This is Sparta!!!")

      // Check that other calls also error
      await expect(complexInterface.methodB()).to.be.revertedWith("This is Sparta!!!")

      // Check that we can reset revert
      await mockContract.reset()

      // Transaction should be successful
      await complexInterface.methodA()
    });

    describe("givenAnyRunOutOfGas", function () {
      it("should run out of gas if mocked", async function () {
        const { mockContract, complexInterface } = await setupTests()

        await mockContract.givenAnyRunOutOfGas()
        // Couldn't find an assertion for out of gas in chai, they revert without a reason inside the assertion
        await expect(complexInterface.methodA()).to.be.revertedWithoutReason()

        // Check that other calls also run out of gas
        await expect(complexInterface.methodB()).to.be.revertedWithoutReason()

        // Check that we can reset revert
        await mockContract.reset()
        // Transaction should be successful
        await complexInterface.methodA()
      });
    });

    describe("givenCalldataReturn", function () {
      it("should return the mocked value", async function () {
        const { mockContract, complexInterface, signers } = await setupTests()

        const callData = complexInterface.interface.encodeFunctionData("acceptAddressUintReturnBoolView", [ZeroAddress, 10])
        await mockContract.givenCalldataReturn(callData, ethers.AbiCoder.defaultAbiCoder().encode(["bool"], [true]))

        expect(await complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).equal(true)


        // Check that other calls return default
        expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 10)).equal(false)

        // Check that we can reset
        await mockContract.reset()
        expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(false)

        // Check convenience methods
        await mockContract.givenCalldataReturnBool(callData, true)
        expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(true)

        const alternativeCallData = complexInterface.interface.encodeFunctionData("acceptUintReturnUintView", [7])
        await mockContract.givenCalldataReturnUint(alternativeCallData, 42)
        expect(await complexInterface.acceptUintReturnUintView(7)).equal(42)


        const secondAlternativeCallData = complexInterface.interface.encodeFunctionData("acceptUintReturnAddressView", [7])
        const signerAddress = signers[0].address
        await mockContract.givenCalldataReturnAddress(secondAlternativeCallData, signerAddress)

        expect(await complexInterface.acceptUintReturnAddressView(7)).equal(signerAddress)
      });

      it("should allow mocking the same method with different parameters", async function () {
        const { mockContract, complexInterface } = await setupTests()

        const callData1 = complexInterface.interface.encodeFunctionData("acceptUintReturnUintView", [7])
        const callData2 = complexInterface.interface.encodeFunctionData("acceptUintReturnUintView", [8])


        await mockContract.givenCalldataReturnUint(callData1, 7)
        await mockContract.givenCalldataReturnUint(callData2, 8)

        expect(await complexInterface.acceptUintReturnUintView(7)).equal(7)
        expect(await complexInterface.acceptUintReturnUintView(8)).equal(8)
      });

      it("should allow contract under test to call mocked method 3 times in 1 transaction", async function () {
        const { mockContract, contractUnderTest } = await setupTests()

        await mockContract.givenAnyReturnUint(1)
        expect(await contractUnderTest.callMockedFunction3Times()).equal(true)
      });
    })
  });

  describe("givenCalldataRevert", function () {
    it("should revert if mocked", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const callData = await complexInterface.interface.encodeFunctionData("acceptAddressUintReturnBoolView", [ZeroAddress, 10])
      await mockContract.givenCalldataRevert(callData);

      // On error it should return the error message for a call
      await expect(complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).to.be.revertedWith("")
      // Check that other calls return default
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 10)).equal(false)

      // Check that we can reset revert
      await mockContract.reset()
      // Transaction should be successful
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)
    });
  });

  describe("givenCalldataRevertWithMessage", function () {
    it("should revert if mocked and return message", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const callData = complexInterface.interface.encodeFunctionData("acceptAddressUintReturnBoolView", [ZeroAddress, 10])
      await mockContract.givenCalldataRevertWithMessage(callData, "Это Спарта!!!")

      // On error it should return the error message for a call
      await expect(complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).to.be.revertedWith("Это Спарта!!!")

      // Check that other calls return default
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 10)).equal(false)

      // Check that we can reset revert
      await mockContract.reset()
      // Transactions should be successfully
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)
    })
  })

  describe("givenCalldataRunOutOfGas", function () {
    it("should run out of gas if mocked", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const callData = await complexInterface.interface.encodeFunctionData("acceptAddressUintReturnBoolView", [ZeroAddress, 10])
      await mockContract.givenCalldataRunOutOfGas(callData)

      // On error it should return the error message for a call
      await expect(complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).to.be.revertedWithoutReason()

      // Check that other calls return default
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 10)).equal(false)

      // Check that we can reset revert
      await mockContract.reset()
      // Transaction should be successful
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)
    })
  })

  /*
 * Tests for "any" functionality
 */
  describe("givenMethodReturn", function () {
    it("should return the mocked value", async function () {
      const { mockContract, complexInterface, signers } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptAddressUintReturnBoolView").selector
      await mockContract.givenMethodReturn(methodId, ethers.AbiCoder.defaultAbiCoder().encode(["bool"], [true]))

      // Check transactions and calls
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(true)
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)).equal(true)

      // Check that we can reset mock
      await mockContract.reset()
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(false)
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)).equal(false)

      // Check convenience methods
      await mockContract.givenMethodReturnBool(methodId, true)
      expect(await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).equal(true)

      const methodId2 = complexInterface.interface.getFunction("acceptUintReturnUintView").selector
      await mockContract.givenMethodReturnUint(methodId2, 42)
      expect(await complexInterface.acceptUintReturnUintView(0)).equal(42)

      const methodId3 = complexInterface.interface.getFunction("acceptUintReturnAddressView").selector
      await mockContract.givenMethodReturnAddress(methodId3, signers[0].address)
      expect(await complexInterface.acceptUintReturnAddressView(0)).equal(signers[0].address)
    })

    it("should mock method returning an address which can be used in `contract under test`", async function () {
      const { mockContract, complexInterface, contractUnderTest, signers } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptUintReturnAddressView").selector
      await mockContract.givenMethodReturnAddress(methodId, signers[0].address)

      expect(await contractUnderTest.callMethodThatReturnsAddress()).equal(signers[0].address)
    })
  })

  describe("givenMethodRevert", function () {
    it("should revert if mocked", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptAddressUintReturnBoolView").selector

      await mockContract.givenMethodRevert(methodId);

      await expect(complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)).to.be.revertedWith("")
      await expect(complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)).to.be.revertedWith("")

      // Check that we can reset revert
      await mockContract.reset()
      // Transactions should be successful
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)
    });
  })

  describe("givenMethodRevertWithMessage", function () {
    it("should revert if mocked and return message", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptAddressUintReturnBoolView").selector
      await mockContract.givenMethodRevertWithMessage(methodId, "This is Sparta!!!");


      // On error it should return the error message for a call
      await expect(complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).to.be.revertedWith("This is Sparta!!!")
      await expect(complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)).to.be.revertedWith("This is Sparta!!!")


      // Check that we can reset revert
      await mockContract.reset()
      // Transactions should be successful
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000000", 10)
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)
    });
  });

  describe("givenMethodRunOutOfGas", function () {
    it("should run out of gas if mocked", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptAddressUintReturnBoolView").selector
      await mockContract.givenMethodRunOutOfGas(methodId);

      // On error it should return the error message for a call
      await expect(complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)).to.be.revertedWithoutReason()
      await expect(complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)).to.be.revertedWithoutReason()

      // Check that we can reset revert
      await mockContract.reset()
      // Transactions should be successful
      await complexInterface.acceptAddressUintReturnBoolView(ZeroAddress, 10)
      await complexInterface.acceptAddressUintReturnBoolView("0x0000000000000000000000000000000000000001", 12)
    })
  });

  describe("test mock priority", function () {
    const methodId = FunctionFragment.getSelector("acceptUintReturnStringView", ["uint"])

    const testSpecificMocks = async function (mockContract: MockContract, complexInterface: ComplexInterface): Promise<void> {
      const callData = complexInterface.interface.encodeFunctionData("acceptUintReturnStringView", [42])
      await mockContract.givenCalldataReturn(callData, ethers.AbiCoder.defaultAbiCoder().encode(["string"], ["return specific"]))

      // Specific mock should be prioritized over any mock
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("return specific")

      await mockContract.givenCalldataRevert(callData);
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWith("")

      await mockContract.givenCalldataRevertWithMessage(callData, "revert specific")
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWith("revert specific")

      await mockContract.givenCalldataRunOutOfGas(callData);
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWithoutReason()

      // Check that we can reset revert
      await mockContract.reset()
      // Transactions should be successful
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("")
    }

    it("all specific mocks should be prioritized over return any mock", async function () {
      const { mockContract, complexInterface } = await setupTests()

      // No mock set
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("")

      // Fallback mock set
      await mockContract.givenAnyReturn(ethers.AbiCoder.defaultAbiCoder().encode(["string"], ["fallback"]))
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("fallback")

      // MethodId mock set
      await mockContract.givenMethodReturn(methodId, ethers.AbiCoder.defaultAbiCoder().encode(["string"], ["methodId"]));
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("methodId")

      await testSpecificMocks(mockContract, complexInterface)
    });

    it("all specific mocks should be prioritized over revert any mock", async function () {
      const { mockContract, complexInterface } = await setupTests()

      // No mock set
      expect(await complexInterface.acceptUintReturnStringView(42)).eq("")

      // Fallback mock set
      await mockContract.givenAnyRevertWithMessage('revert fallback')
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWith("revert fallback")

      // MethodId mock set
      await mockContract.givenMethodRevertWithMessage(methodId, "revert method");
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWith("revert method")

      await testSpecificMocks(mockContract, complexInterface)
    });

    it("all specific mocks should be prioritized over out of gas any mock", async function () {
      const { mockContract, complexInterface } = await setupTests()

      // No mock set
      expect(await complexInterface.acceptUintReturnStringView(42)).equal("")

      // Fallback mock set
      await mockContract.givenAnyReturn(ethers.AbiCoder.defaultAbiCoder().encode(["string"], ["fallback"]))
      expect(await complexInterface.acceptUintReturnStringView(42)).equal("fallback")

      // MethodId mock set
      await mockContract.givenMethodRunOutOfGas(methodId);
      await expect(complexInterface.acceptUintReturnStringView(42)).to.be.revertedWithoutReason()

      await testSpecificMocks(mockContract, complexInterface)
    });
  });

  describe("invocationCount", function () {
    it("returns the correct invocation count", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const callData = complexInterface.interface.encodeFunctionData("acceptUintReturnString", [42])

      expect(await mockContract.invocationCount()).equal(0)
      expect(await mockContract.invocationCountForMethod(callData)).equal(0)
      expect(await mockContract.invocationCountForCalldata(callData)).equal(0)

      // Make a few calls and assert count
      await complexInterface.methodA();
      await complexInterface.acceptUintReturnString(42);
      await complexInterface.acceptUintReturnString(1);

      expect(await mockContract.invocationCount()).equal(3)
      expect(await mockContract.invocationCountForMethod(callData)).equal(2)
      expect(await mockContract.invocationCountForCalldata(callData)).equal(1)

      // After reset everything at 0 again
      await mockContract.reset()
      expect(await mockContract.invocationCount()).equal(0)
      expect(await mockContract.invocationCountForMethod(callData)).equal(0)
      expect(await mockContract.invocationCountForCalldata(callData)).equal(0)
    });
  });

  describe("givenMethodReturn for view functions", function () {
    it("should return the mocked value", async function () {
      const { mockContract, complexInterface } = await setupTests()

      const methodId = complexInterface.interface.getFunction("acceptUintReturnUintView").selector
      await mockContract.givenMethodReturn(methodId, ethers.AbiCoder.defaultAbiCoder().encode(["uint"], [7]))

      expect(await complexInterface.acceptUintReturnUintView(0)).equal(7)
    });
  });

  describe("execute calls via mocks", function () {

    it("should not allow non-deployer to execute delegatecall", async function () {
      const { mockContract , signers} = await setupTests();
      const otherMockContract = await ethers.deployContract("MockContract");

      await  expect(mockContract.connect(signers[1]).executeDelegatecallViaMock(otherMockContract.target, "0x12345678", MaxUint256)).to.be.revertedWith("Only deployer can call executeDelegatecallViaMock");

      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(0);
      expect(await otherMockContract.invocationCount()).to.be.equal(0);
    });

    it("should not allow non-deployer to execute call", async function () {
      const { mockContract , signers} = await setupTests();
      const otherMockContract = await ethers.deployContract("MockContract");

      await  expect(mockContract.connect(signers[1]).executeCallViaMock(otherMockContract.target,0, "0x12345678", MaxUint256)).to.be.revertedWith("Only deployer can call executeCallViaMock");

      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(0);
      expect(await otherMockContract.invocationCount()).to.be.equal(0);
    });

    it("should execute call via mock", async function () {
      const { mockContract } = await setupTests();

      const otherMockContract = await ethers.deployContract("MockContract");

      await mockContract.executeCallViaMock(otherMockContract.target, 0, "0x12345678", MaxUint256);
      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(1);
      expect(await otherMockContract.invocationCount()).to.be.equal(1);
    });

    it("should execute delegatecall via mock", async function () {
      const { mockContract } = await setupTests();
      const otherMockContract = await ethers.deployContract("MockContract");

      await mockContract.executeDelegatecallViaMock(otherMockContract.target, "0x12345678", MaxUint256);

      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(0);
      expect(await otherMockContract.invocationCount()).to.be.equal(0);
    });
  });
});
