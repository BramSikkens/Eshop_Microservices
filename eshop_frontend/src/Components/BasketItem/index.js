import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/basketSlice";

import React from "react";

function BasketItem({ title, id }) {
  const dispatch = useDispatch();
  return (
    <Col md={9} style={{ backgroundColor: "grey" }}>
      <span>
        <b>{title}</b>
      </span>
      <p>Some Product Description</p>
      <b>Price:</b>
      <span>5€</span>
      <br />
      <b>Amount:</b>

      <span>1</span>
      <Button
        onClick={() => {
          dispatch(removeItem(id));
        }}
      >
        Remove
      </Button>
    </Col>
  );
}

export default BasketItem;
