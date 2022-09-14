import React, { Component } from "react";
import './DetallePelicula.css'

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            pelicula: [],
            generos: [],
            esFav: false
        }
    }

    componentDidMount() {
        let conseguirFavoritos = localStorage.getItem('favoritos');
        fetch("https://api.themoviedb.org/3/movie/" + this.state.id + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pelicula: data,
                    generos: data.genres
                });
            })
            .catch()

        if (conseguirFavoritos.includes(this.state.id)) {
            this.setState({
                esFav: true
            })
        }
    }

    agregarYSacarFavs(id) {
        let conseguirFavoritos = localStorage.getItem('favoritos');
        let favoritos = [];

        if (conseguirFavoritos !== null) {
            let favsArray = JSON.parse(conseguirFavoritos);
            favoritos = favsArray
        }
        if (conseguirFavoritos.includes(id)) {
            favoritos = favoritos.filter(cadaID => cadaID !== id);
            this.setState({
                esFav: false
            })
        } else {
            favoritos.push(id)
            this.setState({
                esFav: true
            })
        }

        let favsString = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsString)

    }

    render() {
        let generoPelicula = this.state.generos.map((unGenero, idz) => ' ' + (idz + 1) + ') ' + unGenero.name)

        return (
            <section className="detalle-pelicula">
                <img alt='' src={'https://image.tmdb.org/t/p/w1280/' + this.state.pelicula.backdrop_path} className='imagen-detalle' />
                <h2 className="titulo-detalle">"{this.state.pelicula.title}"</h2>
                <p className="overview-detalle">{this.state.pelicula.overview}</p>
                <p className="generoPeli">{'Genre/s: ' + generoPelicula}</p>
                <p className="release-date">{this.state.pelicula.release_date}</p>
                <p className="rating">rating: {this.state.pelicula.vote_average}</p>
                <p className="duracion">{this.state.pelicula.runtime} minutes</p>
                {
                    this.state.esFav === true ?
                        <i onClick={() => this.agregarYSacarFavs(this.state.pelicula.id)} className="fas fa-solid fa-star icono-estrella"></i>
                        :
                        <i onClick={() => this.agregarYSacarFavs(this.state.pelicula.id)} className="fas fa-solid fa-circle icono-estrella"></i>
                }
            </section>
        )
    }
}

export default DetallePelicula;