import './Navbar.css'
import logo from '../../img/Musas.png';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
    <header>
        <picture className="logo">
        <Link to="/"><img src={logo} alt="" /></Link>
            </picture>
            <nav className="navbar">
                <ul className="menu">
                    <li className="menu-item">
                    <Link to='/' className="menu-link">Todos los productos</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/Lenceria' className="menu-link">Lencería</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/Juguetes' className="menu-link">Jueguetes</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/categoria/Lubricantes-Aceites' className="menu-link">Lubricantes/Aceites</Link>
                    </li>
                    <li className="menu-item">
                    <Link to='/Contacto' className="menu-link">Contacto</Link>
                    </li>
                </ul>
            </nav>
            <CartWidget />
        </header>
    );
}

export default Navbar;