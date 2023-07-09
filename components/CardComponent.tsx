import React from "react";
import Card from "react-bootstrap/Card";
import styles from "../styles/CardComponent.module.scss";

interface CardComponentProps {
  cardTitle: string;
  cardText: string;
}

export const CardComponent: React.FC<CardComponentProps> = ({
  cardTitle,
  cardText,
}) => {
  return (
    <Card className={styles.cardContainer}>
      <Card.Body className={styles.cardBodyContainer}>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
    </Card>
  );
};
