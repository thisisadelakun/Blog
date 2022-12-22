import './App.css';
// import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blog from './Components/Blog';
import About from './Components/About';
// import Contact from './Components/Contact';
import Yvonnedb from './Components/Yvonnedb';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
        <Routes> 
          <Route index element={<Main/>} />
          <Route path='Blog' element={<Blog/>} />
          <Route path='About' element={<About/>} />
          {/* <Route path='Contact' element={<Contact/>} /> */}
          <Route path='Yvonnedb' element={<Yvonnedb/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
