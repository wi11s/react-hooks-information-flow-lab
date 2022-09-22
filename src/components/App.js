import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from './Header.js'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarMode={isDarkMode} onDarkModeClick={onDarkModeClick}/>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
