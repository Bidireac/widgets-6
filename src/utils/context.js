import React, { useState, useEffect, useContext, useReducer } from 'react';
import useFetch from './useFetch';
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const APIENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  loading: true,
  hits: [],
  querySearch: 'react',
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('once upon');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  const fetchStories = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SET_STORIES,
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };
  const handleSearch = (querySearch) => {
    dispatch({ type: HANDLE_SEARCH, payload: querySearch });
  };
  const handlePage = (value) => {
    dispatch({ type: HANDLE_PAGE, payload: value });
  };

  useEffect(() => {
    fetchStories(`${APIENDPOINT}query=${state.querySearch}&page=${state.page}`);
  }, [state.querySearch, state.page]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeStory,
        handleSearch,
        handlePage,
        isLoading,
        error,
        movies,
        query,
        setQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
