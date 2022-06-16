import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasketItem from "../Components/BasketItem";
import { useSelector } from "react-redux";

function BasketPage() {
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <Container>
      <h1>BasketPage</h1>
      {basketItems &&
        basketItems.map((item, index) => {
          return (
            <Row style={{ justifyContent: "center" }} className="mb-2">
              <BasketItem title={item.title} id={item.id} />
            </Row>
          );
        })}
    </Container>
  );
}

export default BasketPage;
