const { ethers } = require("ethers");
const { BRLAContractAbi } = require("./abis");
const {Web3} = require("web3");
// Insira seu URL do provider da rede Polygon (por exemplo, Infura, Alchemy, etc.)


// ABI mínima para interagir com a função totalSupply de um contrato ERC20


const getTotalSupply = async (tokenAddress, RPCUrl) => {

    // Cria uma instância do contrato
    const web3 = new Web3(new Web3.providers.HttpProvider(RPCUrl));
    const tokenContract = new web3.eth.Contract(BRLAContractAbi, tokenAddress);

    try {
        // Chama a função totalSupply
        const totalSupply = await tokenContract.methods.totalSupply().call();
        return parseFloat(totalSupply)/(10**18)
    } catch (error) {
        console.error(`Erro ao obter o total supply: ${error}`);
    }
}

module.exports  = {
    getTotalSupply
  };