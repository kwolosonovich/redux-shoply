import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item"

function Items() {
  const { products } = useSelector((st) => st);
  const dispatch = useDispatch();

  const productList = Object.keys(products).map(
    (id) => (
      console.log(products[id].name),
      (
        <div>
          <h6>{products[id].name}</h6>
          <h6>{products[id].price}</h6>
          <h6>{products[id].description}</h6>
          <img src={products[id].image_url}></img>
        </div>
      )
    )
  );
  return (
    <div>
      <h3>Items for Sale</h3>
			{productList}
    </div>
  );
}


export default Items