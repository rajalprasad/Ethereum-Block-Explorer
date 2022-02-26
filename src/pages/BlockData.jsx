const ethers = require('ethers');
const api = process.env.API_TOKEN;
const provider = new ethers.providers.AlchemyProvider("homestead", api);


export function BlockData(props) {

    const blockData = [await provider.getBlock(props)];

    
    return(
        <h1>{blockData.number}</h1>
    )
}