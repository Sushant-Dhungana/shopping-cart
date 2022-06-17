// import { createAsyncThunk } from '@reduxjs/toolkit';
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";
import { addToCart } from "../features/cartSlice";

export const Home = () => {
  // const [items,status] = useSelector(state => state.products); way of getting data in createAsyncThunk
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured{error.data}</p>
      ) : (
        <>
          <h2>Demo Datas</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span>Npr {product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
