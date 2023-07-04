
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore,doc,getDoc } from 'firebase/firestore';
//utilizado para obtener ID de seccion peliculas

const ItemDetailContainer = () => {

    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"items",id) 
        getDoc (queryDoc)
        .then (res=> setData({id:res.id,...res.data()}))
    },[id])

    return(
        <div>
            < ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer;
