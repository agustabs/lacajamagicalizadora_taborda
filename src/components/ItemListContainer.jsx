import ItemCount from "./ItemCount";

function ItemListContainer() {
  return (
    <div className="w-full h-full bg-indigo-900">
      <h1 className="text-white md:flex items-center justify-center">
        Aquí iría el catalogo.
      </h1>
      <ItemCount stock={10} />
    </div>
  );
}

export default ItemListContainer;
