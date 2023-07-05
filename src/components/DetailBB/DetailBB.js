import '../../css/detailBB.css'

const DetailBB =({dataSS}) => {

    return (
        <div className="container">
            <h1>
                {dataSS.titulo}
            </h1>
            <div>
                <img src={dataSS.imagen} alt='portada' className="img"/>
            </div>
        </div>    
    )
}

export default DetailBB;