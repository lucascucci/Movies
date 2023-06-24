
const Item = ({data}) => {
    return(
    <>
        <h1>{data.titulo}</h1>
        <br/>
        <img src={data.imagen} alt='portada' className="imgItem"/>
        <br/>
        <button className='buttonItem'>Ver más</button>
    </>
    )
}

export default Item;