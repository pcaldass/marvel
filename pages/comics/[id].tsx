import { useEffect, useState } from "react";
import api from "../api/CharactersAPI";
import { useRouter } from "next/router";
import Navigation from "../../src/components/Navigation/Navigation";
import { Col, Container, Figure, Row, Button } from "react-bootstrap";
import styles from "../../styles/id.module.css";
import Description from "../../src/components/Description/Description";
import { AiFillStar } from "react-icons/ai";




interface ResponseData {
  id: String;
  title: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}


export default function () {
  const [comics, setComics] = useState<ResponseData[]>([]);
  
  const { query } = useRouter();

  useEffect(() => {
    api
      .get(`/comics/${query.id}`)
      .then((response) => {
        console.log(response.data.data.results);
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, []);
 
  function setComicsInLocalStorage(data: any) {
    var keyName = "marvel-data-studio";
    var newComic = data.comic;
    var marvelLocalStorage = localStorage.getItem(keyName) ? JSON.parse(localStorage.getItem(keyName)) : { comics: [], characters: [] };

    var existComicsIndex = marvelLocalStorage.comics.findIndex(comic => {
        return comic.id == newComic.id;
      })

    if (existComicsIndex > -1){
      var index = marvelLocalStorage.comics.id
      marvelLocalStorage.comics.splice(index, 1);
    }
    else
      marvelLocalStorage.comics.push(newComic);

    localStorage.setItem(keyName, JSON.stringify(marvelLocalStorage));
    
  }

  return (
    <>
      <Navigation />
      {comics.map((comic) => {
        return (
          <Container className={styles.container}>
            <Row>
              <h1 className={styles.title}>{comic.title}</h1>
            </Row>
            <Row className="mt-5">
              <Col sm="4">
                <Figure>
                  <Figure.Image
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  />
                </Figure>
              </Col>
              <Col sm="8">
                <Description description={comic.description} />
                <Row>
                  <Col>
                    <Button
                      className={styles.btn}
                      onClick={() => setComicsInLocalStorage({comic})}
                    >
                      Favoritar <AiFillStar/>
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
