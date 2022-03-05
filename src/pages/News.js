import React from 'react';
import SearchForm from '../components/SearchForm';
import Stories from '../components/Stories';
import Buttons from '../components/Buttons';

const News = () => {
  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
};

export default News;
