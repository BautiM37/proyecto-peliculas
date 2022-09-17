import React, { Component } from "react";
import CadaSerie from "../../components/CadaSerie/CadaSerie";
import './VerSeries.css';

class VerSeries extends Component {
    constructor() {
        super()
        this.state = {
            series: [],
            seriesCargadas: [],
            page: 1,
            valor: ''
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=' + this.state.page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    series: data.results,
                    seriesCargadas: data.results,
                    page: this.state.page + 1
                });
            })
            .catch()
    }

    traerMas() {
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=' + this.state.page)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    series: this.state.series.concat(data.results),
                    seriesCargadas: this.state.seriesCargadas.concat(data.results),
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
        let seriesFiltradas = this.state.seriesCargadas.filter(serie => serie.name.toLowerCase().includes(filtro))

        this.setState({
            series: seriesFiltradas
        })
    }

    render() {
        let todasSeries = this.state.series.map((unaSerie, idy) => <CadaSerie key={unaSerie.name + idy} serie={unaSerie} />)

        return (
            <React.Fragment>
                <section className="contenido-filtro">
                    <form onSubmit={(event) => this.evitarSubmit(event)} className='formulario-filtro'>
                        <input type='text' onChange={(event) => this.guardarCambios(event)} value={this.state.valor} className='input-filtro' placeholder="Filter results"/>
                    </form>
                </section>
                <section className="todas-vistas">
                    <h2 className="titulo-vistas">TV Shows</h2>
                    <div className="grupo-vistas">
                        {todasSeries}
                    </div>
                    <div className="seccion-boton">
                        <button onClick={() => this.traerMas()} className='boton-traer'>Get More</button>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default VerSeries;