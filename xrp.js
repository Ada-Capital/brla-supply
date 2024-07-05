const xrpl = require("xrpl");

// Configuração do cliente
const client = new xrpl.Client("wss://s2.ripple.com");

// Endereço do emissor


async function getIssuerBalance(issuerAddressXRP) {
    const issuerAddress = issuerAddressXRP;
    try {
        // Conectar ao servidor XRPL
        await client.connect();

        // Solicitar informações da conta
        const accountInfo = await client.request({
            command: "account_info",
            account: issuerAddress,
            ledger_index: "validated"
        });

        // Obter o saldo
        const balance = accountInfo.result.account_data.Balance;
        return parseFloat(xrpl.dropsToXrp(balance))
    } catch (error) {
        console.error(`Erro ao obter o balance: ${error}`);
    } finally {
        // Desconectar do servidor
        await client.disconnect();
    }
}

// Chamar a função para obter o balance
module.exports  = {
    getIssuerBalance
  };
