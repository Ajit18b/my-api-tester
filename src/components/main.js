import React, { useState } from "react";
import RequestForm from "./RequestForm";
import ResponseDisplay from "./ResponseDisplay";
import "./main.css";
import axios from "axios";

const Board = ({ onNewRequest }) => {
  const [response, setResponse] = useState(null);

  const handleRequest = async ({ method, url, body }) => {
    try {
      const config = {
        method,
        url,
        data: body ? JSON.parse(body) : undefined,
      };

      const res = await axios(config);

      setResponse(res.data);
      onNewRequest({ method, url, body });
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div className="workspace">
      <RequestForm onSubmit={handleRequest} />
      <ResponseDisplay response={response} />
    </div>
  );
};

export default Board;
