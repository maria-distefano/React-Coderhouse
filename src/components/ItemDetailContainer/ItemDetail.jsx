import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ItemCount from '../ItemCount/ItemCount';
import { FaShoppingCart } from "react-icons/fa";
import { items } from '../../services/items.js';
import '../ItemDetailContainer/ItemDetail.css';
import { useParams } from 'react-router-dom';

function ItemDetail() {

    const [product, setProduct] = useState({})
    const {id} = useParams();

    function getSingleProduct(idItem) {
        return new Promise((resolve, reject) => {
            let itemFind = items.find((item) => {
                return item.id === parseInt(idItem)
            });
            setTimeout(() => {
                if (itemFind) resolve(itemFind);
                else reject(new Error("Artículo no encontrado"));
            }, 2000);
        });
    }

    useEffect(() => {
        getSingleProduct(id).then((resp) => setProduct(resp));
    }, [id])

    return (
        <div className='detail-container'>
            <div className='detail-img-container'>
                <h2 className='detail-title'>{product.title}</h2>
                <img className='detail-img' src={product.img} alt={product.title} />
            </div>
            <div className='detail-buy'>   
                    <h2 className='detail-price'>$ {product.price}</h2>
                <ItemCount />
                <Button variant='dark' className='detail-button'>
                    <FaShoppingCart className="cart-icon-button" />
                    Agregar al carrito
                </Button>
            </div>
        </div>
    )
}

export default ItemDetail;