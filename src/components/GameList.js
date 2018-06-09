import React from 'react';
import Typography from '@material-ui/core/Typography';
import Game from './Game'

class GameList extends React.Component {
  render(){
    return (
      <div className='content'>
        <Typography variant="headline" style={{margin:'10px'}}>今日比赛</Typography>
        {this.props.games.map(game => {
          return (
            <Game game={game} userId={this.props.userId}/>
          )
        })}
      </div>
    )
  }
}

export default GameList;

