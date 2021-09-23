import React, { useContext } from 'react';

export default function ItemBought(props) {
  const {name, reward_per_sec, amount} = props;

  return (
    <div className="bought-item-container">
        <div>
            <h5>{name}</h5>
            <p>{reward_per_sec.toFixed(8)} BTC per sec</p>
        </div>

        <h2>X{amount}</h2>
    </div>
  );
}
