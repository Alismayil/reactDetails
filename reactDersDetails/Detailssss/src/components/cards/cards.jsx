import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cards.css';
import { Link } from 'react-router-dom';

function Cards() {
  const [inform, setInform] = useState([]);
  const baseUrl = 'http://localhost:3000/products';

  const datas = async () => {
    const res = await axios.get(`${baseUrl}`);
    setInform(res.data);
  };

  useEffect(() => {
    datas();
  }, []);

  return (
    <div className='cardBox'>
      {inform &&
        inform.map((item) => (
          <div className='card' key={item.id}>
            <img src={item.image} alt='' />
            <p>nov: {item.type}</p>
            <p>name: {item.name}</p>
            <p>price: {item.price}Azn</p>
            <Link to={`/details/${item.id}`}>details</Link>
          </div>
        ))}
    </div>
  );
}
export default Cards;