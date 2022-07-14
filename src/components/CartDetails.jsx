import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

function CartDetails() {
  const location = useLocation();
  const { props } = location.state;
  const [num, setNum] = useState(0);

  const sumar = () => {
    if (num < props.stock) {
      setNum(num + 1);
    } else {
      Swal.fire({
        title: "Whoops",
        text: "Has alcanzado el máximo de unidades disponibles.",
        icon: "error",
        confirmButtonText: "Volver al catalogo",
      });
    }
  };

  const restar = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const clear = () => {
    setNum(0);
  };

  return (
    <section className="text-gray-800 body-font overflow-hidden bg-sky-700">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={props.img}
          ></img>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-800 tracking-widest">
              La Caja Magicalizadora
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {props.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="text-gray-600 ml-3">4 Reseñas</span>
              </span>
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>
                </a>
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Bodega:</span>
                <p className="text-slate-400">{props.wineCellar}</p>
              </div>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <span className="w-full text-medium mb-5 text-gray-900">
                Stock disponible: {props.stock}
              </span>
              <span className="w-full text-medium mb-5 text-gray-900">
                Cantidad seleccionada: {num}
              </span>
            </div>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <button
                onClick={sumar}
                className="w-full rounded-md bg-indigo-500  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
              >
                Agregar
              </button>
              <button
                onClick={restar}
                className="w-full rounded-md bg-indigo-500  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
              >
                Restar
              </button>
              <button
                onClick={clear}
                className="w-full rounded-md bg-indigo-500  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
              >
                Limpiar todo
              </button>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900 p-3 m-1">
                ${props.price}
              </span>
              <button className="flex ml-auto text-white bg-indigo-500 border-0 p-3 m-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Agregar al carrito
              </button>
              <Link to="/itemlist">
                <button className="flex ml-auto text-white bg-indigo-500 border-0 p-3 m-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Volver al catalogo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartDetails;
