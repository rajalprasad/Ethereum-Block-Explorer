import React, {useState, useEffect } from 'react';
const ethers = require('ethers');
const api = process.env.API_TOKEN;
const provider = new ethers.providers.AlchemyProvider("homestead", api);

export function App() {

    const [block, setBlock] = useState();

    useEffect(() => {
        const loadBlock = async () => {
            const response = await provider.getBlockNumber();

            setBlock(response);
        }
        loadBlock();
    });

    return (
        <div>
            {block}
        </div>
    );
}