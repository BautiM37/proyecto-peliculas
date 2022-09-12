import React, { Component } from "react";
import './DetallePelicula.css'

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: []
        }
    }

    componentDidMount(){
        fetch("https://api.themoviedb.org/3/movie/" + this.state.id + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
        .then(res => res.json())
            .then(data => {
                this.setState({
                    pelicula: data
                });
            })
            .catch()
    }

    render() {
        return (
            <section className="detalle-pelicula">
                <img alt='' src={'https://image.tmdb.org/t/p/w1280/' + this.state.pelicula.backdrop_path} className='imagen-detalle'/>
                <h2 className="titulo-detalle">Detalle "{this.state.pelicula.title}"</h2>
            </section>
        )
    }
}

export default DetallePelicula;