import '../styles/Service.css';
import oil1 from '../img/oil1.jpg';
import oil2 from '../img/oil2.jpg';
import hotStone from '../img/hot stone.jpg';
import { Container, Row, Col } from 'react-bootstrap';
import CardService from './CardService';

function Service() {
  return (
    <div className="Service">
        <h1 className='p-5'>Erleben Sie unser Verwöhnprogramm Preisliste:</h1>
        <Container className='container'>
          <h3>Oil Massage</h3>
          <Row className='mb-5'>
            <Col className="d-flex justify-content-center">
              <CardService image={oil1} nameService={"Rückenmassage mit Öl"} prices={["30 min 25€", "45 min 40€"]}/>
            </Col>
            <Col className="d-flex justify-content-center">
              <CardService image={oil2} nameService={"Ganzkörpermassage mit Öl"} prices={["60 min 45€", "90 min 68€", "120 min 85€"]}/>
            </Col>
          </Row>
        </Container>
        <Container className='container'>
          <h3>Hot Stone Massage</h3>
          <Row className='mb-5'>
            <Col className="d-flex justify-content-center">
              <CardService image={hotStone} nameService={"Mit Heißen Steinen"} prices={["60 min 55€", "90 min 80€", "120 min 100€"]}/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default Service;