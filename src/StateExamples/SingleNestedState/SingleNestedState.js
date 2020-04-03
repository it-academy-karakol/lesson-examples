import React, { useState } from 'react';
import Movie from './Movie';

export default () => {
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState([]);

  function movieTitleCallback({ target }) {
    const newMovie = { ...movie };
    newMovie.title = target.value;
    setMovie(newMovie);
  }
  function movieYearCallback({ target }) {
    const newMovie = { ...movie };
    newMovie.year = target.value;
    setMovie(newMovie);
  }
  function movieGenreCallback({ target }) {
    const newMovie = { ...movie };
    newMovie.genre = target.value;
    setMovie(newMovie);
  }
  function actorAddCallback({ target }) {
    const newActors = [ ...actors ];
    newActors.push(target.previousSibling.value);
    setActors(newActors);
    target.previousSibling.value = '';
  }

  return (
    <div>
      <Movie
        actors={actors}
        movie={movie}
        actorAddCallback={actorAddCallback}
        movieTitleCallback={movieTitleCallback}
        movieYearCallback={movieYearCallback}
        movieGenreCallback={movieGenreCallback} />
    </div>
  );
}