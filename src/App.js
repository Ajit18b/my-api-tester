import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Board from "./components/main";
import "./App.css";

function App() {
  const [history, setHistory] = useState([]);

  // Function to add a new request to history
  const handleNewRequest = (request) => {
    setHistory([request, ...history]);
  };

  // Function to handle selection of a history item
  const handleHistorySelect = (item) => {
    console.log("Selected History Item:", item);
  };

  return (
    <div className="app">
      <Header />
      <div className="main">
        <Sidebar history={history} onSelect={handleHistorySelect} />
        <Board onNewRequest={handleNewRequest} />
      </div>
    </div>
  );
}

export default App;
