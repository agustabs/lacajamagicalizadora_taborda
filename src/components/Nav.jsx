import "./styles/nav.css";
import logo32x32 from "../assets/logo32x32.png";
import CartWidget from "./CartWidget.jsx";

function Nav() {
  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center">
          <a href="#">
            <img src={logo32x32} alt="logo" />
          </a>
          La Caja Magicalizadora
        </div>
        <ul className="md:flex md:items-center ">
          <li className="md:ml-8 text-xl ">
            <a
              className="text-gray-800 hover:text-gray-400 duration-500"
              href="#vinos"
            >
              Vinos
            </a>
          </li>
          <li className="md:ml-8 text-xl ">
            <a
              className="text-gray-800 hover:text-gray-400 duration-500"
              href="#"
            >
              Magic Box
            </a>
          </li>
          <li className="md:ml-8 text-xl ">
            <a
              className="text-gray-800 hover:text-gray-400 duration-500"
              href="#"
            >
              Arte
            </a>
          </li>
          <li className="md:ml-8 text-xl ">
            <a
              className="text-gray-800 hover:text-gray-400 duration-500"
              href="#"
            >
              Sobre nosotros
            </a>
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
