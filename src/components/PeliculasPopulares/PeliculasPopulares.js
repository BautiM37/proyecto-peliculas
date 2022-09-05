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
                <section>
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