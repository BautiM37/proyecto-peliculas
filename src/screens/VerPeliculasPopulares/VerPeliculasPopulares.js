import React, { Component } from "react";
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import './VerPeliculasPopulares.css';

class VerPeliculasPopulares extends Component {
    constructor() {
        super()
        this.state = {
            peliculas: [],
            peliculasCargadas: [],
            page: 1
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=' + this.state.page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results,
                    peliculasCargadas: data.results,
                    page: this.state.page + 1
                });
            })
            .catch()
    }

    traerMas() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=' + this.state.page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: this.state.peliculas.concat(data.results),
                    peliculasCargadas: this.state.peliculasCargadas.concat(data.results),
                    page: this.state.page + 1
                });
            })
            .catch()
    }

    render() {
        let todasPeliculas = this.state.peliculas.map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title + idx} pelicula={unaPelicula} />)

        return (
            <section className="todas-vistas">
                <h2 className="titulo-vistas">Popular Films</h2>
                <div className="grupo-vistas">
                    {todasPeliculas}
                </div>
                <div className="seccion-boton">
                    <button onClick={() => this.traerMas()} className='boton-traer'>Get More</button>
                </div>
            </section>
        )
    }
}

export default VerPeliculasPopulares;