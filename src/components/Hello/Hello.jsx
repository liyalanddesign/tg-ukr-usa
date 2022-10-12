import React from "react";
import {Link} from 'react-router-dom'
import('./Hello.css')

const Hello = () => {
    return(
        <div>
            <div className={'hello__cntainer'}>Это главная</div>
        </div>
    );


    // return (
    //     <div className={'list'}>
    //         {products.map(item => (
    //             <ProductItem
    //                 product={item}
    //                 onAdd={onAdd}
    //                 className={'item'}
    //             />
    //         ))}
    //     </div>
    // );
}

export default Hello;