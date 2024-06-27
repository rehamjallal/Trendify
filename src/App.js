import { Routes, Route, } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Store from './Components/Store';
import Women from './Components/WomenClothes';
import Man from './Components/ManClothes';
import Accessories from './Components/Accessories';
import Electronics from './Components/Electronics';
import Sign from './Components/Sign up';
// import About from './Components/About';
import Footer from './Components/Footer';
import Features from './Components/Features';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/women' element={<Women />} />
        <Route path='/man' element={<Man />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/electronics' element={<Electronics />} />
        <Route path='/Sign' element={<Sign />} />
        <Route path='/Store' element={<Store />} />
        {/* <Route path='/About' element={<About />} /> */}
        <Route path='/features' element={<Features />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/footer' element={<Footer />} />
      </Routes></>
)}
export default App;
