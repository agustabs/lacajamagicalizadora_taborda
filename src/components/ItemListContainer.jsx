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
    <div className="w-full h-full bg-indigo-900 grid grid-cols-3">
      <h1
        className="text-white text-2xl md:flex items-center justify-center"
        id="vinos"
      >
        Catalogo de vinos
      </h1>
      {info &&
        info.map((i) => (
          <ItemCount
            name={i.name}
            stock={i.stock}
            img={i.img}
            wineCellar={i.wineCellar}
            price={i.price}
          />
        ))}
    </div>
  );
}

export default ItemListContainer;
