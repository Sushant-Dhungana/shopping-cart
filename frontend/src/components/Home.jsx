import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';

export const Home = () => {
  const {data, error, isLoading} = useGetAllProductsQuery();
  return (
    <div>Home</div>
  )
}
