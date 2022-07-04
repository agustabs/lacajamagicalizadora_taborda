import "./styles/nav.css";
import logo32x32 from "../srcAssets/logo32x32.png";
import CartWidget from "./CartWidget.jsx";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <NavLink to="/">
            <img src={logo32x32} alt="logo" />
          </NavLink>
          La Caja Magicalizadora
        </div>
        <ul className="md:flex md:items-center ">
          <li className="md:ml-8 text-xl ">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl ">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/itemlist"
            >
              Vinos
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl ">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/"
            >
              Magic Box
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl ">
            <NavLink
              className="text-gray-800 hover:text-gray-400 duration-500"
              to="/"
            >
              Sobre nosotros
            </NavLink>
          </li>
          <li className="md:ml-8 text-xl ">
            <CartWidget />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
