import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { backend } from '../config';
import  api from '../apiHelper'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({
  content :{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 50,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  header: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class Game extends React.Component {
  state = {
    selected: '',
    bitValue: null,
  };

  onTeamClicked = id => {
    this.setState({
      selected: id
    })
  };

  onSubmit = () => {
    const url = `${backend}/bit`;
    if(this.props.userId && this.state.selected && this.state.bitValue) {
      const data = {
        userId: this.props.userId,
        teamId: this.state.selected,
        bitValue: this.state.bitValue
      };
      api.post(url, data)
    }
    else {
      alert('please choose all the data')
    }

  };

  onChange = (e) => {
    this.setState({
      bitValue: e.target.value
    })
  };

  render(){
    const { classes, game } = this.props;
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{game.teamA}--{game.teamB}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.content}>
            <Chip
              avatar={<Avatar src='https://png.icons8.com/android/50/000000/football2.png'/>}
              label={game.teamA}
              onClick={() => this.onTeamClicked(game.teamAId)}
              style={{backgroundColor: this.state.selected === game.teamAId ? '#E0E0E0':'white'}}
            />
            <Chip
              avatar={<Avatar src='https://png.icons8.com/android/50/000000/football2.png'/>}
              label={game.teamB}
              clickable
              onClick={() => this.onTeamClicked(game.teamBId)}
              style={{backgroundColor: this.state.selected === game.teamBId ? '#E0E0E0': 'white'}}
            />
            <TextField
              id="value"
              label="value"
              value={this.state.bitValue}
              onChange={this.onChange}
              className={classes.textField}
            />
            <Button variant="contained" size="small" color="primary" className={classes.button} onClick={this.onSubmit}>
              submit
            </Button>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default withStyles(styles)(Game);

