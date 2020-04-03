import React from 'react';

export default ({
  actors,
  movie,
  actorAddCallback,
  movieTitleCallback,
  movieGenreCallback,
  movieYearCallback,
}) => (
  <div className="Movie">
    <section className="input">
      <div>Title: <input type="text" onChange={movieTitleCallback} /></div>
      <div>Genre: <input type="text" onChange={movieGenreCallback} /></div>
      <div>Year: <input type="number" onChange={movieYearCallback} /></div>
      <div>
        Actors: 
        <input type="text" />
        <button onClick={actorAddCallback}>Add</button>
      </div>
    </section>

    <section className="output">
      <h2>{movie.title} ({movie.year})</h2>
      <h3>{movie.genre}</h3>
      <strong>Stars: {actors.join(", ")}</strong>
    </section>
  </div>
);