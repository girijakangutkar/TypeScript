import { Route, Routes, Navigate } from "react-router-dom";
import AromaticBar from "./components/pages/AromaticBar";
import UserFeedBack from "./components/pages/UserFeedBack";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import "./App.css";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { AuthContextType } from "./components/context/AuthContext";

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const { user } = useContext(AuthContextType);
  return user ? element : <Navigate to="/login" />;
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<AromaticBar />} />
        <Route
          path="/user-feedback"
          element={<PrivateRoute element={<UserFeedBack />} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
