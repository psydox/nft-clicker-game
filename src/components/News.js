import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export default function News() {
  const NEWS = [
    'CHINA BANS BITCOIN      ',
    'CHINA BANS BITCOIN MINING      ',
    'SIMÃO FROM ESMAE JOINS A PUMP AND DUMP SCHEME      ',
    'DIOGO VERÍSSIMO SELLS HIS FIRST NFT COLLECTION FOR OVER 50ETH      ',
    'PEDRO AND MARCO, FOUNDERS OF APPLE 2, ARE JOINING THE NFT SPACE, FIND OUT WHY!      ',
    'MAN FROM PORTO STEALS 500 HELIUM MINERS      ',
    'GRETUA JOINS THE FRENZY AND ADDS 30BTC TO ITS FINANCIAL HOLDINGS      ',
  ];

  return (
    <div className='news'>
      <Marquee gradient={false}>
        {NEWS.map((n) => (
          <p>
            {n}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </p>
        ))}
      </Marquee>
    </div>
  );
}
