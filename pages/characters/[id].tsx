import { useEffect, useState } from "react";
import api from "../api/CharactersAPI";
import { useRouter } from "next/router";
import Navigation from "../../src/components/Navigation/Navigation";
import { Col, Container, Figure, Row, Button } from "react-bootstrap";
import styles from "../../styles/id.module.css";
import Description from "../../src/components/Description/Description";
import { AiFillStar } from "react-icons/ai";




interface ResponseData {
  id: int;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}


export default function () {
  const [characters, setCharacters] = useState<ResponseData[]>([]);

  const { query } = useRouter();

  useEffect(() => {
    api
      .get(`/characters/${query.id}`)
      .then((response) => {
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
 
  function setCharactersInLocalStorage(data: any) {
    var keyName = "marvel-data-studio";
    var newCharacter = data.character;
    var marvelLocalStorage = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : {  characters: [],  comics: [] };

    var existCharacterIndex = marvelLocalStorage.characters.findIndex(character => {
        return character.id == newCharacter.id;
      })

    if (existCharacterIndex > -1) {
      var index = marvelLocalStorage.characters.id
      marvelLocalStorage.characters.splice(index, 1);
    }
    else
      marvelLocalStorage.characters.push(newCharacter);

    localStorage.setItem(keyName, JSON.stringify(marvelLocalStorage));
    
  }

  return (
    <>
      <Navigation />
      {characters.map((character) => {
        return (
          <Container className={styles.container}>
            <Row>
              <h1 className={styles.title}>{character.name}</h1>
            </Row>
            <Row className="mt-5">
              <Col sm="4">
                <Figure>
                  <Figure.Image
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  />
                </Figure>
              </Col>
              <Col sm="8">
                <Description description={character.description} />
                <Row>
                  <Col>
                    <Button
                      className={styles.btn}
                      onClick={() => setCharactersInLocalStorage({character})}
                    >
                      Favoritar <AiFillStar className={styles.icon} />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        );
      })}
    </>
  );
}
