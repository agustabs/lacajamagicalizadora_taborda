import { useState } from "react";
import Swal from "sweetalert2";

function ItemCard(props) {
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

  const seeDetails = () => {
    Swal.fire({
      title: props.wineCellar,
      text: "$" + props.price,
      imageUrl: "../assets/wineCellar.jpg",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Bodega",
    });
  };

  return (
    <>
      <div className="m-5 max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          src={props.img}
          alt="botella de vino cordero piel de lobo"
          class="h-auto w-full"
        />
        <div className="p-5">
          <p className="text-medium mb-5 text-gray-700">{props.name}</p>
          <span className="w-full text-medium mb-5 text-gray-600">
            Cantidad: {num}
          </span>
          <button
            onClick={sumar}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Agregar
          </button>
          <button
            onClick={restar}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Restar
          </button>
          <button
            onClick={clear}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Limpiar todo
          </button>
          <button
            onClick={seeDetails}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Más información
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCard;