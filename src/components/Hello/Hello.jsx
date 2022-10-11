import('./Hello.css')

const Hello = () => {

    return(
        <div className={'hello__cntainer'}>Это главная</div>
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