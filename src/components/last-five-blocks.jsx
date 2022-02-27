import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './last-five-blocks.styles.scss';

const ethers = require('ethers');
const api = process.env.API_TOKEN;
const provider = new ethers.providers.AlchemyProvider("homestead", api);

export function LastFiveBlocks() {

    const [block, setBlock] = useState([]);

    useEffect(() => {
        const loadBlock = async () => {
            const latestBlock = await provider.getBlockNumber();
            const lastFewBlocks = [];
            for (let i=0; i<5; i++) {
                lastFewBlocks.push(latestBlock - i);
            }
            //Load last 5 blocks to an array
            setBlock(lastFewBlocks);
        }
        loadBlock();
    }, []);

    return (
        <>
            <h1 className='homePageTitle'>
                Ethereum Blockchain Explorer
            </h1>
            <div className='homePageBlockNum'>
                {block.map((blockNumber) => (
                    <div key={blockNumber}>
                        <Link to="/blockdata" state={{from: blockNumber}}>
                            Block {blockNumber}
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}