import { usePeliContext } from "../../context/PeliContext";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {

    const {data}= usePeliContext();

    return (
        <>
            {data.map((data)=>(
                <ItemList data={data} key={data.id} />
            ))}
        </>
    )

}

export default ItemListContainer;