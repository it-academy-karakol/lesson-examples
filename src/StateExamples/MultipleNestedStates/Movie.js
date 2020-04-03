import React from 'react';
import MovieInput from './MovieInput';
import MovieOutput from './MovieOutput';

export default ({
  movie,
  movieActorAddCallback,
  movieTitleCallback,
  movieGenreCallback,
  movieYearCallback,
}) => (
  <div className="Movie">
    <MovieInput
      movieActorAddCallback={movieActorAddCallback}
      movieTitleCallback={movieTitleCallback}
      movieYearCallback={movieYearCallback}
      movieGenreCallback={movieGenreCallback} />

    <MovieOutput
      movie={movie} />
  </div>
);