import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import PeliculasPopulares from './components/PeliculasPopulares/PeliculasPopulares';

function App() {
  return (
    <section>
      <div className="App">
        <Header />
        <section className='pagina'>
          <Buscador />
          <section className='contenido'>
            <div className='seccion1'>
              <h2>Películas Populares</h2>
              <PeliculasPopulares/>
            </div>
            {/* <div className='seccion2'>
              <h2>Películas en Cartelera</h2>
            </div> */}
          </section>
          
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default App;