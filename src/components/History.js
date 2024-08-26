import React from "react";
import "./History.css";

const History = ({ history, onSelect }) => {
  return (
    <div className="history">
      <h3>Request History</h3>
      <ul className="history-list">
        {history.map((item, index) => (
          <li key={index} onClick={() => onSelect(item)}>
            {item.method} {item.url}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
