import React from "react";
import { useState } from "react";

const FruitesArr = () => {
  const [fruits, setFruits] = useState(["apple", "orange", "banana"]);
  const [newFruit, setNewFruit] = useState("");
  console.log("fruit", fruits);

  function updateFruits(e) {
    e.preventDefault();
    setFruits([...fruits, newFruit]);
    setNewFruit("");
  }

  return (
    <div className="fruitArr">
      <form onSubmit={updateFruits}>
        <input
          type="text"
          placeholder="Enter a fruit name..."
          onChange={(e) => setNewFruit(e.target.value)}
          value={newFruit}
        />

        <button type="submit">Submit</button>
      </form>
      <br />

      <ol>
        {fruits.map((item) => (
          <li>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default FruitesArr;
