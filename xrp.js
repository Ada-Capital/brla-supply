const xrpl = require("xrpl");

// Configuração do cliente
const client = new xrpl.Client("wss://s2.ripple.com");

// Endereço do emissor


async function getIssuerBalance(issuerAddressXRP) {
    try {
        // Conectar ao servidor XRPL
        await client.connect();

        // Solicitar informações dos saldos da conta
        const accountLines = await client.request({
            command: "account_lines",
            account: issuerAddressXRP
        });

        // Inicializa um acumulador para os saldos das obrigações em BRL
        let totalObligationsBRL = 0;

        // Processar e acumular os saldos das obrigações em BRL
        accountLines.result.lines.forEach(line => {
            if (line.currency === 'BRL') {
                totalObligationsBRL += parseFloat(line.balance);
            }
        });

        // Exibir o total das obrigações em BRL
        console.log(`Total Obligation in BRL: ${totalObligationsBRL}`);
        return parseFloat(totalObligationsBRL)*-1
    } catch (error) {
        console.error(`Erro ao obter os saldos das obrigações: ${error}`);
    } finally {
        // Desconectar do servidor
        await client.disconnect();
    }
}

// Chamar a função para obter o balance
module.exports  = {
    getIssuerBalance
  };
