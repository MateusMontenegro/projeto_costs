import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkBottom from '../layouts/Linkbottom';
const Home = () => {
    return ( 
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerar seus projetos agora mesmo!</p>
            <LinkBottom to='newproject' text='Criar Projeto'/>
            <img src={savings} alt='Costs'/>
        </section>
     );
}
 
export default Home;    