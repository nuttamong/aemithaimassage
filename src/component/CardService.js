import '../styles/Service.css';
import { Card } from 'react-bootstrap';

function CardService(props) {
    let id = 0
    const prices = props.prices.map((price) => <Card.Text key={id++}>{price}</Card.Text>);
    return (
        <Card style={{ minWidth: '25rem', minHeight: '30rem' }} className='my-3'>
            <Card.Img variant="top" src={props.image} style={{ maxHeight: '20rem', maxWidth: '29rem'}}/>
            <Card.Body>
                <Card.Title>{props.nameService}</Card.Title>
                {prices}
            </Card.Body>
        </Card>  
  );
}

export default CardService;