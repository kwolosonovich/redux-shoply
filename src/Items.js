import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item"

function Items () {

	const {products} = useSelector(st => st);
  const dispatch = useDispatch();


	console.log(products)
	return (
		<div>
			{/* {products.map(p => (
				<div>
					<Item 
						name={p.name}
						price={p.price}
						description={p.description}
						image={p.image_url}
					></Item>
				</div>
			))} */}
		</div>
	)
}

export default Items