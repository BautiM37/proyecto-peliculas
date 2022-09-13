import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import Favoritos from './screens/Favoritos/Favoritos';
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import VerPeliculasPopulares from './screens/VerPeliculasPopulares/VerPeliculasPopulares';
import VerPeliculasCartel from './screens/VerPeliculasCartel/VerPeliculasCartel';
import DetalleSerie from './screens/DetalleSerie/DetalleSerie';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Buscador />
      <Switch>
        <Route path='/' exact={true} component={ Home }/>
        <Route path='/favoritos' component={ Favoritos } />
        <Route path='/populares' component={ VerPeliculasPopulares }/>
        <Route path='/cartelera' component={ VerPeliculasCartel }/>
        <Route path='/pelicula/id/:id' component={ DetallePelicula }/>
        <Route path='/serie/id/:id' component={ DetalleSerie }/>
        <Route path='' component={ NotFound } />
      </Switch>
      <Footer />

    </React.Fragment>
  );
}

export default App;