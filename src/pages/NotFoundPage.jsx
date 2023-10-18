import React from "react";

const NotFound = () => {
  const notFoundStyle = {
    color: "red",
    fontSize: "2rem",
    textAlign: "center",
    marginTop: "2rem",
  };
  return (
    <div style={notFoundStyle}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
};

export default NotFound;
