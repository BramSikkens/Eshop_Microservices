import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import BasketBox from "../BasketBox";
import "./style.css";
import { useSelector } from "react-redux";

export default function Nav() {
  const user = useSelector((state) => state.authentication).user;

  return (
    <div className="nav">
      <Link to="/">
        <img class="logo" src="./coolblue-logo.png" />
      </Link>

      <div className="rightMenu">
        <span class="accountNav">
          {user ? (
            <Link to="/account/myInfo">
              <b>{user.email}</b>
            </Link>
          ) : (
            <Link to="/login">
              <b>Account</b>
            </Link>
          )}
        </span>
        <BasketBox />
      </div>
    </div>
  );
}
