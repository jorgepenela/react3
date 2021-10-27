import React, { Component } from 'react';
import axios from 'axios';

class Biblioteca extends Component {
    constructor(props) {
        super(props);
        this.state = { juegos : []}
    }
    // Este es un loaded del componente:
    componentDidMount(){
        const url = "http://localhost:3001/juegos";   
        axios.get(url).then( (resp)=>{
            this.setState({ juegos : resp.data})
        })
    }

    render() { 
        return (
            <>
                <h1 className="display-2 mt-3">Los mejores juegos!!</h1>
                
                <div className="row mt-5">
                    {
                        this.state.juegos.map( (juego)=>(
                            <div key={juego.id} className="col-sm-4 mb-4">
                                <div className="card w-100 shadow">
                                    <img src={juego.imagen} alt={juego.nombre} />
                                    <div className="card-body">
                                        <h4 className="cart-title">{juego.nombre}</h4>
                                        <p className="card-subtitle">{juego.genero}</p>                                        
                                    </div>
                                    <div className="card-footer text-end">
                                        <button className="btn btn-outline-primary"
                                        onClick={ ()=>{
                                            this.props.history.push(`/juego/${juego.id}`)
                                        }}>Mas info</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </>
        );
    }
}
 
export default Biblioteca;