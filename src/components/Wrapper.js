import React, { useContext, useEffect } from 'react';
import ClickerContext from '../context/Context';

export default function Wrapper(props) {
  const { state, incrementScore } = useContext(ClickerContext);
  const { reward_per_second } = state;

  let timer;

  const gameLoop = () => {
    timer = setTimeout(() => {
      incrementScore(reward_per_second / 2);


      gameLoop();
    }, 500);
  };

  useEffect(() => {
    if(timer){
        clearTimeout(timer);
    }

    gameLoop();

    return () => clearTimeout(timer);
  }, [reward_per_second]);

  return <div className='app-container'>{props.children}</div>;
}
