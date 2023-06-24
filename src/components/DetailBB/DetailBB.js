import '../../css/detailBB.css'
const DetailBB =({data}) => {

    return (
        <div className="container">
            <h1>
                {data.titulo}
                <img src={data.imagen} alt='portada' className="img"/>
                
            </h1>
        </div>    
    )
}

export default DetailBB;