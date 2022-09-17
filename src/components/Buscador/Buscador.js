import React, { Component } from "react";
import './Buscador.css';

class Buscador extends Component {
    constructor() {
        super()
        this.state = {
            valor: ''

        };
    };
    noRecarga(e) {
        e.preventDefault();

      
    }
    guardaDatos(e) {
        this.setState({ valor: e.target.value },
            ()=> this.props.busqueda(this.state.valor)
            );
    };

    render() {
        return (
            <section className='buscador'>
                <form onSubmit={(e) => this.noRecarga(e)}>
                    <input className='placeholder' type='text' placeholder='!Encontrá lo que estes buscando!' onChange={(e) => this.guardaDatos(e)} value={this.state.valor} />
                   
                </form>
            </section>
        )
    }
}

export default Buscador;