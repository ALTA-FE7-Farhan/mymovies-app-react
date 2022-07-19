import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="sticky top-0 w-full flex gap-2 border-gray-200 sm:px-4 py-6 bg-zinc-800 ">
      <Link to="/" className="text-white">
        <img src="./logo_movies.png" alt="logo" className="w-9 mx-3" />
      </Link>
      <Link to="/" className="text-white self-center">
        Home
      </Link>
      <Link to="/favorites" className="text-white self-center">
        My Favorites
      </Link>
    </nav>
  );
};

export default Header;
