import './App.css';
/**
 * about changes from Switch to Routes
 * https://stackoverflow.com/questions/63124161/
 * attempted-import-error-switch-is-not-exported-from-react-router-dom
*/
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//podemos trabalhar também com JS, além de HTML, CSS, etc.
function App() {
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;