import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    margin: 20,
    width: '70%',
    textAlign: 'center',
    letterSpacing: 1.6,
    textTransform: 'capitalize',
  },
  link: {
    textDecoration: 'none',
    letterSpacing: 2,
    margin: 10,
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <section className={classes.container}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        className={classes.description}
      >
        oops! it's a dead end
      </Typography>
      <NavLink to="/random" className={classes.link}>
        <Button size="large" variant="contained" color="secondary">
          back home
        </Button>
      </NavLink>
    </section>
  );
};

export default Error;
