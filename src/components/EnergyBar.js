import React, { useRef, useEffect, useContext } from 'react';
import ClickerContext from '../context/Context';

export default function EnergyBar() {
  const canvasRef = useRef(null);
  const canvasParent = useRef(null);
  const {state} = useContext(ClickerContext);
  const {energy} = state;


  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.canvas.width = canvasParent.current.offsetWidth;
    context.canvas.height = canvasParent.current.offsetHeight;

    context.fillStyle = `rgb(255, ${255 * energy}, 0)`;
    context.fillRect(0, 0, context.canvas.width * energy, context.canvas.height);
  }, [energy]);

  return (
    <div className='level-items' ref={canvasParent}>
      <canvas className="energy-canvas" ref={canvasRef}></canvas>
    </div>
  );
}
