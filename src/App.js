import './App.css';
import Header from './components/Header/Header';
import PeliculasPopulares from './components/PeliculasPopulares/PeliculasPopulares';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <PeliculasPopulares/>
      </header>
    </div>
  );
}

export default App;