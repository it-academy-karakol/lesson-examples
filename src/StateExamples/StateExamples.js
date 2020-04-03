import React from 'react';
import classes from './StateExamples.module.css';
import SimpleState from './SimpleState/SimpleState';

export default () => {
  return (
    <div className={classes.StateExamples}>
      <SimpleState />
    </div>
  );
}