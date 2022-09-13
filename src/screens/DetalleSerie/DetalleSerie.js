import React, { Component } from "react";
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            serie: [],
            generos: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/" + this.state.id + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
        .then(res => res.json())
            .then(data => {
                this.setState({
                    serie: data,
                    generos: data.genres
                });
            })
            .catch()
    }

    render() {
        let generoSerie = this.state.generos.map((unGenero, idz) => ' ' + (idz+1) + ') ' + unGenero.name)
        
        return (
            <section className="detalle-pelicula">
                <img alt='' src={'https://image.tmdb.org/t/p/w1280/' + this.state.serie.backdrop_path}
                className='imagen-detalle'/>
                <h2 className="titulo-detalle">"{this.state.serie.name}"</h2>
                <p className="overview-detalle">{this.state.serie.overview}</p>
                <p className="generoPeli">{'Genre/s: ' + generoSerie}</p>
                <p className="release-date">{this.state.serie.first_air_date}</p>
                <p className="rating">rating: {this.state.serie.vote_average}</p> 
            </section>
        )
    }
}

export default DetalleSerie;