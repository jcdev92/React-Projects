import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-16 bg-gray-800 text-white">
      <ul className="flex justify-around items-center w-1/3 text-lg font-semibold uppercase">
        <Link to="/todos">todos</Link>
        <Link to="/products">products</Link>
      </ul>
    </div>
  );
};

export default Navbar;
