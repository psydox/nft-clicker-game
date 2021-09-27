import React, { useContext, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Model from './Btc';
import ClickerContext from '../context/Context';
import '../App.css';

export default function Clicker() {
  const { incrementScore, decreaseEnergy, state } = useContext(ClickerContext);
  const { reward_per_click, reward_per_second } = state;

  return (
    <div className='clicker-section'>
      <p className='reward-per-sec'>
        BTC per second: {reward_per_second.toFixed(8)}
      </p>
      <p className='reward-per-click'>
        BTC per click: {reward_per_click.toFixed(8)}
      </p>
      <Canvas resize={false} className='btc-canvas'>
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <ambientLight intensity={0.6} />
        <directionalLight color='red' position={[0, 0, 4]} />
        <Suspense fallback={null}>
          <Model
            onClick={() => {
              incrementScore(reward_per_click);
              decreaseEnergy();
            }}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
