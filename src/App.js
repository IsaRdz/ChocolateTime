import { useState } from "react";
import "./App.css";
import ItemList from "./components/ItemList/ItemList";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [greeting] = useState("Welcome to Chocolate Time");

  return (
    <div className="App">
      <Navbar />
      <ItemList greeting={greeting} />
    </div>
  );
}

export default App;
