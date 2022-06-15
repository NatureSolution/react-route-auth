import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirtebase";
import "./Header.css";

const Header = () => {
  const { user, handelSignOut } = useFirebase();
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/register">Register</Link>
        <span>{user?.email && user.email}</span>
        {user?.uid ? (
          <button onClick={handelSignOut}>SignOut</button>
        ) : (
          <Link to="/login">login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
