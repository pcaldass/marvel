import { Container, Navbar } from "react-bootstrap";
import styles from './Header.module.css'

export default function Header() {
  return (
    <Navbar expand="lg" className={styles.header}>
      <Container fluid>
        <a href="/">
          <img className={styles.logo} src="Marvel_Logo.png" alt=""/>
        </a>
      </Container>
    </Navbar>
  );
}
