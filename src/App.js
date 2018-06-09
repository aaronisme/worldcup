import React, { Component } from 'react';
import NavBar from './components/NavBar'
import GameList from './components/GameList'
import './App.css';

const games = [
  {
    teamA: '俄罗斯',
    teamAId: '001',
    teamB: '沙特',
    teamBId: '002'
  },
  {
    teamA: '摩洛哥',
    teamAId: '003',
    teamB: '伊朗',
    teamBId: '004',
  },
  {
    teamA: '葡萄牙',
    teamAId: '005',
    teamB: '西班牙',
    teamBId: '006',
  }
];


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div className="Content">
          <GameList games={games} />
        </div>
        <NavBar />
      </div>
    );
  }
}

export default App;
