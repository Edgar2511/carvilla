import { useDispatch, useSelector } from "react-redux";
import {
  User,
  selectCurrentUser,
  setCurrentUserAction,
  setUsersDataAction,
} from "../../../store/auth";
import "./SignupPage.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const handleInputChange = (name: keyof User, value: string) => {
    dispatch(setCurrentUserAction({ name, value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setUsersDataAction());

    handleInputChange("username", "");
    handleInputChange("password", "");

    navigate("/login");
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
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>
          Already have an account. <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
