import '../../../components/CartaFilter/CartaFilter';
import { Link } from 'react-router-dom';


const SerieBBCard = ({dataSS}) => {

    return(
        <div className='containerCard' style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
            <h1 className="h1CardFilter">{dataSS.titulo}</h1>
            <img className="imgCardFilter" src={dataSS.imagen} alt='foto-portada'/>
            <Link to={`/serieBB/${dataSS.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
        </div>
    )
}

export default SerieBBCard;

//<Link to={`/item/${items.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>