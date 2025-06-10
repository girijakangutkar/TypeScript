import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex flex-row justify-center bg-gray-200">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `m-2 p-1 ${
              isActive
                ? "text-green-800 font-bold border-b-2 border-green-500"
                : "text-gray-800 border-transparent hover:border-b-2 hover:border-green-200"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/summary"
          className={({ isActive }) =>
            `m-2 p-1 ${
              isActive
                ? "text-green-800 font-bold border-b-2 border-green-500"
                : "text-gray-800 border-transparent hover:border-b-2 hover:border-green-200"
            }`
          }
        >
          Summary
        </NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
