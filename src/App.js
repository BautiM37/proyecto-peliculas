import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Favoritos from './screens/Favoritos/Favoritos';
import Home from './screens/Home/Home';
import NotFound from './screens/NotFound/NotFound';
import DetallePelicula from './screens/DetallePelicula/DetallePelicula';
import VerPeliculasPopulares from './screens/VerPeliculasPopulares/VerPeliculasPopulares';
import VerPeliculasCartel from './screens/VerPeliculasCartel/VerPeliculasCartel';
import DetalleSerie from './screens/DetalleSerie/DetalleSerie';
import VerSeries from './screens/VerSeries/VerSeries';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <img alt='' src='/logo.png' className='imagen-logo-phone' />
      <Header />
      <Switch>
        <Route path='/' exact={true} component={Home} />
        <Route path='/favourites' component={Favoritos} />
        <Route path='/populars' component={VerPeliculasPopulares} />
        <Route path='/newreleases' component={VerPeliculasCartel} />
        <Route path='/tvshows' component={VerSeries} />
        <Route path='/film/id/:id' component={DetallePelicula} />
        <Route path='/show/id/:id' component={DetalleSerie} />
        <Route path='' component={NotFound} />
      </Switch>

    </React.Fragment>
  );
}

export default App;