import React, {useContext} from 'react';
import ClickerContext from '../context/Context';

export default function Item(props) {
  const { name, inc_per_click, inc_per_sec, price, id, img } = props;
  const { buyItem, state } = useContext(ClickerContext);
  const { score } = state;

  return (
    <div className='item'>
      <div className='item-details'>
        <div className='item-image'></div>
        <div className='item-info'>
            <h4>{name}</h4>
            <p>+{inc_per_sec} BTC per second</p>
            <p>+{inc_per_click} BTC per click</p>
        </div>
      </div>
      <div className='item-buy'>
          <p>{price.toFixed(6)} BTC</p>
          <button disabled={price > score ? true : false} onClick={() => {buyItem(id, name, inc_per_sec, price)}}>BUY</button>
      </div>
    </div>
  );
}
