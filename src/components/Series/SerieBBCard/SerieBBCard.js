import '../../../css/cartaFilter.css';
import { Link } from 'react-router-dom';


const SerieBBCard = ({dataNv}) => {

    return(
        <div className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <h1 className="h1CardFilter">{dataNv.titulo}</h1>
            <img className="imgCardFilter" src={dataNv.imagen} alt='foto-portada'/>
            <Link to={`/serieBB/${dataNv.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
        </div>
    )
}

export default SerieBBCard;

//<Link to={`/item/${items.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>