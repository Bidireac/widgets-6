import { Box, Button, Typography } from '@material-ui/core';
import React from 'react';
import { useGlobalContext } from '../utils/context';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  pages: { marginLeft: 20, marginRight: 20 },
}));

const Buttons = () => {
  const classes = useStyles();
  const { loading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <Box className={classes.buttons}>
      <Button
        variant="contained"
        color="secondary"
        disabled={loading}
        onClick={() => handlePage('dec')}
      >
        Prev
      </Button>
      <Typography variant="subtitle1" className={classes.pages}>
        {page + 1} of {nbPages}
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        disabled={loading}
        onClick={() => handlePage('inc')}
      >
        Next
      </Button>
    </Box>
  );
};

export default Buttons;
