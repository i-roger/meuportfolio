import { Routes, Route, Link } from "react-router-dom";

import './components/modal/modalstyle.scss';

import Header from './components/header/header.js';
import './components/header/headerstyle.scss';

import Sobremim from './components/pages/sobremim/sobremim.js';

import Cards from './components/pages/cards/Cards.js';
import './components/pages/cards/CardStyle.scss';

import Footer from './components/footer/footer.js';
import './components/footer/footerstyle.scss';

import './App.scss';

function App() {
  return ( 
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/sobremim" element={<Sobremim/>}/>
      </Routes>
      <Footer/>
    </div> 
  );
}

export default App;
