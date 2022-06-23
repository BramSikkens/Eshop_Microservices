import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import BasketItem from "../Components/BasketItem";
import { useSelector } from "react-redux";

function BasketPage() {
  const basketItems = useSelector((state) => state.basket.items);

  return (
    <Container className="p-5">
      <Row>
        <Col md={{ span: 6, offset: 1 }}>
          <h2>Winkelwagen</h2>
          {basketItems &&
            basketItems.map((item, index) => {
              return (
                <Row className="mb-2">
                  <BasketItem title={item.title} id={item.id} />
                </Row>
              );
            })}
        </Col>
        <Col md="4">
          <h2>Bezorging en service</h2>
          <div className="d-grid gap-2">
            <Button variant="success">
              <b>Ik ga bestellen!</b>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default BasketPage;
