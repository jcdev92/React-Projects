import React from "react";
import { Link } from "react-router-dom";

const id = 10;

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/counter">Counter</Link>
      <br />
      <Link to={`/users/${id}`}>User</Link>
    </div>
  );
};

export default Home;
