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