import React from "react"

function Item ({ name, price, description, image }) {

	return (
    <div>
      <h1>{{ name }}</h1>
      <h3>{{ price }}</h3>
      <h3>{{ description }}</h3>
    </div>
  );
}

export default Item