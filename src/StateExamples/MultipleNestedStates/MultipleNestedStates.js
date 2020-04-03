import React, { useState } from 'react';
import Movie from './Movie';

export default () => {
  const [movie, setMovie] = useState({});

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
  function movieActorAddCallback(actor) {
    const newMovie = { ...movie };
    newMovie.actors = newMovie.actors
      ? [...movie.actors, actor]
      : [actor];
    setMovie(newMovie);
  }

  return (
    <div>
      <Movie
        movie={movie}
        movieActorAddCallback={movieActorAddCallback}
        movieTitleCallback={movieTitleCallback}
        movieYearCallback={movieYearCallback}
        movieGenreCallback={movieGenreCallback} />
    </div>
  );
}