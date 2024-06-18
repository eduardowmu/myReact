//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import YourName from './components/YourName';
import Welcome from './components/Welcome';

//podemos trabalhar também com JS, além de HTML, CSS, etc.
function App() {
  //useState, definindo no componente pai
  const [name, setName] = useState()

  return (
    <div className="App">
      <h1>State Lift Class</h1>
      <YourName setName={setName}/>
      <p>{name}</p>
      <Welcome name={name}/>
    </div>
  );
}

export default App;