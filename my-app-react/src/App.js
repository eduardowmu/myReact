//import logo from './logo.svg';
import './App.css';

function App() {
  //podemos trabalhar também com JS, além de HTML, CSS, etc.
  const name = 'Eduardo'

  const imageURL = "https://via.placeholder.com/150"

  function calculaIdade() {
    const a = 1984
    let b = new Date().getFullYear()
    return b - a
  }

  return (
    <div className="App">
      <h1>Hola que tal</h1>
      <p>Este és mi primero projecto en React</p>
      <p>Mi nombre é {name}</p>
      <p>Tenho {calculaIdade()} anos</p>
      <img src={imageURL} alt=""/>
    </div>
  );
}

export default App;
