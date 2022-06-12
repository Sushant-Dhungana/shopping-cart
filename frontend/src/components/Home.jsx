// import { createAsyncThunk } from '@reduxjs/toolkit';
import React from "react";
// import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../features/productsApi";

export const Home = () => {
  // const [items,status] = useSelector(state => state.products); way of getting data in createAsyncThunk
  const { data, error, isLoading } = useGetAllProductsQuery();
  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occured{error.data}</p>
      ) : (
        <>
          <h2>New Arrivals</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span>{product.price}</span>
                </div>
                <button>Add to cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
