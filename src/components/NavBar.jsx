import { IoCart } from "react-icons/io5";
import logo from "../assets/swm_logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img className="w-[150px] rounded-full" src={logo} alt="" />
          </div>
        </NavLink>
        <div>
          <NavLink to="/">
            <p> Home </p>
          </NavLink>
          <NavLink to="/cart">
            <div>
              <IoCart></IoCart>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
