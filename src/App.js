import React, { Component } from 'react';
import NavBar from './components/NavBar'
import GameList from './components/GameList'
import User from './components/User'
import './App.css';

const games = [
  {
    teamA: '俄罗斯',
    teamAId: '001',
    teamB: '沙特',
    teamBId: '002',
    gameId:'a001',
  },
  {
    teamA: '摩洛哥',
    teamAId: '003',
    teamB: '伊朗',
    teamBId: '004',
    gameId:'a002',
  },
  {
    teamA: '葡萄牙',
    teamAId: '005',
    teamB: '西班牙',
    teamBId: '006',
    gameId:'a003',
  }
];

const userId = '0001';

const PageOne = () => (
  <div>
    <header className="App-header" />
    <div className="Content">
      <GameList games={games} userId={userId}/>
    </div>
  </div>
)


class App extends Component {
  state = {
    index: 0
  }
  renderPage = (item) => {
    if (item === 0) {
      return <PageOne />
    }

    return <User />
  };

  onSwitch = item => {
    this.setState({
      index: item
    })
  };

  render() {
    return (
      <div className="App">
        {this.renderPage(this.state.index)}
        <NavBar onSwitch={this.onSwitch}/>
      </div>
    );
  }
}

export default App;
