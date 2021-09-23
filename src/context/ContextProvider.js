import { Component } from 'react';
import ClickerContext from './Context';

const INITIAL_BTC = 0.00000001;
const BITCOIN_PRICE = 47397;

class ClickerContextProvider extends Component {
  state = {
    score: INITIAL_BTC,
    reward_per_click: 0.000001,
    reward_per_second: 0.000000,
    fiat_score: INITIAL_BTC * BITCOIN_PRICE,
    items: []
  };

  incrementScore = (amount) => {
    let newScore = this.state.score + amount

    this.setState({
      score: newScore,
      fiat_score: newScore * BITCOIN_PRICE
    });
  }

  improveRewardPerClick = (amount) => {
    let newRewardPerClick = this.state.reward_per_click + amount;

    this.setState({
        reward_per_click: newRewardPerClick
    })
  }

  improveRewardPerSecond = (amount) => {
    let newRewardPerSecond = this.state.reward_per_second + amount;

    this.setState({
        reward_per_second: newRewardPerSecond
    })
  }

  buyItem = (itemId, name, reward_per_second, price) => {
    if(price > this.state.score){
      return;
    }

    let newItems = [...this.state.items];

    let newRewardPerSecond = this.state.reward_per_second + reward_per_second;
    
    //Check if item is already on the list
    let duplicateItem = newItems.find(item => item.id === itemId);

    if(duplicateItem){
      duplicateItem.amount++;
      duplicateItem.reward_per_second += reward_per_second;
    } else {
      newItems.push({
        id: itemId,
        name: name,
        amount: 1,
        reward_per_second: reward_per_second
      })
    }

    let newScore = this.state.score - price;

    this.setState({
      items: newItems,
      reward_per_second: newRewardPerSecond,
      score: newScore
    })

    console.log(this.state)
  }

  render() {
    return (
      <ClickerContext.Provider
        value={{
          state: this.state,
          incrementScore: this.incrementScore,
          improveRewardPerClick: this.improveRewardPerClick,
          improveRewardPerSecond: this.improveRewardPerSecond,
          buyItem: this.buyItem
        }}
      >
        {this.props.children}
      </ClickerContext.Provider>
    );
  }
}

export default ClickerContextProvider;
