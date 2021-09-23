import React, {useContext} from 'react'
import ClickerContext from '../context/Context';


export default function Score() {
    const {state} = useContext(ClickerContext);
    const {score, fiat_score} = state;

    return (
        <div className="score">
            <p>{score.toFixed(8)} BTC</p>
            <h6>{fiat_score.toFixed(5)}$</h6>   
        </div>
    )
}
