import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../images/logo.PNG";
import { signOut } from "firebase/auth";
import "./Header.css";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="header">
      <img style={{borderRadius:"8px"}} width={75} src={logo} alt="" />
      <div className="flex anchors">
        <CustomLink to="/shop">Shop</CustomLink>
        <CustomLink to="/orders">Orders</CustomLink>
        <CustomLink to="/inventory">Inventory</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        {user?.uid && (
          <CustomLink to="/user-information">
            {user?.displayName ? user.displayName : "User"}
          </CustomLink>
        )}
        {user?.uid ? (
          <Link
            to="/login"
            onClick={() => {
              signOut(auth);
            }}
          >
            Logout
          </Link>
        ) : (
          <CustomLink to="/login">Login</CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
