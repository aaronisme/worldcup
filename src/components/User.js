import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import  api from '../apiHelper'
import { backend } from '../config';


const styles = theme => ({
  root:{
    height: '200px'
  },
  content:{
    display: 'flex',
    justifyContent: 'flex-start',
  },
  userInfo :{
    paddingTop: 10,
    paddingLeft: 10
  },
  list:{
    borderTop:'1px solid #EEE',
    backgroundColor: 'white'
  },
  bigAvatar: {
    marginTop: 10,
    marginLeft: 10,
    width: 60,
    height: 60,
  },
});

class User extends React.Component {
  state = {
    phone: '15218229101',
    name: 'hello world',
    token: 0,
    txs: [{
      game: '俄罗斯--沙特',
      gameTime: '2018-06-14',
      token: '80',
    },{
      game: '摩洛哥--伊朗',
      gameTime: '2018-06-15',
      token: '80'
    },{
      game: '葡萄牙--西班牙',
      gameTime: '2018-06-16',
      token: '80'
    }]
  };

  fetchUser = () => {
    const url = `${backend}/user`;
    api.get(url).then(
      data => {
        this.setState({
          phone: data.phone,
          name: data.name,
          token: data.token
        })
      }
    )
  };

  fetchTx = () => {
    const url = `${backend}/tx`;
    api.get(url).then(
      data => {
        this.setState({
          tx: data.tx
        })
      }
    )
  };

  componentDidMount(){

  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.content}>
              <Avatar src={'https://png.icons8.com/android/50/000000/football2.png'} className={classes.bigAvatar}
              />
              <div className={classes.userInfo}>
                <Typography variant="Subheading" style={{margin:'10px'}}>{this.state.phone}</Typography>
                <Typography variant="Subheading" style={{margin:'10px'}}>{this.state.name}</Typography>
              </div>
            </div>
            <Typography align='left' variant="headline" style={{marginTop:'20px'}}>剩余Token：{this.state.token}</Typography>
          </CardContent>
        </Card>
        <List>
          {
            this.state.txs.map(tx => {
              return (
                <ListItem className={classes.list}>
                  <Avatar src={'https://png.icons8.com/android/50/000000/football2.png'} />
                  <ListItemText primary={tx.game} secondary={tx.gameTime} />
                  <ListItemText primary={`win--${tx.token}`} />
                </ListItem>
              )
            })
          }
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(User);

