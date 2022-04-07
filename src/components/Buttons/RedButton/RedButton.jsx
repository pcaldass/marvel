import { Button, Col, Row } from "react-bootstrap";
import styles from './RedButton.module.css'

export default function RedButton(props){
  return (
    <>
      <Button size={props.size} className={styles.btn}>
        {props.button}
      </Button>
    </>
  )
}