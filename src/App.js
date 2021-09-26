import { useEffect } from 'react';
import './App.css';
import Clicker from './components/Clicker';
import Items from './components/Items';
import News from './components/News';
import Score from './components/Score';
import Store from './components/Store';
import Wrapper from './components/Wrapper';
import ClickerContextProvider from './context/ContextProvider';

function App() {
  return (
    <ClickerContextProvider>
      <Wrapper>
        <Clicker />
        <Items />
        <Store />
        <Score />
        <div className='level-items'></div>
      </Wrapper>
      <News />
    </ClickerContextProvider>
  );
}

export default App;
