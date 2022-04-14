import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Company from './components/pages/Company';
import Projects from './components/pages/Projects';
import NewProject from './components/pages/Newproject';


import Container from './components/layouts/Container';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
      <Router>
        <Navbar/>
          <Container customClass="min-height"> {/* Container fora dos Routes */ }
          <Routes>
              <Route exact path="/" element={<Home/>}/> {/* Para a pagina inicial colocamos apenas / com  o "exact"*/}
              <Route path="Company" element={<Company/>}/>
              <Route path="Contato" element={<Contato/>}/>
              <Route path='Projects' element={<Projects/>}/>
              <Route path='newproject' element={<NewProject/>}/>
          </Routes>
          </Container>
          <Footer/>
         
      </Router>
  )
}

export default App