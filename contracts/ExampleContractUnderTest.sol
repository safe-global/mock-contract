// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.0 <0.9.0;

import "./ComplexInterface.sol";

contract ExampleContractUnderTest {
    ComplexInterface complexInterface;

    constructor(address _complexInterface) {
        complexInterface = ComplexInterface(_complexInterface);
    }

    function callMockedFunction3Times() public view returns (bool) {
        complexInterface.acceptUintReturnUintView(1);
        complexInterface.acceptUintReturnUintView(1);
        complexInterface.acceptUintReturnUintView(1);
        return true;
    }

    function callMethodThatReturnsAddress() public view returns (address) {
        address foo = complexInterface.acceptUintReturnAddressView(1);
        return foo;
    }

    function callMethodThatReturnsBool() public view returns (bool) {
        return complexInterface.acceptUintReturnBoolView(1);
    }
}
