//import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  //podemos trabalhar também com JS, além de HTML, CSS, etc.
  const nome = "Joao"
  return (
    <div className="App">
      <HelloWord/>
      <SayMyName nome="Eduardo"/>
      <Pessoa nome="Eduardo" idade="40" profissao="Programador" 
                        foto="https://via.placeholder.com/150"/>
      <SayMyName nome="Camila"/>
      <SayMyName nome={nome}/>
    </div>
  );
}

export default App;