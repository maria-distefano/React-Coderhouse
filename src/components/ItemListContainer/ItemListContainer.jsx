import "./ItemListContainer.css";
import {items} from '../../services/items';
import { useState, useEffect } from 'react';
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    let [data, setData] = useState([]);
    const { cat } = useParams();

    function getSingleCategory(cat) {
        return new Promise((resolve, reject) => {
            let itemFilter = items.filter((item) => {
                return item.category === cat;
            });
            setTimeout(() => {
                console.log(itemFilter)
                if (itemFilter) resolve(itemFilter);
                else reject(new Error("Artículo no encontrado"));
            }, 1200);
        });
    }

    useEffect(() => {
        if (cat === undefined) {
            const getItems = new Promise((resolve) => {
                setTimeout(() => {
                    resolve(items)
                }, 0)
            })
            getItems.then(respuesta => {
                setData(respuesta)
            })
        } else {
            getSingleCategory(cat).then((respuesta) => setData(respuesta));
        }
    },
        [cat]
    )
    return (
        <div className="container">
            <ItemList data={data} />
        </div>
    );
}

export default ItemListContainer;