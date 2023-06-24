import '../../css/itemDetail.css';



const ItemDetail =({data}) => {

    return (
        <div className='container'>
            <div>
                {data.titulo}
            </div>
            <div>
            <img src={data.imagen} alt='portada' className="img"/>
            </div>
            <div>Elenco</div>
        </div>    
    )
}

export default ItemDetail;