import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Magazine from './Components/Magazine';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route index element={<Home/>} />
          <Route path='Magazine' element={<Magazine/>} />
          <Route path='About' element={<About/>} />
          <Route path='Contact' element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
