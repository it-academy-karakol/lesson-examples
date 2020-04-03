import React, { useState } from 'react';
import classes from './SimpleState.module.css';

export default () => {
  // Number
  const [counter, setCounter] = useState(0);
  // String
  const [name, setName] = useState("");
  // Boolean
  const [darkMode, setDarkMode] = useState(false);
  // Array
  const [item, setItem] = useState("");
  const [groceries, setGroceries] = useState([]);
  // Object
  const [book, setBook] = useState({});


  function decreaseCounterCallback() {
    setCounter(counter - 1);
  }
  function nameCallback({ target }) {
    setName(target.value);
  }
  function toggleDarkModeCallback({ target }) {
    setDarkMode(target.checked);
  }
  // Use helper state "items"
  function addGroceriesWithState() {
    // Clone old state, to avoid reference issues
    const newGroceries = [...groceries];
    // Add new item
    newGroceries.push(item);
    // Update state
    setGroceries(newGroceries);
    // Cleanup input
    setItem('');
  }
  // Use DOM instead of helper state
  function addGroceriesWithoutState({ target }) {
    const newGroceries = [...groceries];
    newGroceries.push(target.previousSibling.value);
    setGroceries(newGroceries);
    target.previousSibling.value = '';
  }
  function bookTitleCallback({ target }) {
    const newBook = {...book};
    newBook.title = target.value;
    setBook(newBook);
  }
  function bookAuthorCallback({ target }) {
    const newBook = {...book};
    newBook.author = target.value;
    setBook(newBook);
  }
  function bookPublisherCallback({ target }) {
    const newBook = {...book};
    newBook.publisher = target.value;
    setBook(newBook);
  }


  return (
    <div className={darkMode ? classes.dark : classes.light}>
      <h2>Simple state example</h2>

      <div>
        <h3>Integer</h3>
        <button
          onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={decreaseCounterCallback}>-</button>
        {counter}
      </div>

      <div>
        <h3>String</h3>
        <input type="text" value={name} onChange={nameCallback} />
        {name}
      </div>

      <div>
        <h3>Boolean</h3>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkModeCallback} /> 
          Dark mode
        </label>
      </div>

      <div>
        <h3>Array</h3>
        <div>
          <h4>Uses "items" helper state</h4>
          <input
            type="text"
            value={item}
            onChange={event => setItem(event.target.value)}
            />
          <button onClick={addGroceriesWithState}>Add</button>
        </div>

        <div>
          <h4>Doesn't use additional state</h4>
          <input type="text" />
          <button onClick={addGroceriesWithoutState}>Add</button>
        </div>
        {groceries.join(', ')}
      </div>

      <div>
        <h3>Object</h3>
        <div>
          Title:
          <input
            type="text"
            value={book.title}
            onChange={bookTitleCallback} />
        </div>
        <div>
          Author:
          <input
            type="text"
            value={book.author}
            onChange={bookAuthorCallback} />
        </div>
        <div>
          Publisher:
          <input
            type="text"
            value={book.publisher}
            onChange={bookPublisherCallback} />
        </div>

        {book.title} - {book.author} "{book.publisher}"
      </div>
    </div>
  );
}