import '../CartWidget/CartWidget.css';
import { FaShoppingCart } from "react-icons/fa";

function CartWidget() {
    return (
        <div className="cart-container">
            <FaShoppingCart 
            className='cart-icono'/>
        </div>
    )
}

export default CartWidget;