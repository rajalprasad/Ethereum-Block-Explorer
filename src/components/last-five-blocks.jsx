import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const ethers = require('ethers');
const api = process.env.API_TOKEN;
const provider = new ethers.providers.AlchemyProvider("homestead", api);

export function LastFiveBlocks() {

    const [block, setBlock] = useState([]);

    useEffect(() => {
        const loadBlock = async () => {
            const latestBlock = await provider.getBlockNumber();
            //const response = await provider.getBlock(latestBlock);
            lastFewBlocks = [];
            for (let i=0; i<5; i++) {
                lastFewBlocks.push(latestBlock - i);
            }

            setBlock(lastFewBlocks);
        }
        loadBlock();
    }, []);

    return (
        <>
            <h1>
                Ethereum Blockchain Explorer
            </h1>
            <div>
                {block.map(item => (
                    <p>
                        <Link to="/blockdata" key={item}>Block {item}</Link>
                    </p>
                ))}
            </div>
        </>
    );
}