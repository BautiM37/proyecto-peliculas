import React, { Component } from "react";
import CadaSerie from "../../components/CadaSerie/CadaSerie";
import './VerSeries.css';

class VerSeries extends Component {
    constructor() {
        super()
        this.state = {
            series: [],
            seriesCargadas: [],
            page: 1
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

    render() {
        let todasSeries = this.state.series.map((unaSerie, idy) => <CadaSerie key={unaSerie.name + idy} serie={unaSerie} />)

        return (
            <section className="todas-vistas">
                <h2 className="titulo-vistas">TV Shows</h2>
                <div className="grupo-vistas">
                    {todasSeries}
                </div>
                <div className="seccion-boton">
                    <button onClick={() => this.traerMas()} className='boton-traer'>Get More</button>
                </div>
            </section>
        )
    }
}

export default VerSeries;