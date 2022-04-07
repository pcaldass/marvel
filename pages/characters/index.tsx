import Link from "next/link";
import { useEffect, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Cards from "../../src/components/Cards/Cards";
import Navigation from "../../src/components/Navigation/Navigation";
import styles from "../../styles/Characters.module.css";

import api from "../api/CharactersAPI";

interface ResponseData {
  id: string;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function Characters() {
  const [characters, setCharacters] = useState<ResponseData[]>([]);
  const [favCharacters, setFavCharacters] = useState<ResponseData[]>([]);

  function getCharactersInLocalStorage() {
    var keyName = "marvel-data-studio";
    var marvelLocalStorage = localStorage.getItem(keyName)
      ? JSON.parse(localStorage.getItem(keyName))
      : { characters: [], comics: [] };

    setFavCharacters(marvelLocalStorage.characters);
  }

  useEffect(() => {
    api
      .get("/characters")
      .then((response) => {
        setCharacters(response.data.data.results);
        getCharactersInLocalStorage();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navigation />
      <Container fluid className={styles.container}>
        <Row className="justify-content-sm-center">
          <Col sm="7">
            <h1 className={styles.title}>
              Confira todos os personagens do mundo Marvel
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="justify-content-sm-center">
          <Col sm="12">
            <CardGroup className="justify-content-center">
              {favCharacters.map((character) => {
                return (
                  <Link href={`characters/${character.id}`}>
                    <a className={styles.link}>
                      <Cards
                        img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        title={character.name}
                      />
                    </a>
                  </Link>
                );
              })}
            </CardGroup>

            <CardGroup className="justify-content-sm-center">
              {characters.map((character) => {
                return (
                  <Link href={`characters/${character.id}`}>
                    <a className={styles.link}>
                      <Cards
                        img={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                        title={character.name}
                      />
                    </a>
                  </Link>
                );
              })}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}
