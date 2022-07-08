import "./App.css";
import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import CartDetails from "./components/CartDetails";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/itemlist" element={<ItemListContainer />} />
        <Route path="/cartdetails" element={<CartDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
