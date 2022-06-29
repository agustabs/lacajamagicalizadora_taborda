import { useEffect } from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

function ItemListContainer() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("data.json")
        .then((resp) => resp.json())
        .then((data) => setInfo(data));
    }, 2000);
    console.log("Check for setTimeout");
  }, []);

  return (
    <div className="w-full h-full bg-indigo-900">
      <h1 className="text-white md:flex items-center justify-center">
        Aquí iría el catalogo.
      </h1>
      {info && info.map((i) => <ItemCount name={i.name} stock={i.stock} />)}
    </div>
  );
}

export default ItemListContainer;
