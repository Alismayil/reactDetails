import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './details.css';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  
  const baseUrl = `http://localhost:3000/products/${id}`;

  const datas = async () => {
    const res = await axios.get(`${baseUrl}`);
    setProduct(res.data);
  };

  useEffect(() => {
    datas();
  }, [id]);

  return (
    <div className='details'>
      <h1>Details</h1>
      <p>nov: {id}</p>
      <img src={product.image} alt='' />
      <p>nov: {product.type}</p>
      <p>name: {product.name}</p>
      <p>price: {product.price}Azn</p>
      <p>rating: {product.rating}</p>
      <p>color: {product.color}</p>
      <p>weight: {product.weight}</p>
    </div>
  );
}

export default Details;