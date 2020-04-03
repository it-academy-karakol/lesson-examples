import React, { useState } from 'react';
import classes from './SimpleState.module.css';

export default () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);


  function decreaseCounterCallback() {
    setCounter(counter - 1);
  }
  function nameCallback({ target }) {
    setName(target.value);
  }
  function toggleDarkModeCallback({ target }) {
    setDarkMode(target.checked);
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
    </div>
  );
}