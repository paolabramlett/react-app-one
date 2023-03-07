import './App.css';
import img from './img.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Hola, soy Paola
        </h1>
        <img src={img} className="img-app" alt="app-img" />
     
        <p>
          Bienvenid@ a mi app de React
        </p>
      
      </header>
    </div>
  );
}

export default App;
