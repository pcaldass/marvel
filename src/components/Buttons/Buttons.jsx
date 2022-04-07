import Link from "next/link";
import { Col, Row } from "react-bootstrap";
import RedButton from "./RedButton/RedButton";

export default function Buttons() {
  return (
    <Row className="justify-content-sm-center">
      <Col sm="auto" className="">
        <Link href="comics">
          <a>
            <RedButton size='lg' button="Quadrinhos" />
          </a>
        </Link>
        <Link href="/characters">
          <a>
            <RedButton size='lg' button="Personagens" />
          </a>
        </Link>
      </Col>
    </Row>
  );
}
