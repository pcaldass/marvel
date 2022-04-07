import Link from "next/link";
import { useEffect, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Cards from "../../src/components/Cards/Cards";
import Navigation from "../../src/components/Navigation/Navigation";
import styles from "../../styles/Characters.module.css";

import api from "../api/CharactersAPI";

interface ResponseData {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export default function Comics() {
  const [comics, setComics] = useState<ResponseData[]>([]);
  const [favComics, setFavComics] = useState<ResponseData[]>([]);

  function getCharactersInLocalStorage() {
    var keyName = "marvel-data-studio";
    var marvelLocalStorage = localStorage.getItem(keyName)
      ? JSON.parse(localStorage.getItem(keyName))
      : { characters: [], comics: [] };

    setFavComics(marvelLocalStorage.comics);
  }

  useEffect(() => {
    api
      .get("/comics")
      .then((response) => {
        setComics(response.data.data.results);
        getCharactersInLocalStorage();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navigation />
      <Container fluid className={styles.containerComics}>
        <Row className="justify-content-sm-center">
          <Col sm="7">
            <h1 className={styles.title}>
              Confira todos os quadrinhos do mundo Marvel
            </h1>
          </Col>
        </Row>
      </Container>
      <Container>
              <h3 className={styles.subtitle}>Favoritos</h3>
        <Row className="justify-content-sm-center">
          <Col sm="12">
            <CardGroup className="justify-content-center">
              {favComics.map((comic) => {
                return (
                  <>
                    <Link href={`comics/${comic.id}`}>
                      <a className={styles.link}>
                        <Cards
                          img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                          title={comic.title}
                        />
                      </a>
                    </Link>
                  </>
                );
              })}
            </CardGroup>

            <h3 className={styles.subtitle}>Todos os quadrinhos</h3>
            <CardGroup className="justify-content-sm-center">
              {comics.map((comic) => {
                return (
                  <Link href={`comics/${comic.id}`}>
                    <a className={styles.link}>
                      <Cards
                        img={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                        title={comic.title}
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
