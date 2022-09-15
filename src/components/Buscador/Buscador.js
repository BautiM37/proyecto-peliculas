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

        this.props.buscar();
    }
    guardaDatos(e) {
        this.setState({ valor: e.target.value });
    };

    render() {
        return (
            <section className='buscador'>
                <form onSubmit={(e) => this.noRecarga(e)}>
                    <input className='placeholder' type='text' placeholder='!Encontrá lo que estes buscando!' onChange={(e) => this.guardaDatos(e)} value={this.state.valor} />
                    <input className='boton' type='submit' onClick={(e) => this.noRecarga(e)} />
                </form>
            </section>
        )
    }
}

export default Buscador;