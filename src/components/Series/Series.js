import React, { Component } from "react";
import './Series.css';
import CadaSerie from "../CadaSerie/CadaSerie";
import { Link } from 'react-router-dom';

class Series extends Component {
    constructor() {
        super()
        this.state = {
            series: [],
            cantMostrados: 6,
            seriesCargadas: []
        }
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    series: data.results,
                    seriesCargadas: data.results
                });
            })
            .catch()
    }

    cargarMas() {
        this.setState({
            cantMostrados: this.state.cantMostrados >= this.state.series.length ?
                this.state.cantMostrados : this.state.cantMostrados + 6
        })
    }

    cargarMenos() {
        this.setState({
            cantMostrados: this.state.cantMostrados > 6 ?
                this.state.cantMostrados - 6 : this.state.cantMostrados
        })
    }

    render() {
        let masSeries = this.state.series.slice((this.state.cantMostrados - 6), this.state.cantMostrados).map((unaSerie, idy) => <CadaSerie key={unaSerie.name + idy} serie={unaSerie} />)

        return (
            <React.Fragment>
                {
                    this.state.series.length === 0 ?
                        <img src="/loader.gif" alt="loading content" />
                        :
                        <section className='contenedor-peliculas'>

                            <i onClick={() => this.cargarMenos()} className="fas fa-solid fa-chevron-left flechas"></i>
                            {masSeries}
                            {this.state.cantMostrados >= 19 ? <Link to='/tvshows'><button className='ver-todas-series'>See all</button></Link> : <i onClick={() => this.cargarMas()} className="fas fa-solid fa-chevron-right flechas"></i>}
                            <Link to='/tvshows'><button className='ver-todas-phone'>See all</button></Link>
                        </section>
                }
            </React.Fragment>
        )
    }
}

export default Series;