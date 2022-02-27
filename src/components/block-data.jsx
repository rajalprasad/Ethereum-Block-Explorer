import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './block-data.styles.scss';

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
            <h1 className='blockDataPageBlockNum'>Block: {blockData.number}</h1>
            <div className='blockInfo'>
                <p>hash: {blockData.hash}</p>
                <p>timestamp: {blockData.timestamp}</p>
                <p>nonce: {blockData.nonce}</p>
                <p>parentHash: {blockData.parentHash}</p>
            </div>
            <Link className="homePageLink" to="/">Home Page</Link>
        </>
    )
}