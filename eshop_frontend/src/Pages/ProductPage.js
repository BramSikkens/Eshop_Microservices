import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../Components/ProductCard";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  function createProductRows(products) {
    let productRowContainer = [];
    let productRow = [];
    products.forEach((product, index) => {
      productRow.push(product);
      if ((index + 1) % 3 == 0) {
        productRowContainer.push(productRow);
        productRow = [];
      }
    });

    return productRowContainer;
  }

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(createProductRows(data));
      });
  });

  return (
    <Container>
      <h1>ProductPage</h1>
      {products.map((productrow) => {
        return (
          <Row className="mb-2">
            {productrow.map((product) => {
              return (
                <Col
                  sm={4}
                  style={{ display: "flex" }}
                  className="justify-content-md-start"
                >
                  <ProductCard id={product._id} title={product.title} />
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
}
