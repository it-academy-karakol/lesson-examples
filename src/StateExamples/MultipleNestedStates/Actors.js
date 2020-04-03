import React from 'react';

export default ({ actors }) => {
  let output = "Unknown";
  if (actors) {
    output = actors.join(", ");
  }

  return (
    <strong>Stars: {output}</strong>
  );
}