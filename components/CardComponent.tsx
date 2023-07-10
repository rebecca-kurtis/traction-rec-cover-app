import React from "react";
import Card from "react-bootstrap/Card";


interface CardComponentProps {
  cardTitle: string;
  cardText: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  cardTitle,
  cardText,
}) => {
  return (
    <Card className="cardContainer">
      <Card.Body className="cardBodyContainer">
        <Card.Title className="cardTitle">{cardTitle}</Card.Title>
        <Card.Text className="cardText">{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
