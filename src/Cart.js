import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

function Cart() {
  const dispatch = useDispatch();
  const {cartItems} = useSelector(st => st);

  const cartItems = Object.keys(item).map(
    (id) => (
      console.log(item[id].name),
      (
        <MDBCol md="3">
          <MDBCard>
            <MDBCardImage
              cascade
              className="img-fluid"
              overlay="white-light"
              hover
              src={item[id].image_url}
            />
            <MDBCardBody cascade>
              <MDBCardTitle>{item[id].name}</MDBCardTitle>
              <hr />
              <MDBCardText>
                {item[id].description}
                <br></br>
                {item[id].price}
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
    <MDBRow>{cartItems}</MDBRow>
  </div>
);
}

export default Cart;
