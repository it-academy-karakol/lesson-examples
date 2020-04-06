import React, { useState } from "react";
import Fruit from "./Fruit";

export default () => {
  const vegetables = ["Potatoes", "Tomatoes", "Onions"];
  const [fruits, setFruits] = useState(["Apple", "Pear", "Banana", "Melon"]);

  // How to use .join to output array
  const vegetablesOutput = vegetables.join(", ");
  // How to use .map to output array
  const fruitsOutput = fruits.map((fruit, index) => (
    <li key={fruit} className={fruit + "-" + index}>{fruit}</li>
  ));
  // How to output array using custom components
  const pricedFruitsOutput = fruits.map((fruit, index) => (
    <Fruit key={fruit} name={fruit} />
  ));

  return (
    <div className="SimpleArrayList">
      {vegetablesOutput}
      <br />
      <ul>{fruitsOutput}</ul>
      <br />
      <ul>{pricedFruitsOutput}</ul>
    </div>
  );
};
