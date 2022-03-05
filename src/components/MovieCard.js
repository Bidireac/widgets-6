import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    maxWidth: 300,
    maxHeight: 500,
    '&:hover': {
      '& $cardContent': {
        bottom: '-20px',
      },
    },
  },
  media: {
    height: 400,
  },
  cardContent: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8);',
    width: '100%',
    bottom: '-150px',
    padding: 0,
    transition: 'all 0.6s ease-out',
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    padding: 2,
  },
  text: {
    color: '#fff',
  },
}));

const MovieCard = ({
  imdbID: id,
  Poster: poster,
  Title: title,
  Year: year,
}) => {
  const classes = useStyles();
  return (
    <Grid item xs={4}>
      <Card className={classes.card}>
        <Link to={`/movies/${id}`}>
          <CardMedia
            className={classes.media}
            image={poster === 'N/A' ? url : poster}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Box className={classes.cardText}>
              <Typography
                gutterBottom
                variant="subtitle1"
                component="h2"
                className={classes.text}
              >
                {title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                className={classes.text}
              >
                {year}
              </Typography>
            </Box>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default MovieCard;
