import { Box, Button, Paper, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { API_ENDPOINT } from '../utils/context';
import { makeStyles } from '@material-ui/core/styles';
import Loading from './Loading';
import useFetch from '../utils/useFetch';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    textDecoration: 'none',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  text: {
    padding: 40,
  },
}));

const Movie = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) return <Loading />;

  if (error.show) {
    return (
      <Box className={classes.container}>
        <Typography variant="h1" gutterBottom>
          {error.msg}
        </Typography>
        <NavLink to="/movies" className={classes.button}>
          <Button variant="contained" color="secondary">
            Back to Movies
          </Button>
        </NavLink>
      </Box>
    );
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <Box className={classes.container}>
      <Paper elevation={0}>
        <img src={poster} alt={title} className={classes.img} />
      </Paper>
      <Box className={classes.text}>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {plot}
        </Typography>
        <Typography variant="h4" gutterBottom>
          {year}
        </Typography>
        <NavLink to="/movies" className={classes.button}>
          <Button variant="contained" color="secondary">
            Back to Movies
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Movie;
