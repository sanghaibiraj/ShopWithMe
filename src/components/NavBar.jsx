import { IoCart } from "react-icons/io5";
import logo from "../assets/swm_logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {cart} = useSelector((state) => state); 

  return (
    <div>
      <nav className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="flex items-center ml-5">
            <img className="w-[100px] rounded-full" src={logo} alt="" />
            <p className="text-[#00ffbf9c] text-xl underline">Shop With Me</p>
          </div>
        </NavLink>
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          <NavLink to="/">
            <p> Home </p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <IoCart className="text-3xl"></IoCart>
              {
                cart.length > 0 &&
                <span className="absolute -top-1 -right-2 bg-[#00ffbf9c] text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">{cart.length}</span>}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
