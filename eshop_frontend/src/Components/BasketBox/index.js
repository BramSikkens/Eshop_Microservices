import React from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useSelector } from "react-redux";

function BasketBox() {
  const basketItems = useSelector((state) => state.basket.items);
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <span
        class="material-icons shoppingLogo"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        shopping_cart
      </span>
      <div
        className="basketBox"
        style={{ display: visible ? "block" : "none" }}
      >
        <div class="basketBoxHeader">
          <h2>Winkelwagen</h2>
        </div>
        <div class="basketBoxProductContainer">
          {basketItems.map((item) => {
            return (
              <div class="basketBoxProductRow">
                <img src="https://picsum.photos/seed/picsum/200/100" />
                <span class="productTitle">Product 1</span>
                <span class="price">
                  <b>999,-</b>
                </span>
              </div>
            );
          })}
        </div>
        <hr />
        <Link to="/basket">
          <Button
            variant="success"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            Naar winkelwagen
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default BasketBox;
