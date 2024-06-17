//import logo from './logo.svg';
import './App.css';
import MyList from './components/MyList';
//import HelloWord from './components/HelloWorld';
//import SayMyName from './components/SayMyName';
//import Pessoa from './components/Pessoa';
//import List from './components/List';
//import Evento from './components/Evento';
//import Form from './components/Form'
//import Condicao from './components/Condicao';

//podemos trabalhar também com JS, além de HTML, CSS, etc.
function App() {
  const myItens = ['React', 'Vue', 'Angular']
  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <MyList itens={myItens}/>
      <MyList itens={[]}/>
    </div>
  );
}

export default App;