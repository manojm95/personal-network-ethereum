pragma solidity ^0.4.6;

contract Calculator {

  uint result;

  constructor(uint val) public 
  {
      result = val;
  }

  // returns the result
  function getResult() public constant returns (uint) {
    return result;
  }

  // result = result + num
  function addToNumber(uint num) public returns (uint) {
    result += num;
    return result;
  }

  // result = result - num
  function substractFromNumber(uint num) public returns (uint) {
    result -= num;
    return result;
  }

  // result = result * num
  function multiplyWithNumber() public view returns (uint) {
    return result;
  }

  // result = result / num
  function divideNumberBy() public view returns (uint) {
    return result;
  }

}
