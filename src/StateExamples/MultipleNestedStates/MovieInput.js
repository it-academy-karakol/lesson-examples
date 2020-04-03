import React from 'react';

export default ({
  movieTitleCallback,
  movieGenreCallback,
  movieYearCallback,
  movieActorAddCallback
}) => (
  <section className="MovieInput">
    <div>Title: <input type="text" onChange={movieTitleCallback} /></div>
    <div>Genre: <input type="text" onChange={movieGenreCallback} /></div>
    <div>Year: <input type="number" onChange={movieYearCallback} /></div>
    <div>
      Actors: 
      <input type="text" />
      <button onClick={({ target }) => {
        movieActorAddCallback(target.previousSibling.value);
        target.previousSibling.value = '';
      }}>Add</button>
    </div>
  </section>
);