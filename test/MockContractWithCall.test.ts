import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { deployMockContractWithCallFixture } from "./fixtures";
import { expect } from "chai";
import { MaxUint256 } from "ethers";

describe("MockContractWithCall", function () {
  async function setupTests() {
    return loadFixture(async function setup() {
      const signers: SignerWithAddress[] = await ethers.getSigners();
      const { mockContractWithCall } = await deployMockContractWithCallFixture(signers[0])

      return { mockContractWithCall };
    })
  }

  describe("execute calls via mocks", function () {
    it("should execute call via mock", async function () {
      const { mockContractWithCall } = await setupTests();

      const otherMockContract = await ethers.deployContract("MockContract");

      await mockContractWithCall.executeCallViaMock(otherMockContract.target, 0, "0x12345678", MaxUint256);
      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(1);
      expect(await otherMockContract.invocationCount()).to.be.equal(1);
    });

    it("should execute delegatecall via mock", async function () {
      const { mockContractWithCall } = await setupTests();
      const otherMockContract = await ethers.deployContract("MockContract");

      await mockContractWithCall.executeDelegatecallViaMock(otherMockContract.target, "0x12345678", MaxUint256);

      expect(await otherMockContract.invocationCountForCalldata("0x12345678")).to.be.equal(0);
      expect(await otherMockContract.invocationCount()).to.be.equal(0);
    });
  });
});
