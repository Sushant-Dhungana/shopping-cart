import "./App.css";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
