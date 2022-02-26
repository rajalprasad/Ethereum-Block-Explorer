import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ethers = require('ethers');
const api = process.env.API_TOKEN;
const provider = new ethers.providers.AlchemyProvider("homestead", api);

export function BlockData() {

    const getBlockNumber = useLocation();
    const { blockNumber } = getBlockNumber.state;

    const [blockData, setBlockData] = useState([]);

    useEffect(() => {
        const loadBlockData = async () => {
            const ethBlockData = await provider.getBlock(blockNumber);

            setBlockData(ethBlockData);
        }
        loadBlockData();
    }, []);
    
    return (
        <>
            <h1>{blockData.number}</h1>
            <p>{blockData.hash}</p>
        </>
    )
}