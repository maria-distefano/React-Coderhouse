import  Button  from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Item({data}) {
    const urlProducto = `/Inicio/${data.id}-${data.title}`

    return(
        <Card
        id={data.id}
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
            <Button variant='dark' className='card-button'>
                <FaShoppingCart className="cart-icon-button" />
                Agregar al carrito
            </Button>
        </Card.Body>
    </Card>
    );
}

export default Item;