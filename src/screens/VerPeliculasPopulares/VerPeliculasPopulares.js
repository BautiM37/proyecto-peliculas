import React, { Component } from "react";
import CadaPelicula from "../../components/CadaPelicula/CadaPelicula";
import './VerPeliculasPopulares.css';

class VerPeliculasPopulares extends Component {
    constructor() {
        super()
        this.state = {
            peliculas: [],
            peliculasCargadas: [],
            page: 1,
            valor: ''
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

    // detener que el form se envíe, "event" se reemplaza por el evento en cuestión cuando se lo llame
    evitarSubmit(event) {
        event.preventDefault();
    }

    // obtener el valor ingresado por el usuario en el campo input, actualizando el estado interno del componente con setState()
    guardarCambios(event) {
        this.setState({
            valor: event.target.value
        },
            () => this.filtrarContenido(this.state.valor)
        );
    }

    filtrarContenido(filtro) {
        let peliculasFiltradas = this.state.peliculasCargadas.filter(pelicula => pelicula.title.toLowerCase().includes(filtro))
    
        this.setState({
            peliculas: peliculasFiltradas
        })
    }

    render() {
        let todasPeliculas = this.state.peliculas.map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title + idx} pelicula={unaPelicula} />)

        return (
            <React.Fragment>
                <section className="contenido-filtro">
                    <form onSubmit={(event) => this.evitarSubmit(event)}>
                        <input type='text' onChange={(event) => this.guardarCambios(event)} value={this.state.valor} className='input-filtro' placeholder="Filter results"/>
                    </form>
                </section>
                <section className="todas-vistas">
                    <h2 className="titulo-vistas">Popular Films</h2>
                    <div className="grupo-vistas">
                        {todasPeliculas}
                    </div>
                    <div className="seccion-boton">
                        <button onClick={() => this.traerMas()} className='boton-traer'>Get More</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default VerPeliculasPopulares;