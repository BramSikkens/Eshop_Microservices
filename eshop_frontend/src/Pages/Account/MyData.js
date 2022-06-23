import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { baseURLs } from "../../lib/Microservices";

import { useNavigate } from "react-router-dom";

function MyDataPage() {
  let navigate = useNavigate();
  const user = useSelector((state) => state.authentication).user;
  const [userData, setUserData] = useState({
    firstName: "",
    secondName: "",
  });

  useEffect(() => {
    if (user && user._id) {
      console.log("fetch userdata");
      const userdata = fetch(
        baseURLs.identityAPI + "/user/" + user._id + "/userdata"
      )
        .then((data) => data.json())
        .then((info) => {
          setUserData(info);
        });
    }
  }, []);

  if (user && user._id) {
    return (
      <Container>
        <h1>Mijn gegevens</h1>
        <Row>
          <Col>
            <h3>Persoonlijke Gegevens</h3>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userData.firstName || ""}
                  onChange={(e) => {
                    setUserData({ ...userData, firstName: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Second Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userData.secondName || ""}
                  onChange={(e) => {
                    setUserData({ ...userData, secondName: e.target.value });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) => {}}
                />
              </Form.Group>

              <h3>Adres Gegevens</h3>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userData?.address?.country || ""}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        country: e.target.value,
                      },
                    });

                    console.log(userData);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={userData?.address?.city || ""}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        city: e.target.value,
                      },
                    });
                    console.log(userData);
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={userData?.address?.postalCode || ""}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        postalCode: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={userData?.address?.street || ""}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        street: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>HouseNr</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={userData?.address?.number || ""}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      address: {
                        ...userData.address,
                        number: e.target.value,
                      },
                    });
                  }}
                />
              </Form.Group>
              <Button
                onClick={async (e) => {
                  console.log(userData);
                  e.preventDefault();
                  const res = await fetch(
                    baseURLs.identityAPI + "/user/" + user._id + "/userdata",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({ userData: userData }),
                    }
                  );

                  console.log(await res.json());
                }}
                type="submit"
              >
                Save Gegevens
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MyDataPage;
