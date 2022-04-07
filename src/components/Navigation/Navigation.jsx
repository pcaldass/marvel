import { Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import NavLink from "./NavLink/NavLink";
import RedButton from '../Buttons/RedButton/RedButton'
import styles from './Navigation.module.css'

export default function Navigation() {
  return (
    <Navbar className={styles.navbar} expand="lg">
      <Container fluid className='mb-3'>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              link='/comics'
              option='Quadrinhos'
            />
            <NavLink
              link='/characters'
              option='Personagens'
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
