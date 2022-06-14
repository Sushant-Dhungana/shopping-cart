import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Cart } from "./components/Cart";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
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
