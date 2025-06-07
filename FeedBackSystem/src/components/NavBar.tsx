import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";
import { useContext } from "react";
import { AuthContextType } from "./context/AuthContext";
import { Button } from "@/lib/ui/button";

const NavBar = () => {
  const { user } = useContext(AuthContextType);

  return (
    <nav className="navbar">
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "Active" : "")}
        >
          Home
        </NavLink>
        {user && (
          <NavLink
            to="/user-feedback"
            className={({ isActive }) => (isActive ? "Active" : "")}
          >
            Confidential
          </NavLink>
        )}
      </div>
      <div>
        {user ? (
          <Button variant="destructive" onClick={() => auth.signOut()}>
            Logout
          </Button>
        ) : (
          <Button variant="outline">
            <NavLink to="/login">Login</NavLink>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
