import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand>
          <Link to="/products">CoolBlue</Link>
        </Navbar.Brand>
        <Link to="/basket">basket</Link>
      </Container>
    </Navbar>
  );
}
