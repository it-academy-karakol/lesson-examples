import React from 'react';

export default ({ name }) => (
  <li className="Fruit">
    {name} - {Math.ceil(Math.random() * 10)} USD
  </li>
);