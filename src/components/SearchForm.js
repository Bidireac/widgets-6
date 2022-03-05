import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useGlobalContext } from '../utils/context';
import { TextField } from '@material-ui/core';

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
  const { querySearch, handleSearch } = useGlobalContext();
  const [debouncedSearch, setDebouncedSearch] = useState(querySearch);
  const searchForm = useRef(null);

  useEffect(() => {
    searchForm.current.children[1].children[0].focus();
    const timerID = setTimeout(() => {
      handleSearch(debouncedSearch);
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
    </form>
  );
};

export default Search;
