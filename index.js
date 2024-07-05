const { getTotalSupply } = require("./getSupply");
const { getIssuerBalance } = require("./xrp");

async function main() {
 const polygonTokenAddress = '0xE6A537a407488807F0bbeb0038B79004f19DDDFb' 
 const polygonRpc =   'https://polygon-rpc.com/'
 const MoonbeamTokenAddress = '0xfeB25F3fDDad13F82C4d6dbc1481516F62236429' 
 const MoonbeamRpc =   'https://rpc.ankr.com/moonbeam'
 const CeloTokenAddress = '0xFECB3F7c54E2CAAE9dC6Ac9060A822D47E053760' 
 const XRPIssuer = "rNWrQWYxqYj4Rz5RNrJxHeEMTwZrNtz9vy"
 const CeloRpc =   'https://rpc.ankr.com/celo'
 const polygonSupply =    await getTotalSupply(polygonTokenAddress, polygonRpc)
 const MoonbeamSupply =    await getTotalSupply(MoonbeamTokenAddress, MoonbeamRpc)
 const CeloSupply =    await getTotalSupply(CeloTokenAddress, CeloRpc)
 const xrpSupply = await getIssuerBalance(XRPIssuer)
 const supplyFinal = polygonSupply + MoonbeamSupply + CeloSupply + xrpSupply
 console.log("supplyFinal: ", supplyFinal)
}

main()