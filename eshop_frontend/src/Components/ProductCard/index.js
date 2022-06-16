import React from "react";
import { Card, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/basketSlice";

export default function ProductCard({ title, description, id }) {
  const dispatch = useDispatch();

  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" src="https://picsum.photos/seed/picsum/200/100" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(
              addItem({
                id: id,
                title: title,
              })
            );
          }}
        >
          Add to basket
        </Button>
      </Card.Body>
    </Card>
  );
}
