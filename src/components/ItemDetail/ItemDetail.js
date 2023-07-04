import '../../css/itemDetail.css';

//detail de peliculas

const ItemDetail =({data}) => {

    return (
        <div className='container'>
            <div>
                {data.titulo}
            </div>
            <div>
                {data.descripcion}
            </div>
            <div>
            <img src={data.imagen} alt='portada' className="img"/>
            </div>
            <div>Elenco1</div>
        </div>    
    )
}

export default ItemDetail;