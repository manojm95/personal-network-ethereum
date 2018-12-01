var Calculator = artifacts.require("./Calculator.sol");

contract('Calculator', function(accounts) {

  console.log('aaaaaa');
  // Expected behavior - result is initialized to 10
  // Test Case#1
  it("should put 10000 MetaCoin in the first account", function() {
    return Calculator.deployed().then(function(instance) {
      return instance.getResult.call();
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 10, "10000 wasn't in the first account");
    });
  });

  // Test case#2 Checks if calls to add/subtract for ((Initial_Value + 10) - 5) = 15
  // it("should add 10 and then substract 5 to get a result=15", function () {
  //   // Get the deployed instance
  //   var calculator;
    
  //   return Calculator.deployed().then(function(instance){
  //     calculator = instance;
  //     return calculator.addToNumber(10)
  //   }).then(function () {
  //     return calculator.getResult.call();
  //   }).then(function (result) {

  //     assert.equal(result.toNumber(), 20, "Result after adding 10 should be 20");
  //     // Now substract 10
  //     return calculator.substractFromNumber(5)
  //   }).then(function () {
  //     return calculator.getResult.call();
  //   }).then(function (result) {
  //     assert.equal(result.toNumber(), 15, "Result after subtracting 5 should be 15");
  //   });
  // });

  // Add Test Case#3 here

  // Add Test Case#4 here
});