import React, { useState } from "react";
import Book from "./Book";
import Title from "./Title";
import Author from "./Author";

export default () => {
  const [books, setBooks] = useState([
    { isbn: 124125, title: "Harry Potter", author: "Rowling", year: 2001 },
    { isbn: 124135, title: "Dark Tower", author: "Stephen King", year: 1970 },
    { isbn: 124145, title: "Martian", author: "Unkown", year: 2018 },
  ]);

  // How to output simple array with objects
  const booksOutput = books.map((book) => (
    <li key={book.isbn}>
      {book.title} - {book.author} ({book.year})
    </li>
  ));

  // How to output using a single component
  const booksComponentOutput = books.map((book) => (
    <Book key={book.isbn} book={book} />
  ));

  // How to output using a multiple component
  const booksComponentsOutput = books.map((book) => (
    <li key={book.isbn}>
      <Title>{book.title}</Title> - <Author name={book.author} /> ({book.year})
    </li>
  ));

  return (
    <div className="ObjectArrayList">
      <ul>{booksOutput}</ul>
      <ul>{booksComponentOutput}</ul>
      <ul>{booksComponentsOutput}</ul>
    </div>
  );
};
