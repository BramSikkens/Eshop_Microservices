import { Col, Row, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { removeItem } from "../../redux/slices/basketSlice";

import React from "react";

function BasketItem({ title, id }) {
  const dispatch = useDispatch();
  return (
    <div>
      <div class="basketBoxProductRow">
        <img src="https://picsum.photos/seed/picsum/200/100" />
        <span class="productTitle">Product 1</span>
        <span class="price">
          <b>999,-</b>
        </span>
      </div>
    </div>
  );
}

export default BasketItem;
