import { usePeliContext } from "../../context/PeliContext";
import SerieHMD from "../Series/SerieHMD/SerieHMD";

const SerieHMDContainer = () => {

    const {dataNv}= usePeliContext();
    
    return <SerieHMD dataNv={dataNv} />
}

export default SerieHMDContainer;