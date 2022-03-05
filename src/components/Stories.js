import React from 'react';
import { useGlobalContext } from '../utils/context';
import Loading from '../components/Loading';
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  story: {
    width: 550,
    height: 150,
    padding: 15,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'start',
  },
  link: {
    textDecoration: 'none',
  },
}));

const Stories = () => {
  const classes = useStyles();
  const { loading, hits, removeStory } = useGlobalContext();

  if (loading) return <Loading />;

  return (
    <Grid container spacing={3}>
      {hits.map((story) => {
        const { objectID, title, num_comments, url, points, author } = story;
        return (
          <Grid item xs={6} key={objectID}>
            <Paper elevation={3} className={classes.story}>
              <Typography variant="h5" gutterBottom>
                {title}
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {points} points by {author} | {num_comments} comments
              </Typography>
              <Box>
                <Button color="primary" href={url} target="_blank">
                  Read More
                </Button>
                <Button
                  color="secondary"
                  onClick={(e) => removeStory(objectID)}
                >
                  Remove
                </Button>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Stories;
