import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';


import Container from './components/layouts/Container';

function App() {
  return (
      <Router>
        <div>
          <Link to='/'> Home</Link>
          <Link to='/Contato'> Contact</Link>
          <Link to='/Company'> Company</Link>
          <Link to='/NewProject'> NewProject</Link>
        </div>
          <Container customClass="min-height"> {/* Container fora dos Routes */ }
          <Routes>
              <Route exact path="/" element={<Home/>}/> {/* Para a pagina inicial colocamos apenas / com  o "exact"*/}
              <Route path="Company" element={<Company/>}/>
              <Route path="Contato" element={<Contato/>}/>
              <Route path='NewProject' element={ <NewProject />}/>
          </Routes>
          </Container>
          <p>Footer</p>
         
      </Router>
  )
}

export default App