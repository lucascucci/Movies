import SerieBBCard from "../SerieBBCard/SerieBBCard";


const SerieBB = ({dataNv}) => {
    
    return(
        <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'space-evenly'}}>
            {dataNv.map((dataNv) => (
                <SerieBBCard dataNv={dataNv} key={dataNv.id}/>
            ))}
        </div>
    )
}

export default SerieBB;