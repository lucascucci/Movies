import SerieBBCard from "../SerieBBCard/SerieBBCard";


const SerieBB = ({dataSS}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataSS.map((dataSS) => (
                <SerieBBCard dataSS={dataSS} key={dataSS.id}/>
            ))}
        </div>
    )
}

export default SerieBB;