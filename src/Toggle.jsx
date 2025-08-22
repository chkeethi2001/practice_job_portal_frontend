import React, { useState } from "react";

function ToggleComponent() {
  const [isDark, setIsDark] = useState(false);

  const toggleNavbarColor = () => {
    setIsDark(!isDark);
  };

  const navbarStyle = {
    backgroundColor: isDark ? "black" : "#eee",
    color: isDark ? "white" : "black",
    padding: "15px 20px",
    fontFamily: "Arial",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div>
      <nav style={navbarStyle}>
        <div>My Navbar</div>
        <button
          onClick={toggleNavbarColor}
          style={{
            backgroundColor: isDark ? "#444" : "#ddd",
            color: isDark ? "white" : "black",
            border: "none",
            padding: "8px 12px",
            cursor: "pointer",
            borderRadius: "4px",
          }}
        >
          Toggle Color
        </button>
      </nav>
    </div>
  );
}

export default ToggleComponent;                                        
