import React from 'react';

export default ({ book }) => (
  <li className="Book">
    {book.title} - {book.author} ({book.year})
  </li>
);