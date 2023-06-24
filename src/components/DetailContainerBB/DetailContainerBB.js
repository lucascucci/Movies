
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailBB from "../DetailBB/DetailBB";
import { getFirestore,doc,getDoc } from 'firebase/firestore';

const DetailContainerBB = () => {

    const [data,setData] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const querydb = getFirestore ()
        const queryDoc = doc(querydb,"serieBB",id) 
        getDoc (queryDoc)
        .then (res=> setData({id:res.id,...res.data()}))
    },[id])

    return(
        <div>
            < DetailBB data={data} />
        </div>
    )
}

export default DetailContainerBB;