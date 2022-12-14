import './ItemCount.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ItemCount({onAddToCart}) {

    const [values, setValues] = useState({ contador: 0, stock: 5 });
    const onAdd = () => {
        if (values.contador < 5) {
            setValues({ contador: values.contador + 1, stock: values.stock - 1 });
        }
        if (values.stock <= 1) {
            toast.error('No podes sumar mas productos', {
                position: "top-left",
                autoClose: 1800,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                className: 'toastify-warning'
                });
        }
    }

    const onDel = () => {
        if (values.contador > 1) {
            setValues({ contador: values.contador - 1, stock: values.stock + 1 });
        }
    }

    return (
        <div className='count-container'>
            <div className='item-count-container'>
                <Button
                    className='btn-resta'
                    onClick={onDel}
                    variant="dark">-</Button>
                <span className='contador'>{values.contador}</span>
                <Button
                    className='btn-suma'
                    onClick={onAdd}
                    variant="dark">+</Button>
                    <ToastContainer/>
            </div>
            <div className='stock'>
                Stock: {values.stock}
            </div>
            <Button onClick={() => onAddToCart(values.contador)} variant='dark' className='detail-button'>
                <FaShoppingCart className="cart-icon-button" />
                Agregar al carrito
            </Button>
        </div>
    );
}

export default ItemCount;