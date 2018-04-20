import web3 from  './web3'
import { abi,address,auctionAbi,auctionAddress,MyContract} from './config'
window.ContractInstance = MyContract.at(address);
let planet = window.ContractInstance
// console.log(web3.currentProvider)
// planet.purseAddress = web3.currentProvider.publicConfigStore._state.selectedAddress
export default planet