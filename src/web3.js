import Web3 from 'web3'

if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {

  // set the provider you want from Web3.providers
  // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  window.web3 = undefined
  if (process.env.NODE_ENV=="development"){
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
  }
  if (process.env.NODE_ENV=="production"){
    web3 = new Web3(new Web3.providers.HttpProvider("https://api.myetherapi.com/eth"));
  }

}

export default web3