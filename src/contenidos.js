"POPULARES"
import React, {Component} from "react";
import './peliculasPopulares.css'
import CadaPelicula from "../CadaPelicula/CadaPelicula";

class PeliculasPopulares extends Component{
    constructor(){
        super()
        this.state={
            peliculas:[]
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results

                });
            })
            .catch()
    }

    render(){
        return(
            <div>
                <section className="tarjetas-varias">
                    {
                        this.state.peliculas.map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title+idx}
                        pelicula={unaPelicula}/>)
                        
                    }
                </section>
            </div>
        )
    }
}   

export default PeliculasPopulares;

"CARTELERA"
import React, {Component} from "react";
import './peliculasCartel.css'
import CadaPelicula from "../CadaPelicula/CadaPelicula";

class PeliculasCartel extends Component{
    constructor(){
        super()
        this.state={
            peliculas:[]
        };
    }

    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=51c5421e7c7f38a93e388ad6d2405b1f&language=en-US&page=1')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    peliculas: data.results

                });
            })
            .catch()
    }

    render(){
        return(
            <div>
                <section className="tarjetas-varias">
                    {
                        this.state.peliculas.map((unaPelicula, idx) => <CadaPelicula key={unaPelicula.title+idx}
                        pelicula={unaPelicula}/>)
                        
                    }
                </section>
            </div>
        )
    }
}   

export default PeliculasCartel;

"CADA PELI"

import React, {Component} from 'react';
import './cadaPelicula.css'

class CadaPelicula extends Component{
    constructor(props){
        super(props)
        this.state={
           verMas: false,
           claseVerMas: 'esconder',
           textoVerMas: 'Ver Más'
        }
    }

    verMasVerMenos(){
        if (!this.state.verMas) {
            this.setState({
                textoVerMas: "Ver Menos",
                verMas: true,
                claseVerMas: 'mostrar'
            })
        } else {
            this.setState({
                textoVerMas: 'Ver Más',
                verMas: false,
                claseVerMas: 'esconder'
            })
        }
    }

    render(){
        return(
             <article className='tarjeta-pelicula'>
                <img src={'https://image.tmdb.org/t/p/w342/' + this.props.pelicula.poster_path} alt="" className='imagen-pelicula'/>
                <h2 className='titulo'>{this.props.pelicula.title}</h2>
                <button className='boton-ver-mas' onClick={() => this.verMasVerMenos()}>{this.state.textoVerMas}</button>
                <div className={this.state.claseVerMas}>
                    <p className='descripcion'>{this.props.pelicula.overview}</p>
                </div>
            </article>

        )
    }

}

export default CadaPelicula