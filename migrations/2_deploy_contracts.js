var Wager = artifacts.require("./contracts/Wager.sol");
var Register = artifacts.require("./contracts/Register.sol")
var Web3 = require("../node_modules/web3/");
web3 = new Web3(new Web3.providers.HttpProvider("http://rockppdcf.eastus.cloudapp.azure.com:8545"));

module.exports = function(deployer) {
  deployer.deploy(Wager, {
    from: web3.eth.accounts[0],
    value: web3.toWei((500000), 'ether')
  });
  deployer.deploy(Register, {
    from: web3.eth.accounts[0], 
    value: web3.toWei(2500000, 'ether')
  })
};
