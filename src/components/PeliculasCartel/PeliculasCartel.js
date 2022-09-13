import React, { Component } from "react";
import './peliculasCartel.css'
import CadaPelicula from "../CadaPelicula/CadaPelicula";
import { Link } from 'react-router-dom';

class PeliculasCartel extends Component {
    constructor() {
        super()
        this.state = {
            peliculas: [],
            cantidadMostrados: 6,
            peliculasCargadas: []
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    peliculasCargadas: data.results
                });
            })
            .catch()
    }

    cargarMas() {
        this.setState({
            cantidadMostrados: this.state.cantidadMostrados >= this.state.peliculas.length ?
                this.state.cantidadMostrados : this.state.cantidadMostrados + 6
        })

    }

    cargarMenos() {
        this.setState({
            cantidadMostrados: this.state.cantidadMostrados > 6 ?
                this.state.cantidadMostrados - 6 : this.state.cantidadMostrados
        })
    }

    render() {
        let masPeliculas = this.state.peliculas.slice((this.state.cantidadMostrados - 6), this.state.cantidadMostrados).map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title + idx} pelicula={unaPelicula} />)

        return (
            <div>
                <section className="tarjetas-varias">
                    <i onClick={() => this.cargarMenos()} className="fas fa-solid fa-chevron-left flechas"></i>
                    {masPeliculas}
                    {this.state.cantidadMostrados >= 19 ? <Link to='/cartelera'><button className='ver-todas'>See all</button></Link> : <i onClick={() => this.cargarMas()} className="fas fa-solid fa-chevron-right flechas"></i>}
                </section>
            </div>
        )
    }
}

export default PeliculasCartel;