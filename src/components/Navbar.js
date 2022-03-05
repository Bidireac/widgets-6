import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Container,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navList: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" color="secondary">
      <Container>
        <List
          component="nav"
          aria-label="Cocktail-Links"
          className={classes.navList}
        >
          <ListItem button className={classes.listItem}>
            <NavLink to="/movies" className={classes.link}>
              <Typography variant="h6">Movie DB</Typography>
            </NavLink>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <NavLink to="/news" className={classes.link}>
              <Typography variant="h6">Hacker News</Typography>
            </NavLink>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  );
};

export default Navbar;
