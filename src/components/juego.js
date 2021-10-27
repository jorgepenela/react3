import {Link} from 'react-router-dom';

const Juego = (props) => {
    return (
        <div className="row">
            <div className="col p-5">
            <Link to="/Biblioteca" className="btn btn-outline-primary btn-xs mb-2">←volver</Link>
            <br />
            
            <h3>Nombre del juego</h3>
            <img src="" alt="" />
            <p>Genero: </p>
            <p>Id : { props.match.params.id }</p>
            </div>
        </div>

        
    );
}
 
export default Juego;