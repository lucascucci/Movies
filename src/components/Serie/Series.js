import { Link } from "react-router-dom";


const Series = () => {

    return(
        <div style={{paddingTop:'200px',paddingBottom:'200px',fontSize:'40px'}}>
            <ul style={{display:'flex',flexDirection:'column',justifyContent:'space-evenly',listStyle:'none'}}>
                <div>
                <Link to={'/series/housemd'}><li>House MD</li></Link>
                </div>
                <div>
                <Link to={'/series/casadepapel'}><li>La casa de papel</li></Link>
                </div>
                <div>
                <Link to={'/series/bb'}><li>Breaking Bad</li></Link>
                </div>
                <div>
                <Link to={'/series/gameofthrones'}><li>Game of Thrones</li></Link>
                </div>
                <div>
                <Link to={'/series/bettercallsaul'}><li>Better Call Saul</li></Link>
                </div>
            </ul>
        </div>
    )
}

export default Series;