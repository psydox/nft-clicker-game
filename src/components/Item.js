import React, { useContext } from 'react';
import ClickerContext from '../context/Context';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

export default function Item(props) {
  const { name, inc_per_click, inc_per_sec, price, id, img } = props;
  const { buyItem, state } = useContext(ClickerContext);
  const { score } = state;

  return (
    <div className='item'>
      <div className='item-image'>
        <Canvas resize={false} className="item-canvas">
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
          />
          <ambientLight intensity={0.6} />
          <directionalLight color='red' position={[0, 0, 4]} />
          <Suspense fallback={null}>{props.children}</Suspense>
        </Canvas>
      </div>
      <div className='item-info'>
        <h4>{name}</h4>
        <p>+{inc_per_sec} BTC per second</p>
        <p>+{inc_per_click} BTC per click</p>
      </div>
      <div className='item-buy'>
        <button
          style={{background: 'green'}}
          disabled={price.toFixed(6) > score ? true : false}
          onClick={() => {
            buyItem(id, name, inc_per_sec, price);
          }}
        >
          {price}BTC
        </button>
      </div>
    </div>
  );
}
