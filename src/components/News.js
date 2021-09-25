import React, { useState, useEffect } from 'react';
import Ticker from 'react-ticker';

export default function News() {
  const NEWS = [
    'CHINA BANS BITCOIN',
    'CHINA BANS BITCOIN MINING',
    'SIMÃO FROM ESMAE JOINS A PUMP AND DUMP SCHEME',
    'DIOGO VERÍSSIMO SELLS HIS FIRST NFT COLLECTION FOR OVER 50ETH',
    'PEDRO AND MARCO, FOUNDERS OF APPLE 2, ARE JOINING THE NFT SPACE, FOUND OUT WHY!',
    'MAN FROM PORTO STEALS 500 HELIUM MINERS',
    'GRETUA JOINS THE FRENZY AND ADDS 30BTC TO ITS FINANCIAL HOLDINGS',
  ];

  return (
    <div className='news'>
      <Ticker mode="smooth">
        {({ index }) => (
          <>
            <p>{NEWS[index]}</p>
          </>
        )}
      </Ticker>
    </div>
  );
}
