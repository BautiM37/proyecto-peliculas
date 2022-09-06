import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';

function App() {
  return (
    <section>
      <div className="App">
        <Header />
        <section className='contenido'>
          <Buscador />
          <h2>Películas Populares</h2>
          <h2>Películas en Cartelera</h2>
        </section>
      </div>
      <Footer />
    </section>
  );
}

export default App;