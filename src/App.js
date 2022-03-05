import { Routes, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Movies from './pages/Movies';
import Movie from './components/Movie';
import News from './pages/News';
import Error from './pages/Error';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: 100,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Container className={classes.wrapper}>
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
