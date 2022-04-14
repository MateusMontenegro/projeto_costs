import {Link} from 'react-router-dom'
import Container from './Container' 
import style from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

const Navbar = () => {
    return ( 
        <nav className={style.navbar}>
         <Container>
             <Link to='/'> 
             <img src={logo} alt='costs'/>
             </Link>
             <ul className={style.list}>
                 <li className={style.item}>
                 <Link to='/'> Home</Link>
                 </li>
                 <li className={style.item}>
                 <Link to='/Projects'> Projects</Link>
                 </li>
                 <li className={style.item}>
                 <Link to='/Contato'> Contact</Link>
                 </li>
                 <li className={style.item}>
                 <Link to='/Company'> Company</Link>
                 </li>
    
             </ul>
        </Container>
      </nav>
     );
}
 
export default Navbar;