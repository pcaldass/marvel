import Link from "next/link";
import { Button } from "react-bootstrap";
import styles from './NavLink.module.css'

export default function NavLink(props) {
  return (
    <Link href={props.link}>
      <a>
        <Button className={styles.button}>{props.option}</Button>
      </a>
    </Link>
  )
}