import React, { useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  User,
  selectAuthStatus,
  setAllUsersDataAction,
  setAuthStatusAction,
} from "../../store/auth";
import { StyledDiv, StyledNavbar } from "./styled";
import { useTheme } from "styled-components";

export const Navbar: React.FC = () => {
  const isAuth = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch({ type: AUTH_ACTION_TYPES.SET_AUTH_STATUS, payload: false }); ??????
    dispatch(setAuthStatusAction({ isAuth: false }));
    localStorage.removeItem("usersData");
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("user") ?? "{}"
    ) as User;
    const usersData = JSON.parse(
      localStorage.getItem("usersData") ?? "[]"
    ) as User[];
    dispatch(setAllUsersDataAction(usersData));
    const isAuth = usersData.some(
      ({ password, username }) =>
        username === currentUser.username && password === currentUser.password
    );
    dispatch(setAuthStatusAction({ isAuth }));
  }, []);

  return (
    <StyledNavbar type="primary">
      <StyledDiv>without background</StyledDiv>
      <StyledDiv withBackground>with background</StyledDiv>
      <div className="navbarContainer">
        <div className="leftSide">
          <Link to="home">CARVILLA</Link>
        </div>
        <div className="rightSide">
          <ul>
            {isAuth ? (
              <>
                <li>
                  <Link to="home">HOME</Link>
                </li>
                <li>
                  <Link to="car-service">SERVICE</Link>
                </li>

                <li>
                  <Link to="search-model">SEARCHMODEL</Link>
                </li>
                <li>
                  <Link to="feautured-cars">FEAUTURED CARS</Link>
                </li>

                <li>
                  <Link to="newest-cars">NEW CARS</Link>
                </li>

                <li>
                  <Link to="car-brands">BRANDS</Link>
                </li>

                <li>
                  <Link to="about">CONTACT</Link>
                </li>

                <li>
                  <Link onClick={handleLogout} to="login">
                    LOGOUT
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="loginPage">
                  <Link to="login">LOGIN</Link>
                </li>
                <li>
                  <Link to="sign-up">SIGNUP</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </StyledNavbar>
  );
};
