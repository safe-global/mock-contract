// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.8.4 <0.9.0;

/**
 * @dev Used for unit testing MockContract functionality.
 */
interface ComplexInterface {
    function methodA() external;

    function methodB() external;

    function acceptAddressUintReturnBoolView(address recipient, uint amount) external view returns (bool);

    function acceptUintReturnStringView(uint) external view returns (string memory);

    function acceptUintReturnBoolView(uint) external view returns (bool);

    function acceptUintReturnUintView(uint) external view returns (uint);

    function acceptUintReturnAddressView(uint) external view returns (address);

    function acceptUintReturnUint(uint) external returns (uint);

    function acceptUintReturnString(uint) external returns (string memory);
}
