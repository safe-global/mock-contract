/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import * as Contracts from ".";
import {
  DeployContractOptions,
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomicfoundation/hardhat-ethers/types";
import { ethers } from "ethers";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ComplexInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ComplexInterface__factory>;
    getContractFactory(
      name: "ExampleContractUnderTest",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExampleContractUnderTest__factory>;
    getContractFactory(
      name: "MockContract",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockContract__factory>;
    getContractFactory(
      name: "MockInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockInterface__factory>;

    getContractAt(
      name: "ComplexInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ComplexInterface>;
    getContractAt(
      name: "ExampleContractUnderTest",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.ExampleContractUnderTest>;
    getContractAt(
      name: "MockContract",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockContract>;
    getContractAt(
      name: "MockInterface",
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<Contracts.MockInterface>;

    deployContract(
      name: "ComplexInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ComplexInterface>;
    deployContract(
      name: "ExampleContractUnderTest",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ExampleContractUnderTest>;
    deployContract(
      name: "MockContract",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockContract>;
    deployContract(
      name: "MockInterface",
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockInterface>;

    deployContract(
      name: "ComplexInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ComplexInterface>;
    deployContract(
      name: "ExampleContractUnderTest",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.ExampleContractUnderTest>;
    deployContract(
      name: "MockContract",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockContract>;
    deployContract(
      name: "MockInterface",
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<Contracts.MockInterface>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string | ethers.Addressable,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
    deployContract(
      name: string,
      args: any[],
      signerOrOptions?: ethers.Signer | DeployContractOptions
    ): Promise<ethers.Contract>;
  }
}
