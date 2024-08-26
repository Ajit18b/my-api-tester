import React, { useState, useEffect } from "react";
import "./ResponseDisplay.css";

const ResponseDisplay = ({ response }) => {
  const [timestamp, setTimestamp] = useState(null);

  useEffect(() => {
    if (response) {
      const currentTimestamp = new Date().toLocaleString();
      setTimestamp(currentTimestamp);
    }
  }, [response]);

  return (
    <div className="response-display">
      {response && (
        <>
          <h3>Response</h3>
          <p className="timestamp">Tested at: {timestamp}</p>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default ResponseDisplay;
