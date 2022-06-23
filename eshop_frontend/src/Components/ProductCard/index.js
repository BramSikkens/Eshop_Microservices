import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem, addItemToUserBasket } from "../../redux/slices/basketSlice";
import "./style.css";

export default function ProductCard({ title, description, id }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authentication).user;

  return (
    <div style={{ width: "100%" }}>
      <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/100" />
      <div>
        <h3 className="productCardTitle">{title}</h3>
        <div class="pricingContainer">
          <b class="price">999,9-</b>
          <button
            class="shoppingButton"
            variant="primary"
            onClick={() => {
              if (!user) {
                console.log("offline");
                dispatch(
                  addItem({
                    id: id,
                    title: title,
                  })
                );
              } else if (user && user._id) {
                console.log("online");
                dispatch(
                  addItemToUserBasket({
                    userId: user._id,
                    item: {
                      id: id,
                      title: title,
                    },
                  })
                );
              }
            }}
          >
            <span class="material-icons shoppingLogo">shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
