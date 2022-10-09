import React, {useState} from "react";
import './ProductList.css'
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";

const products = [
    {id:'1',title: 'Лжинсы'     ,price: 5000, description: 'Jeans color is blue' },
    {id:'2',title: 'Куртка'     ,price: 8000, description: 'Jacket' },
    {id:'3',title: 'Бейсболка'  ,price: 1300, description: 'Cap for baseball' },
    {id:'4',title: 'Кеды'       ,price: 1800, description: 'Modrn nice shoes' },
    {id:'5',title: 'Лоферы'     ,price: 2500, description: 'Sweet nice shoes' },
    {id:'6',title: 'Свитшот'    ,price: 3400, description: 'Красивый свитшот' },
    {id:'7',title: 'Шапка'      ,price: 1450, description: 'Зимний головной убор' },
    {id:'8',title: 'Сумка'      ,price: 2200, description: 'Сумка повседневная' },
    {id:'9',title: 'Брюки'      ,price: 3100, description: 'Брюки шелковые' },
    {id:'10',title: 'Часы'      ,price: 12000, description: 'Часы как у Путина' },

]

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return acc += item.price
    }, 0)
}

const ProductList = (props) => {
    
    const [addedItems, setAddedItems] = useState([]);
    const {TG, queryId} = useTelegram();

    const onAdd = (product) => {
        const alreadyAdded = addedItems.find(item => item.id === product.id);
        let newItems = [];

        if(alreadyAdded) {
            newItems = addedItems.filter(item => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if(newItems.length === 0) {
            TG.MainButton.hide();
        } else {
            TG.MainButton.show();
            TG.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`
            })
        }
    }


    return (
        <div className={'list'}>
            { 
                products.map(item =>(
                    <ProductItem
                        product={item}
                        onAdd={onAdd}
                        className={'item'}
                    />
                ))
            }
            
        </div>
    )
}

export default ProductList;