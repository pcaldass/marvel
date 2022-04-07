import type { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Buttons from '../src/components/Buttons/Buttons'
import Navigation from '../src/components/Navigation/Navigation'


const Home: NextPage = () => {
  return (
    <>
      <Container fluid className={styles.container}>
        <Row className='justify-content-sm-center'>
          <Col sm='auto'>
            <h1 className={styles.title}>
              O que você deseja acessar?
            </h1>
          </Col>
          <Col sm='12'>
            <Buttons />
          </Col>
        </Row>
      </Container>

      <video
        autoPlay
        muted
        className={styles.video}
      >
        <source src='videoplayback.mp4' type='video/mp4' />
      </video>
      
    </>
  )
}

export default Home
