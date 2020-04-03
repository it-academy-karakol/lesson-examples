import React from 'react';
import Actors from './Actors';

export default ({ movie }) => (
  <section className="output">
    <h2>{movie.title} ({movie.year})</h2>
    <h3>{movie.genre}</h3>
    <Actors actors={movie.actors} />
  </section>
);