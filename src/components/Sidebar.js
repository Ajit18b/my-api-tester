import React, { useState, useRef } from "react";
import "./Sidebar.css";
import History from "./History";

const Sidebar = ({ history, onSelect }) => {
  const [width, setWidth] = useState(250); // Initial width of the sidebar
  const sidebarRef = useRef(null);
  const resizerRef = useRef(null);

  const handleMouseDown = (e) => {
    e.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const newWidth =
      e.clientX - sidebarRef.current.getBoundingClientRect().left;
    setWidth(newWidth > 100 ? newWidth : 100); // Minimum width of 100px
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <aside className="sidebar" style={{ width: `${width}px` }} ref={sidebarRef}>
      <div className="history-container">
        <History history={history} onSelect={onSelect} />
      </div>
      <div className="resizer" ref={resizerRef} onMouseDown={handleMouseDown} />
    </aside>
  );
};

export default Sidebar;
