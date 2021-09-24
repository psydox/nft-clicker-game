import React from 'react'
import Item from './Item'
import AsicMiner from './Asicminerdemo'

export default function Store(props) {
    return (
        <div className="store">
            <Item name="Pneumatic Hammer" id={1} inc_per_sec={0.00000100} inc_per_click="N/A" price={0.0004}></Item>
            <Item name="NVIDIA Graphics Card" id={2} inc_per_sec={0.00000200} inc_per_click="N/A" price={0.0104}></Item>
            <Item name="ASIC Miner" id={3} inc_per_sec={0.00001000} inc_per_click="N/A" price={0.104}>
                <AsicMiner />
            </Item>
        </div>
    )
}
