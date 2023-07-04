import SerieHMDCard from "../SerieHMDCard/SerieHMDCard";
import { usePeliContext } from "../../../context/PeliContext";

const SerieHMD = () => {

    const {dataNv} = usePeliContext()

    return(
        <>
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly',padding:'10px',marginBottom:'40px'}}>
            {dataNv.map((dataNv) => (
                <SerieHMDCard dataNv={dataNv} key={dataNv.id}/>
            ))}
        </div>
        
        </>
    )
}

export default SerieHMD;