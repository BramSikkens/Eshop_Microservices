import React from "react";
import { Container, Form, Button, Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerRx } from "../redux/slices/authenticationSlice";
import { useNavigate } from "react-router-dom";
import { fetchUserBasket } from "../redux/slices/basketSlice";

export default function RegisterPage() {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (user && user._id) {
    dispatch(fetchUserBasket(user._id));
    navigate("/", { replace: true });
  }
  return (
    <Container className="p-5">
      <Row>
        <Col md={{ span: 9, offset: 2 }}>
          <h2>Account Aanmaken</h2>
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 2 }}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                registerRx({ email: emailField, password: passwordField })
              );
            }}
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => {
                  setEmailField(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => {
                  console.log(e.target.value);
                  setPasswordField(e.target.value);
                }}
              />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="success" size="lg" type="submit">
                Account aanmaken
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={{ span: 4 }}>
          <h4>Nieuwe Klant?</h4>
          <p>Nieuwe redenen om een account aan te maken</p>
          <ul>
            <li>Beheer al je bestellingen en retouren op één plek</li>
            <li>Bestel sneller met je bewaarde adresgegevens</li>
            <li>Je winkelwagen altijd en overal opgeslagen</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
