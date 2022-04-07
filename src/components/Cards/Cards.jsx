import { Button, Card, Figure } from "react-bootstrap";
import RedButton from "../Buttons/RedButton/RedButton";
import styles from "./Cards.module.css";

export default function Cards(props) {
  return (
    <Card className={styles.card}>
      <Card.Img className={styles.img} top src={props.img} />
      <Card.Body>
        <Card.Title>
          <p className={styles.title}>
            {props.title}
          </p>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
