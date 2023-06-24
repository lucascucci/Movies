import '../../css/itemList.css'
import Item from '../Item/Item';

const ItemList = ({data}) => {
    
    return(
            <>
                <div className='card-container'>
                    <Item data={data}/>
                </div>
            </>
            )
    
}

export default ItemList;