import '../CartWidget/CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContext';
import { useContext } from 'react';

function CartWidget() {
    const { getTotalItemsInCart } = useContext(cartContext);
    return (
        <Link className='detail-cart' to={"/cart"}>
            <div className="cart-container">
            <FaShoppingCart 
            className='cart-icono'/>
            <div className='display'>{getTotalItemsInCart()}</div>
            </div>
        </Link>
    )
}

export default CartWidget;