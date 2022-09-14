import React, { Component } from "react";
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            serie: [],
            generos: [],
            esFav: false
        }
    }
    componentDidMount() {
        let conseguirFavoritosSeries = localStorage.getItem('favoritosSeries');
        fetch("https://api.themoviedb.org/3/tv/" + this.state.id + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    serie: data,
                    generos: data.genres
                });
            })
            .catch()

        if (conseguirFavoritosSeries.includes(this.state.id)) {
            this.setState({
                esFav: true
            })
        }
    }

    agregarYSacarFavs(id) {
        let conseguirFavoritosSeries = localStorage.getItem('favoritosSeries');
        let favoritosSeries = [];

        if (conseguirFavoritosSeries !== null) {
            let favsArray = JSON.parse(conseguirFavoritosSeries);
            favoritosSeries = favsArray
        }
        if (conseguirFavoritosSeries.includes(id)) {
            favoritosSeries = favoritosSeries.filter(cadaID => cadaID !== id);
            this.setState({
                esFav: false
            })
        } else{
            favoritosSeries.push(id)
            this.setState({
                esFav: true
            })
        }

        let favsString = JSON.stringify(favoritosSeries);
        localStorage.setItem('favoritosSeries', favsString)

    }

    render() {
        let generoSerie = this.state.generos.map((unGenero, idz) => ' ' + (idz + 1) + ') ' + unGenero.name)

        return (
            <section className="detalle-pelicula">
                <img alt='' src={'https://image.tmdb.org/t/p/w1280/' + this.state.serie.backdrop_path}
                    className='imagen-detalle' />
                <h2 className="titulo-detalle">"{this.state.serie.name}"</h2>
                <p className="overview-detalle">{this.state.serie.overview}</p>
                <p className="generoPeli">{'Genre/s: ' + generoSerie}</p>
                <p className="release-date">{this.state.serie.first_air_date}</p>
                <p className="rating">rating: {this.state.serie.vote_average}</p>
                {
                    this.state.esFav === true ?
                        <i onClick={() => this.agregarYSacarFavs(this.state.serie.id)} className="fas fa-solid fa-star icono-estrella"></i>
                        :
                        <i onClick={() => this.agregarYSacarFavs(this.state.serie.id)} className="fas fa-solid fa-circle icono-estrella"></i>
                }
            </section>
        )

    }
}

export default DetalleSerie;