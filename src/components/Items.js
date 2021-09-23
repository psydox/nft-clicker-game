import React, { useContext } from 'react';
import ClickerContext from '../context/Context';
import ItemBought from './ItemBought';

export default function Items() {
  const { state } = useContext(ClickerContext);
  const { items } = state;

  return (
    <div className='items'>
      {items.map((item, i) => (
        <ItemBought name={item.name} reward_per_sec={item.reward_per_second} amount={item.amount}/>
      ))}
    </div>
  );
}
