import React, { Component } from "react";
import './peliculasPopulares.css';
import CadaPelicula from "../CadaPelicula/CadaPelicula";
import { Link } from 'react-router-dom';

class PeliculasPopulares extends Component {
    constructor() {
        super()
        this.state = {
            peliculas: [],
            cantidadMostrados: 6,
            peliculasCargadas: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=1')
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
            <React.Fragment>
                {
                    this.state.peliculas.length === 0 ?
                        <img src="/loader.gif" alt="loading content" />
                        :

                        <section className='contenedor-peliculas'>

                            <i onClick={() => this.cargarMenos()} className="fas fa-solid fa-chevron-left flechas"></i>
                            {masPeliculas}
                            {this.state.cantidadMostrados >= 19 ? <Link to='/populars'><button className='ver-todas'>See all</button></Link> : <i onClick={() => this.cargarMas()} className="fas fa-solid fa-chevron-right flechas"></i>}
                            <Link to='/populars'><button className='ver-todas-phone'>See all</button></Link>
                        </section>
                }
            </React.Fragment>
        )
    }
}

export default PeliculasPopulares;