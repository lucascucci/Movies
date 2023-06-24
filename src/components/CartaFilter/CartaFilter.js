import { Link } from 'react-router-dom'; // falta link
import '../../css/cartaFilter.css'

const CartaFilter = ({items}) => {

    return(
<>
        <div className='containerCard' >
            <h1 className="titulo">{items.titulo}</h1>
            <div className='descri'>
            
            </div>
            <br></br>
            <div>        
            <Link to={`/item/${items.id}`}><button className='btnCardFilter'>Ver Mas</button></Link>
            </div>
            <br></br>
            <img className="imgCardFilter" src={items.imagen} alt='foto-portada'/>
        </div>
        
</>        
    )

}
export default CartaFilter;
