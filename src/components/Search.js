import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../utils/context';
import { FormControl, Input, InputLabel, TextField } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'start',
    margin: 35,
  },
  formText: {
    fontSize: 20,
    margin: 15,
    width: 350,
  },
  loading: {
    textAlign: 'center',
  },
}));

const Search = () => {
  const classes = useStyles();
  const { query, setQuery, error } = useGlobalContext();
  const [debouncedSearch, setDebouncedSearch] = useState(query);
  const searchForm = useRef(null);

  useEffect(() => {
    searchForm.current.children[1].children[0].focus();
    const timerID = setTimeout(() => {
      setQuery(debouncedSearch);
    }, 500);

    return () => clearTimeout(timerID);
  }, [debouncedSearch]);
  return (
    <form onSubmit={(e) => e.preventDefault()} className={classes.form}>
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        className={classes.formText}
        value={debouncedSearch}
        onChange={(e) => setDebouncedSearch(e.target.value)}
        ref={searchForm}
      />
      {error.show && (
        <MuiAlert elevation={6} variant="filled" severity="error">
          {error.msg}
        </MuiAlert>
      )}
    </form>
  );
};

export default Search;
