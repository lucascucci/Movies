import { usePeliContext } from "../../../../context/PeliContext";
import SerieBBCard from "../SerieBBCard/SerieBBCard";


const SerieBB = () => {

    const {dataSS} = usePeliContext()
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',padding:'10px',marginBottom:'40px'}}>
            {dataSS.map((dataSS) => (
                <SerieBBCard dataSS={dataSS} key={dataSS.id}/>
            ))}
        </div>
    )
}

export default SerieBB;