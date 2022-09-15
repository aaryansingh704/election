//loads the smart contract to Election variable
var Election = artifacts.require("./Election.sol");
//deploying Election smart contract
module.exports = function(deployer) {
  deployer.deploy(Election);
};
