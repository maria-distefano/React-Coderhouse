import '../CartWidget/CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div className="cart-container">
            <FaShoppingCart 
            className='cart-icono'/>
            <div className='display'>1</div>
        </div>
    )
}

export default CartWidget;