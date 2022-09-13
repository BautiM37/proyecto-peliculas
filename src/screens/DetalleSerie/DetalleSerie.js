import React, { Component } from "react";
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.match.params.id,
            serie: []
        }
    }
    componentDidMount(){
        fetch("https://api.themoviedb.org/3/tv/" + this.state.id + "?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US")
        .then(res => res.json())
            .then(data => {
                this.setState({
                    serie: data
                });
            })
            .catch()
    }

    render() {
        return (
            <section className="detalle-serie">
                <img alt='' src={'https://image.tmdb.org/t/p/w1280/' + this.state.serie.backdrop_path} className='imagen-detalle-serie'/>
                <h2 className="titulo-detalle-serie">Detalle "{this.state.serie.name}"</h2>
            </section>
        )
    }
}

export default DetalleSerie;