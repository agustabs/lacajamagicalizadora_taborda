import { useState } from "react";
import Swal from "sweetalert2";

function ItemCount(props) {
  const [num, setNum] = useState(0);

  const sumar = () => {
    if (num < props.stock) {
      setNum(num + 1);
    } else {
      Swal.fire({
        title: "Whoops",
        text: "This item is out of stock.",
        icon: "error",
        confirmButtonText: "Back to catalogue",
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
    <>
      <div className="max-w-sm overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          //fix images and fix cards flow
          src={props.img}
          alt="botella de vino cordero piel de lobo"
          class="h-auto w-full"
        />
        <div className="p-5">
          <p className="text-medium mb-5 text-gray-700">{props.name}</p>
          <span className="w-full text-medium mb-5 text-gray-600">
            Quantity: {num}
          </span>
          <button
            onClick={sumar}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Add
          </button>
          <button
            onClick={restar}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Remove
          </button>
          <button
            onClick={clear}
            className="w-full rounded-md bg-indigo-600  m-1 py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75"
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
