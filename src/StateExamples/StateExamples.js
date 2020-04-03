import React from 'react';
import classes from './StateExamples.module.css';
import SingleNestedState from './SingleNestedState/SingleNestedState';

export default () => {
  return (
    <div className={classes.StateExamples}>
      <SingleNestedState />
    </div>
  );
}