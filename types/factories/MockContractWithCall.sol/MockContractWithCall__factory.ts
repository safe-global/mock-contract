/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MockContractWithCall,
  MockContractWithCallInterface,
} from "../../MockContractWithCall.sol/MockContractWithCall";
import type { NonPayableOverrides } from "../../common";
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";

const _abi = [
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "DEFAULT_FALLBACK_VALUE",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MOCKS_LIST_END",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MOCKS_LIST_END_HASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MOCKS_LIST_START",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SENTINEL_ANY_MOCKS",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "executeCallViaMock",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "executeDelegatecallViaMock",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "givenAnyReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "response",
        type: "address",
      },
    ],
    name: "givenAnyReturnAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "response",
        type: "bool",
      },
    ],
    name: "givenAnyReturnBool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "response",
        type: "uint256",
      },
    ],
    name: "givenAnyReturnUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "givenAnyRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "givenAnyRevertWithMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "givenAnyRunOutOfGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "givenCalldataReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "response",
        type: "address",
      },
    ],
    name: "givenCalldataReturnAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "response",
        type: "bool",
      },
    ],
    name: "givenCalldataReturnBool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "response",
        type: "bytes32",
      },
    ],
    name: "givenCalldataReturnBytes32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "response",
        type: "uint256",
      },
    ],
    name: "givenCalldataReturnUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "givenCalldataRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "givenCalldataRevertWithMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "givenCalldataRunOutOfGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes",
      },
    ],
    name: "givenMethodReturn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "response",
        type: "address",
      },
    ],
    name: "givenMethodReturnAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "response",
        type: "bool",
      },
    ],
    name: "givenMethodReturnBool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "response",
        type: "bytes32",
      },
    ],
    name: "givenMethodReturnBytes32",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "response",
        type: "uint256",
      },
    ],
    name: "givenMethodReturnUint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "givenMethodRevert",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "givenMethodRevertWithMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "givenMethodRunOutOfGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "invocationCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "invocationCountForCalldata",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "call",
        type: "bytes",
      },
    ],
    name: "invocationCountForMethod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "reset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "methodId",
        type: "bytes4",
      },
      {
        internalType: "bytes",
        name: "originalMsgData",
        type: "bytes",
      },
    ],
    name: "updateInvocationCount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x5f60a0526020608090815260c0604052600b906200001e908262000169565b503480156200002b575f80fd5b50604080518082019091526004815263183c333360e11b602080830191909152600160f81b5f90815290527f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc9062000084908262000169565b50600160f81b5f5260056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a805463ffffffff1916630100000017905562000231565b634e487b7160e01b5f52604160045260245ffd5b600181811c90821680620000f257607f821691505b6020821081036200011157634e487b7160e01b5f52602260045260245ffd5b50919050565b601f82111562000164575f81815260208120601f850160051c810160208610156200013f5750805b601f850160051c820191505b8181101562000160578281556001016200014b565b5050505b505050565b81516001600160401b03811115620001855762000185620000c9565b6200019d81620001968454620000dd565b8462000117565b602080601f831160018114620001d3575f8415620001bb5750858301515b5f19600386901b1c1916600185901b17855562000160565b5f85815260208120601f198616915b828110156200020357888601518255948401946001909101908401620001e2565b50858210156200022157878501515f19600388901b60f8161c191681555b5050505050600190811b01905550565b612eaa806200023f5f395ff3fe608060405260043610610237575f3560e01c80637dd1536311610137578063cf11ff5d116100af578063e211b8a51161007e578063f07da22911610063578063f07da229146106e7578063f5afa9c11461074b578063fa904ee01461076a57610246565b8063e211b8a5146106b4578063eb861f69146106c857610246565b8063cf11ff5d14610643578063d6fe977814610662578063d73ca0ac14610681578063d826f88f146106a057610246565b80639eaeed7511610106578063af21ac78116100eb578063af21ac78146105e6578063b3901f2914610605578063c6ee167f1461062457610246565b80639eaeed75146105a8578063aa788c55146105c757610246565b80637dd153631461051e57806387abab651461054b5780638bc80f451461056a5780639a1dc86b1461058957610246565b8063586984a4116101ca57806367aad04a1161019957806368ab6f2f1161017e57806368ab6f2f146104985780636f400756146104b75780637cd96ee4146104d657610246565b806367aad04a14610446578063682b47971461047957610246565b8063586984a4146103ca57806358cbc025146103e95780635a3855ab14610408578063619365941461042757610246565b80632ed238dc116102065780632ed238dc146102e857806336ff0ee5146103505780633956dc6b1461036f5780634937c4f6146103ab57610246565b80630a20119f1461024e5780630f91beea14610271578063122aea811461029057806321fed4d6146102c957610246565b3661024657610244610789565b005b610244610789565b348015610259575f80fd5b50600d545b6040519081526020015b60405180910390f35b34801561027c575f80fd5b5061024461028b366004612364565b610d11565b34801561029b575f80fd5b506102bc604080515f60208201520160405160208183030381529060405281565b6040516102689190612417565b3480156102d4575f80fd5b506102446102e3366004612430565b610d75565b3480156102f3575f80fd5b5060408051808201909152600481527f307866660000000000000000000000000000000000000000000000000000000060209091015261025e7f420daffad4b177bce28bead5f76f7bc97ef63c3aae74c496db8ce6aafe9e651381565b34801561035b575f80fd5b5061024461036a366004612483565b610e17565b34801561037a575f80fd5b50610244600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166002179055565b3480156103b6575f80fd5b5061025e6103c5366004612430565b610e3c565b3480156103d5575f80fd5b5061025e6103e4366004612430565b610eef565b3480156103f4575f80fd5b50610244610403366004612570565b610f36565b348015610413575f80fd5b506102446104223660046125e1565b6110af565b348015610432575f80fd5b50610244610441366004612631565b611112565b348015610451575f80fd5b5061025e7f010000000000000000000000000000000000000000000000000000000000000081565b348015610484575f80fd5b506102446104933660046126b9565b611183565b3480156104a3575f80fd5b506102446104b2366004612430565b6111a8565b3480156104c2575f80fd5b506102446104d13660046125e1565b611253565b3480156104e1575f80fd5b506102bc6040518060400160405280600481526020017f307866660000000000000000000000000000000000000000000000000000000081525081565b348015610529575f80fd5b5061053d6105383660046126d4565b6112b0565b604051610268929190612731565b348015610556575f80fd5b50610244610565366004612430565b611329565b348015610575575f80fd5b5061053d610584366004612753565b611361565b348015610594575f80fd5b506102446105a3366004612631565b6113d5565b3480156105b3575f80fd5b506102446105c2366004612631565b611496565b3480156105d2575f80fd5b506102446105e1366004612430565b611563565b3480156105f1575f80fd5b506102446106003660046127a8565b611603565b348015610610575f80fd5b5061024461061f3660046127bf565b61160f565b34801561062f575f80fd5b5061024461063e366004612631565b611667565b34801561064e575f80fd5b5061024461065d3660046127bf565b6116d8565b34801561066d575f80fd5b5061024461067c366004612430565b611730565b34801561068c575f80fd5b5061024461069b366004612364565b61176e565b3480156106ab575f80fd5b506102446117b2565b3480156106bf575f80fd5b50610244611dbc565b3480156106d3575f80fd5b506102446106e2366004612430565b611e02565b3480156106f2575f80fd5b5061071a7f010000000000000000000000000000000000000000000000000000000000000081565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610268565b348015610756575f80fd5b50610244610765366004612364565b611edb565b348015610775575f80fd5b50610244610784366004612364565b611f1f565b7fffffffff000000000000000000000000000000000000000000000000000000005f35166001805f366040516107c092919061283f565b9081526040519081900360200190205460ff1660028111156107e4576107e4612812565b036108425760035f366040516107fb92919061283f565b9081526040519081900360200181207f08c379a00000000000000000000000000000000000000000000000000000000082526108399160040161289f565b60405180910390fd5b600260015f3660405161085692919061283f565b9081526040519081900360200190205460ff16600281111561087a5761087a612812565b0361088757610887611f7e565b5f60025f3660405161089a92919061283f565b908152602001604051809103902080546108b39061284e565b80601f01602080910402602001604051908101604052809291908181526020018280546108df9061284e565b801561092a5780601f106109015761010080835404028352916020019161092a565b820191905f5260205f20905b81548152906001019060200180831161090d57829003601f168201915b5050505050905080515f03610af75760017fffffffff0000000000000000000000000000000000000000000000000000000083165f9081526006602052604090205460ff16600281111561098057610980612812565b036109e9577fffffffff0000000000000000000000000000000000000000000000000000000082165f908152600860205260409081902090517f08c379a0000000000000000000000000000000000000000000000000000000008152610839919060040161289f565b60027fffffffff0000000000000000000000000000000000000000000000000000000083165f9081526006602052604090205460ff166002811115610a3057610a30612812565b03610a3d57610a3d611f7e565b7fffffffff0000000000000000000000000000000000000000000000000000000082165f9081526007602052604090208054610a789061284e565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa49061284e565b8015610aef5780601f10610ac657610100808354040283529160200191610aef565b820191905f5260205f20905b815481529060010190602001808311610ad257829003601f168201915b505050505090505b80515f03610c04576001600a5460ff166002811115610b1857610b18612812565b03610b5257600c6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610839919061289f565b6002600a5460ff166002811115610b6b57610b6b612812565b03610b7857610b78611f7e565b600b8054610b859061284e565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb19061284e565b8015610bfc5780601f10610bd357610100808354040283529160200191610bfc565b820191905f5260205f20905b815481529060010190602001808311610bdf57829003601f168201915b505050505090505b5f3073ffffffffffffffffffffffffffffffffffffffff16620186a0845f36604051602401610c3593929190612942565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529181526020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f58cbc0250000000000000000000000000000000000000000000000000000000017905251610cb691906129b7565b5f604051808303815f8787f1925050503d805f8114610cf0576040519150601f19603f3d011682016040523d82523d5f602084013e610cf5565b606091505b5091505080515f14610d0957610d096129d2565b815182602001f35b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250506040805160208101879052019150610d5c9050565b604051602081830303815290604052611f97565b505050565b600260018383604051610d8992919061283f565b90815260405190819003602001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115610dd057610dd0612812565b0217905550610e1382828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061202592505050565b5050565b5f81610e23575f610e26565b60015b60ff169050610e13610e37826120db565b612105565b5f80610e7c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061213992505050565b905060095f600e5483604051602001610ec19291909182527fffffffff0000000000000000000000000000000000000000000000000000000016602082015260240190565b6040516020818303038152906040528051906020012081526020019081526020015f20549150505b92915050565b5f60045f600e548585604051602001610f0a939291906129ff565b6040516020818303038152906040528051906020012081526020019081526020015f2054905092915050565b333014610fc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f43616e206f6e6c792062652063616c6c65642066726f6d2074686520636f6e7460448201527f7261637420697473656c660000000000000000000000000000000000000000006064820152608401610839565b6001600d5f828254610fd79190612a45565b92505081905550600160095f600e54856040516020016110239291909182527fffffffff0000000000000000000000000000000000000000000000000000000016602082015260240190565b6040516020818303038152906040528051906020012081526020019081526020015f205f8282546110549190612a45565b92505081905550600160045f600e5484604051602001611075929190612a58565b6040516020818303038152906040528051906020012081526020019081526020015f205f8282546110a69190612a45565b90915550505050565b5f816110bb575f6110be565b60015b60ff16905061110c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061110792508591506120db9050565b611f97565b50505050565b61110c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f880181900481028201810190925286815292508691508590819084018382808284375f92019190915250611f9792505050565b6111a5610e378273ffffffffffffffffffffffffffffffffffffffff166120db565b50565b5f6111e783838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061213992505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f90815260066020526040902080549192506002917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001835b0217905550610d70816121aa565b5f8161125f575f611262565b60015b60ff16905061110c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112ab92508591506120db9050565b61229e565b5f60608573ffffffffffffffffffffffffffffffffffffffff16858490866040516112db91906129b7565b5f60405180830381858888f193505050503d805f8114611316576040519150601f19603f3d011682016040523d82523d5f602084013e61131b565b606091505b509097909650945050505050565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055600c610d70828483612aca565b5f60608473ffffffffffffffffffffffffffffffffffffffff16838560405161138a91906129b7565b5f604051808303818686f4925050503d805f81146113c3576040519150601f19603f3d011682016040523d82523d5f602084013e6113c8565b606091505b5090969095509350505050565b5f61141485858080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061213992505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f90815260066020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560089091529020909150611485838583612aca565b5061148f816121aa565b5050505050565b60018085856040516114a992919061283f565b90815260405190819003602001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660018360028111156114f0576114f0612812565b021790555081816003868660405161150992919061283f565b90815260200160405180910390209182611524929190612aca565b5061110c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061202592505050565b5f6115a283838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061213992505050565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f90815260066020526040902080549192506001917fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168280611245565b6111a5610e37826120db565b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506111079250505073ffffffffffffffffffffffffffffffffffffffff84166120db565b61110c84848080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525050604080516020601f880181900481028201810190925286815292508691508590819084018382808284375f9201919091525061229e92505050565b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112ab9250505073ffffffffffffffffffffffffffffffffffffffff84166120db565b610e1382828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061210592505050565b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061110792508591506120db9050565b7f01000000000000000000000000000000000000000000000000000000000000005f90815260208190527f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc80546118089061284e565b80601f01602080910402602001604051908101604052809291908181526020018280546118349061284e565b801561187f5780601f106118565761010080835404028352916020019161187f565b820191905f5260205f20905b81548152906001019060200180831161186257829003601f168201915b5050835160208501209394505050505b60408051808201909152600481527f30786666000000000000000000000000000000000000000000000000000000006020909101527f420daffad4b177bce28bead5f76f7bc97ef63c3aae74c496db8ce6aafe9e65138114611a87575f6001836040516118fc91906129b7565b90815260405190819003602001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600183600281111561194357611943612812565b021790555060405180602001604052805f81525060028360405161196791906129b7565b908152602001604051809103902090816119819190612be1565b5060405180602001604052805f8152506003836040516119a191906129b7565b908152602001604051809103902090816119bb9190612be1565b505f81815260208190526040902080546119d49061284e565b80601f0160208091040260200160405190810160405280929190818152602001828054611a009061284e565b8015611a4b5780601f10611a2257610100808354040283529160200191611a4b565b820191905f5260205f20905b815481529060010190602001808311611a2e57829003601f168201915b505060408051602080820183525f8083528881529081905291909120949650611a7993509150839050612be1565b50508051602082012061188f565b60408051808201909152600481527f30786666000000000000000000000000000000000000000000000000000000006020808301919091527f01000000000000000000000000000000000000000000000000000000000000005f90815290527f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc90611b129082612be1565b507f01000000000000000000000000000000000000000000000000000000000000005f5260056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a5460e01b5b7fffffffff0000000000000000000000000000000000000000000000000000000081167f010000000000000000000000000000000000000000000000000000000000000014611cce577fffffffff0000000000000000000000000000000000000000000000000000000081165f81815260066020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905580518083018252838152938352600790915290208291611c239082612be1565b5060408051602080820183525f8083527fffffffff000000000000000000000000000000000000000000000000000000008516815260089091529190912090611c6c9082612be1565b507fffffffff00000000000000000000000000000000000000000000000000000000165f90815260056020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000811690915560e01b9050611b61565b7f01000000000000000000000000000000000000000000000000000000000000005f908152600560209081527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000000166301000000179055604080519182019290925201604051602081830303815290604052600b9081611d709190612be1565b50600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555f600d819055600e805460019290611db2908490612a45565b9091555050505050565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905560408051602081019091525f8152600c906111a59082612be1565b6001808383604051611e1592919061283f565b90815260405190819003602001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115611e5c57611e5c612812565b021790555060405180602001604052805f81525060038383604051611e8292919061283f565b90815260200160405180910390209081611e9c9190612be1565b50610e1382828080601f0160208091040260200160405190810160405280939291908181526020018383808284375f9201919091525061202592505050565b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152506112ab92508591506120db9050565b610d7083838080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250506040805160208101879052019150611f6a9050565b60405160208183030381529060405261229e565b5b5f60605f60c05f8060066107d05a03f1905050611f7f565b5f600183604051611fa891906129b7565b90815260405190819003602001902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001836002811115611fef57611fef612812565b02179055508060028360405161200591906129b7565b9081526020016040518091039020908161201f9190612be1565b50610e13825b80516020808301919091205f81815291829052604090912080546120489061284e565b90505f03610e13575f6020819052818152604090206120877f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc82612cf9565b507f01000000000000000000000000000000000000000000000000000000000000005f9081526020527f82ac279db26a206d9ba5a94c07ff940aea4b3bfde8820ec95f4efa0acfd0d5bc610d708382612be1565b60408051602080825281830190925260609160208201818036833750505060208101929092525090565b600a80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055600b610e138282612be1565b5f805f5b60048110156121a357612151816008612e22565b84828151811061216357612163612e39565b01602001517fff0000000000000000000000000000000000000000000000000000000000000016901c91909117908061219b81612e66565b91505061213d565b5092915050565b7fffffffff000000000000000000000000000000000000000000000000000000008082165f9081526005602052604081205460e01b90911690036111a55760056020527fde001afd1f75281f9d2ab22d4e0166be5a51dd890d7492e8fbf3e412e05eac0a80547fffffffff0000000000000000000000000000000000000000000000000000000083165f90815260408120805463ffffffff9093167fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000009384161790557f01000000000000000000000000000000000000000000000000000000000000009052815460e084901c911617905550565b5f6122a883612139565b7fffffffff0000000000000000000000000000000000000000000000000000000081165f90815260066020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055600790915290209091506123158382612be1565b50610d70816121aa565b5f8083601f84011261232f575f80fd5b50813567ffffffffffffffff811115612346575f80fd5b60208301915083602082850101111561235d575f80fd5b9250929050565b5f805f60408486031215612376575f80fd5b833567ffffffffffffffff81111561238c575f80fd5b6123988682870161231f565b909790965060209590950135949350505050565b5f5b838110156123c65781810151838201526020016123ae565b50505f910152565b5f81518084526123e58160208601602086016123ac565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081525f61242960208301846123ce565b9392505050565b5f8060208385031215612441575f80fd5b823567ffffffffffffffff811115612457575f80fd5b6124638582860161231f565b90969095509350505050565b8035801515811461247e575f80fd5b919050565b5f60208284031215612493575f80fd5b6124298261246f565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b5f82601f8301126124d8575f80fd5b813567ffffffffffffffff808211156124f3576124f361249c565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156125395761253961249c565b81604052838152866020858801011115612551575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f8060408385031215612581575f80fd5b82357fffffffff00000000000000000000000000000000000000000000000000000000811681146125b0575f80fd5b9150602083013567ffffffffffffffff8111156125cb575f80fd5b6125d7858286016124c9565b9150509250929050565b5f805f604084860312156125f3575f80fd5b833567ffffffffffffffff811115612609575f80fd5b6126158682870161231f565b909450925061262890506020850161246f565b90509250925092565b5f805f8060408587031215612644575f80fd5b843567ffffffffffffffff8082111561265b575f80fd5b6126678883890161231f565b9096509450602087013591508082111561267f575f80fd5b5061268c8782880161231f565b95989497509550505050565b73ffffffffffffffffffffffffffffffffffffffff811681146111a5575f80fd5b5f602082840312156126c9575f80fd5b813561242981612698565b5f805f80608085870312156126e7575f80fd5b84356126f281612698565b935060208501359250604085013567ffffffffffffffff811115612714575f80fd5b612720878288016124c9565b949793965093946060013593505050565b8215158152604060208201525f61274b60408301846123ce565b949350505050565b5f805f60608486031215612765575f80fd5b833561277081612698565b9250602084013567ffffffffffffffff81111561278b575f80fd5b612797868287016124c9565b925050604084013590509250925092565b5f602082840312156127b8575f80fd5b5035919050565b5f805f604084860312156127d1575f80fd5b833567ffffffffffffffff8111156127e7575f80fd5b6127f38682870161231f565b909450925050602084013561280781612698565b809150509250925092565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b818382375f9101908152919050565b600181811c9082168061286257607f821691505b602082108103612899577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b5f60208083525f84546128b18161284e565b8084870152604060018084165f81146128d1576001811461290957612934565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008516838a01528284151560051b8a01019550612934565b895f52865f205f5b8581101561292c5781548b8201860152908301908801612911565b8a0184019650505b509398975050505050505050565b7fffffffff000000000000000000000000000000000000000000000000000000008416815260406020820152816040820152818360608301375f818301606090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016010192915050565b5f82516129c88184602087016123ac565b9190910192915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52600160045260245ffd5b838152818360208301375f910160200190815292915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b80820180821115610ee957610ee9612a18565b8281525f8251612a6f8160208501602087016123ac565b919091016020019392505050565b601f821115610d70575f81815260208120601f850160051c81016020861015612aa35750805b601f850160051c820191505b81811015612ac257828155600101612aaf565b505050505050565b67ffffffffffffffff831115612ae257612ae261249c565b612af683612af0835461284e565b83612a7d565b5f601f841160018114612b46575f8515612b105750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b17835561148f565b5f838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b82811015612b945786850135825560209485019460019092019101612b74565b5086821015612bcf577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b815167ffffffffffffffff811115612bfb57612bfb61249c565b612c0f81612c09845461284e565b84612a7d565b602080601f831160018114612c61575f8415612c2b5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b178555612ac2565b5f858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015612cad57888601518255948401946001909101908401612c8e565b5085821015612ce957878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b818103612d04575050565b612d0e825461284e565b67ffffffffffffffff811115612d2657612d2661249c565b612d3481612c09845461284e565b5f601f821160018114612d84575f8315612d4e5750848201545b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600385901b1c1916600184901b17845561148f565b5f858152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08416905f86815260209020845b83811015612dda5782860154825560019586019590910190602001612dba565b5085831015612ce9579301547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f8600387901b161c19169092555050600190811b01905550565b8082028115828204841417610ee957610ee9612a18565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612e9657612e96612a18565b506001019056fea164736f6c6343000815000a";

type MockContractWithCallConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockContractWithCallConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockContractWithCall__factory extends ContractFactory {
  constructor(...args: MockContractWithCallConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockContractWithCall & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockContractWithCall__factory {
    return super.connect(runner) as MockContractWithCall__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockContractWithCallInterface {
    return new Interface(_abi) as MockContractWithCallInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockContractWithCall {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockContractWithCall;
  }
}
