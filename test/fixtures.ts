
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomicfoundation/hardhat-ethers/signers";
import type {
  ExampleContractUnderTest,
  MockContract,
  MockContractWithCall,
} from "../types";
import { AddressLike } from "ethers";


async function deployMockContractFixture(signer: SignerWithAddress): Promise<{ mockContract: MockContract }> {
  const mockContractFactory = await ethers.getContractFactory("MockContract")
  const mockContract = await mockContractFactory.connect(signer).deploy();
  await mockContract.waitForDeployment();

  return { mockContract };
}

async function deployMockContractWithCallFixture(signer: SignerWithAddress): Promise<{ mockContractWithCall: MockContractWithCall }> {
  const mockContractWithCallFactory = await ethers.getContractFactory("MockContractWithCall")
  const mockContractWithCall = await mockContractWithCallFactory.connect(signer).deploy();
  await mockContractWithCall.waitForDeployment();

  return { mockContractWithCall };
}

async function deployContractUnderTest(signer: SignerWithAddress, mockAddress: AddressLike): Promise<{ contractUnderTest: ExampleContractUnderTest }> {
  const contractUnderTestFactory = await ethers.getContractFactory("ExampleContractUnderTest")
  const contractUnderTest = await contractUnderTestFactory.connect(signer).deploy(mockAddress)
  await contractUnderTest.waitForDeployment();

  return { contractUnderTest }
}

export { deployMockContractFixture, deployContractUnderTest, deployMockContractWithCallFixture }