import React, { useState, useCallback } from 'react';
import cx from 'classnames';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { MENU } from 'src/components/material-ui/icons';
import TextField from 'src/components/common/text-field';
import RoundedButton from 'src/components/material-ui/rounded-button';
import Avatar from 'src/components/material-ui/avatar';
import Button from 'src/components/material-ui/text-button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const theme = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function MobileMenu() {
  const classes = useStyles(theme);

  const mobileMenuClasses = cx({
    [classes.list]: true,
    'mobile-menu': true,
  });

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    openDrawer(anchor, open);
  };

  const openDrawer = (anchor, open) => {
    setState({[anchor]: open });

    toggleDrawer(open);
  };

  const list = () => (
    <div
      className={mobileMenuClasses}
      role="presentation"
      onClick={toggleDrawer('right', false)}
      onKeyDown={toggleDrawer('right', false)}
      style={{
        background: 'transparent'
      }}
    >
      <List>
        <a href='#fonctionnement'>
          <ListItem button>
            <ListItemText className='link' primary={'Fonctionnement'} />
          </ListItem>
        </a>
        <a href='#vehicule-scrap'>
          <ListItem button>
            <ListItemText className='link' primary={'Véhicule Scrap'} />
          </ListItem>
        </a>
        <a href='#contact'>
          <ListItem button>
            <ListItemText primary={'Contact'} />
          </ListItem>
        </a>
      </List>
    </div>
  );

  return (
    <>
      <Button onClick={toggleDrawer('right', true)}>{MENU}</Button>
      <SwipeableDrawer 
        anchor='right'  
        open={state.right} 
        onClose={toggleDrawer('right', false)}
      >
        {list()}
      </SwipeableDrawer>
    </>
  );
}

export default MobileMenu;
