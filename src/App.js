import { useEffect } from 'react';
import './App.css';
import Clicker from './components/Clicker';
import EnergyBar from './components/EnergyBar';
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
        <EnergyBar />
        <Items />
        <Store />
        <Score />
      </Wrapper>
      <News />
    </ClickerContextProvider>
  );
}

export default App;
