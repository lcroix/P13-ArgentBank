import React from "react";
import logo from "../assets/argentBankLogo.png";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOut, faUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../redux/actions/authAction";

export default function Nav() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const userInfo = useSelector((state) => state.user.userData.firstname);
  const signOut = () => {
    dispatch(logout());
  };
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <NavLink to="/">
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </NavLink>
        <h1 className="sr-only">Argent Bank</h1>
      </div>

      <div className="userBlock">
        {isLogin && (
          <>
          <FontAwesomeIcon icon={faUser} />
            <p className="userName">{userInfo}</p>
            <NavLink className="main-nav-item" to="/" onClick={signOut}>
              <FontAwesomeIcon icon={faSignOut} /> Sign Out
            </NavLink>
          </>
        )}
        {!isLogin && (
          <NavLink to="/SignIn" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}
