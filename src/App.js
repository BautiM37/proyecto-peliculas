import './App.css';
import Header from './components/Header/Header';
import PeliculasCartel from './components/PeliculasCartel/PeliculasCartel';
import PeliculasPopulares from './components/PeliculasPopulares/PeliculasPopulares';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <h2>Peliculas Populares</h2>
        <PeliculasPopulares/>
        <h2>Peliculas en Cartel</h2>
        <PeliculasCartel/>
      </header>
    </div>
  );
}

export default App;