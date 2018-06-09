import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountIcon from '@material-ui/icons/AccountCircle'
import GameIcon from '@material-ui/icons/Games'

const style = {
  root:{
    position: 'fixed',
    bottom: 0,
    left: 0,
    width : '100%'
  }
};

class NavBar extends React.Component {
  state = {
    activeIndex: 0
  };

  handleChange = (event, value) => {
    this.setState({ activeIndex: value });
  };

  render() {
    const { classes } = this.props;
    const { activeIndex } = this.state;

    return (
      <BottomNavigation
        value={activeIndex}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Games" icon={<GameIcon />} />
        <BottomNavigationAction label="Account" icon={<AccountIcon />} />
      </BottomNavigation>
    );
  }
}

export default withStyles(style)(NavBar);
