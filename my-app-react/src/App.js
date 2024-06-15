//import logo from './logo.svg';
import './App.css';
import HelloWord from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form'

function App() {
  //podemos trabalhar também com JS, além de HTML, CSS, etc.
  return (
    <div className="App">
      <HelloWord/>
      <Evento/>
      <Form/>
    </div>
  );
}

export default App;