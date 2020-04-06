import React, { useState } from "react";
import Fruit from "./Fruit";

export default () => {
  const vegetables = ["Potatoes", "Tomatoes", "Onions"];
  const [fruits, setFruits] = useState(["Pear", "Banana", "Melon", "Apple", "Ananas"]);

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

  // How to filter the array.
  const fruitsA = fruits.filter(fruit => fruit[0] === "A");
  const fruitsAOutput = fruitsA.map((fruit, index) => (
    <li key={fruit} className={fruit + "-" + index}>{fruit}</li>
  ));
  // How to sort the array.
  const fruitsSorted = fruits.sort();
  const fruitsSortedOutput = fruitsSorted.map((fruit, index) => (
    <li key={fruit} className={fruit + "-" + index}>{fruit}</li>
  ));

  // 4. [10, 100, 200, 512, 251, 155, 20, 39, 300, 401, 312, 560, 1000]
  // Вывести числа между 100 и 500 в увеличивающемся порядке как HTML список

  return (
    <div className="SimpleArrayList">
      {vegetablesOutput}
      <br />
      <ul>{fruitsOutput}</ul>
      <br />
      <ul>{pricedFruitsOutput}</ul>
      <br />
      <ul>{fruitsAOutput}</ul>
      <br />
      <ul>{fruitsSortedOutput}</ul>
    </div>
  );
};
