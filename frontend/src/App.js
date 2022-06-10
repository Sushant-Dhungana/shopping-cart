import "./App.css";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
