import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    height: '95vh',
  },
}));

const Loading = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <CircularProgress color="secondary" />
    </Container>
  );
};

export default Loading;
