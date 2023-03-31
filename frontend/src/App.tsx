import { useState } from "react";
import io from "socket.io-client";
import "./App.css";

function App() {
  let socket = io("http://localhost:4000");

  return <div className="App"></div>;
}

export default App;
