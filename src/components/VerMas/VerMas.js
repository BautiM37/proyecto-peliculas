import React, { Component } from "react";

class VerMas extends Component {
    constructor(props) {
        super(props)
        this.state={

        }
    }

    render() {
        return(
            <section className='seccion-grande'>
                <img src={'https://image.tmdb.org/t/p/w780/' + this.props.informacion.backdrop_path} alt="" className='imagen-grande' />
                <h2>{this.props.informacion.title}</h2>
                <p>{this.props.informacion.overview}</p>
                <button><i className="fas fa-solid fa-star"></i></button>
            </section>
        )
    }

}

export default VerMas;