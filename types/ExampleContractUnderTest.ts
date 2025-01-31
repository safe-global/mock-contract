/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";

export interface ExampleContractUnderTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "callMethodThatReturnsAddress"
      | "callMethodThatReturnsBool"
      | "callMockedFunction3Times"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "callMethodThatReturnsAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callMethodThatReturnsBool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callMockedFunction3Times",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "callMethodThatReturnsAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callMethodThatReturnsBool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callMockedFunction3Times",
    data: BytesLike
  ): Result;
}

export interface ExampleContractUnderTest extends BaseContract {
  connect(runner?: ContractRunner | null): ExampleContractUnderTest;
  waitForDeployment(): Promise<this>;

  interface: ExampleContractUnderTestInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  callMethodThatReturnsAddress: TypedContractMethod<[], [string], "view">;

  callMethodThatReturnsBool: TypedContractMethod<[], [boolean], "view">;

  callMockedFunction3Times: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "callMethodThatReturnsAddress"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "callMethodThatReturnsBool"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "callMockedFunction3Times"
  ): TypedContractMethod<[], [boolean], "view">;

  filters: {};
}
