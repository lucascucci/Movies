import '../../../../css/cartaFilter.css';


const SerieHMDCard = ({dataNv}) => {

    return(
        <div className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',padding:'10px'}}>
            <h1 className="h1CardFilter">{dataNv.titulo}</h1>
            <img className="imgCardFilter" src={dataNv.imagen} alt='foto-portada'/>
            <button className='btnCardFilter'>Ver Mas</button>
        </div>
    )
}

export default SerieHMDCard;