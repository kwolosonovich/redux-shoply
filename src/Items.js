import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "./actions"; 
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdbreact";

function Items() {
  const { products } = useSelector((st) => st);
  const dispatch = useDispatch();

  const add = () => dispatch(addItem(id));
  const remove = () => dispatch(removeItem(id));

  const productList = Object.keys(products).map(
    (id) => (
      console.log(products[id].name),
      (
        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              cascade
              className="img-fluid"
              overlay="white-light"
              hover
              src={products[id].image_url}
            />
            <MDBBtn
              floating
              tag="a"
              className="ml-auto mr-4 lighten-3"
              action
              onClick="add"
            >Add</MDBBtn>
            <MDBBtn
              floating
              tag="a"
              className="ml-auto mr-4 lighten-3 mdb-coalor"
              action
              onClick="remove"
            >Remove</MDBBtn>
            <MDBCardBody cascade>
              <MDBCardTitle>{products[id].name}</MDBCardTitle>
              <hr />
              <MDBCardText>
                {products[id].description}
                <br></br>
                {products[id].price}
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      )
    )
  );
  return (
    <div>
      <h3>Items for Sale</h3>
      <MDBRow>{productList}</MDBRow>
    </div>
  );
}


export default Items