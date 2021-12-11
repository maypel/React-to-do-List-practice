import React, { useState } from "react";

function App() {
  const [item, itemAdded] = useState("");
  const [savedItem, setItems] = useState([]);

  function itemToAdd(event) {
    const newValue = event.target.value;

    itemAdded(newValue);
  }

  function buttonClicked() {
    setItems((prevItems) => {
      return [...prevItems, item];
    });
    itemAdded("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={itemToAdd} type="text" value={item} />
        <button type="submit" onClick={buttonClicked}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {savedItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
