import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signInRx } from "../redux/slices/authenticationSlice";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [emailField, setEmailField] = useState("");
  const [passwordField, setPasswordField] = useState("");
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // if (user) {
  //   navigate("/products", { replace: true });
  // }
  return (
    <Container>
      <h1>Register Page</h1>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("http://localhost:5001/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: emailField,
              password: passwordField,
            }),
          }).then((res) =>
            res.json().then((user) => {
              console.log(user);
              dispatch(signInRx(user));
            })
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            type="password"
            onChange={(e) => {
              console.log(e.target.value);
              setPasswordField(e.target.value);
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
}
