import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HOME/Home/Home';
import Navbar from './Components/HOME/Navbar/Navbar';
import Footer from './Components/HOME/Footer/Footer';
import About from './Components/Pages/About/About';
import Services from './Components/Pages/Services/Services';
import Contact from './Components/Pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/services' element={<Services></Services>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
