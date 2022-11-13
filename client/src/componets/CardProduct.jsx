import React from "react";
import { Link } from 'react-router-dom';

import "../styles/card.css";

export default function Card({ image, name, url, price, id }) {

  const handelclick = ()=> {
    console.log("detalle")
  }
  return (
        <div className="card">
          <Link to='/'>
            <img src={image} alt='' />
          </Link>
          <div className="content">
            <h3><Link to='/'>{name}</Link>
            </h3>
            <span>${price}</span>
            <button onClick={handelclick}><Link className="text-reset text-decoration-none" to={'/detail/' + id}>Ver más</Link></button>
          </div>
        </div>
  );
}
