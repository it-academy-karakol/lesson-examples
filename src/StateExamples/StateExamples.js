import React from 'react';
import classes from './StateExamples.module.css';
import SimpleState from './SimpleState/SimpleState';
import SingleNestedState from './SingleNestedState/SingleNestedState';
import MultipleNestedStates from './MultipleNestedStates/MultipleNestedStates';

export default () => {
  return (
    <div className={classes.StateExamples}>
      <SimpleState />
      <SingleNestedState />
      <MultipleNestedStates />
    </div>
  );
}