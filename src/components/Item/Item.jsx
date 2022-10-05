import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Item({data}) {
    const urlProducto = `/Inicio/${data.id}-${data.title}`

    return(
        <Card
        style={{ width: "30rem" }}>
        <Card.Img className="card-img" variant="top" src={data.img} />
        <Card.Body className='card-body'>
            <Card.Title className="card-title">{data.title}</Card.Title>
            <Card.Text className="card-description">
                $ {data.price}
            </Card.Text>
            <Link to={urlProducto} className="card-detalle-button">
                Ver detalle
            </Link>
        </Card.Body>
    </Card>
    );
}

export default Item;