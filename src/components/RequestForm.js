import React, { useState } from "react";
import "./RequestForm.css";

const RequestForm = ({ onSubmit }) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ method, url, body });
  };

  const handleMethodChange = (e) => {
    setMethod(e.target.value);

    // Clear the body when changing to a method that doesn't use it
    if (!["POST", "PUT", "PATCH"].includes(e.target.value)) {
      setBody("");
    }
  };

  return (
    <form className="request-form" onSubmit={handleSubmit}>
      <select
        className="method-select"
        value={method}
        onChange={handleMethodChange}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
        <option value="PATCH">PATCH</option>
      </select>
      <input
        type="text"
        className="url-input"
        placeholder="Enter URL or paste text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit" className="send-button">
        Send
      </button>

      {["POST", "PUT", "PATCH"].includes(method) && (
        <textarea
          className="body-input"
          placeholder="Enter request body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      )}
    </form>
  );
};

export default RequestForm;
