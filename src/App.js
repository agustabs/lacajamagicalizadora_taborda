import "./App.css";
import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemlist" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
