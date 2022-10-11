import('./Roadmap.css')

const Roadmap = () => {

    return(
        <div className={'roadmap__head'}>
            <h2>Вопросы на которые можно получить ответы.</h2>
            <p>Ниже приведены текущие вопросы на которые уже готовятся ответы.</p>
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

export default Roadmap;