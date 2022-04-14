import styles from './Linkbottom.module.css'
import {Link} from 'react-router-dom'


const LinkBottom = ({to, text}) => {
    return ( 
        <Link className={styles.btn} to={to}>
        {text}
        </Link>
     );
}
 
export default LinkBottom ;