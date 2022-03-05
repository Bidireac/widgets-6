import React from 'react';
import { useGlobalContext } from '../utils/context';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { Box, Grid } from '@material-ui/core';
import MovieCard from '../components/MovieCard';
import Search from '../components/Search';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) return <Loading />;

  return (
    <Box>
      <Search />
      <Grid container spacing={3}>
        {movies.map((movie) => {
          return <MovieCard key={movie.imdbID} {...movie} />;
        })}
      </Grid>
    </Box>
  );
};

export default Movies;
