import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectAllUsers,
  setCurrentUserAction,
  User,
  setAuthStatusAction,
} from "../../../store/auth";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const usersData = useSelector(selectAllUsers);
  const navigate = useNavigate();
  const handleInputChange = (name: keyof User, value: string) => {
    dispatch(setCurrentUserAction({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isUserAuth = usersData.some(
      (user) =>
        user.username === currentUser.username &&
        user.password === currentUser.password
    );

    if (isUserAuth) {
      localStorage.setItem("user", JSON.stringify(currentUser));
      dispatch(setAuthStatusAction({ isAuth: true }));

      navigate("/home");
      console.log("Login successful!");
      console.log(usersData);
    } else {
      console.log("Invalid username or password. Please try again.");
    }

    handleInputChange("username", "");
    handleInputChange("password", "");
  };

  return (
    <div className="LoginPage">
      <div className="LoginPageWrapper">
        <div className="LoginPageTitle">
          <p>CARVILLA CAR SERVICE</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            name="username"
            value={currentUser.username}
            type="text"
            placeholder="Username"
            onChange={(e) => handleInputChange("username", e.target.value)}
          />
          <input
            name="password"
            value={currentUser.password}
            type="password"
            placeholder="Password"
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
          <div className="userAuth">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>
          Don't have an account yet. <Link to="/sign-up">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};
