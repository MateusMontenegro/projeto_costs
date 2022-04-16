import styles from './NewProject.module.css'
import ProjectForm from '../projects/ProjectForm';
const NewProject = () => {
    return ( 
        <div className={styles.newproject_container}>
            <h1> Criar Projeto</h1>
            <p> Crie seus projetos para depois adicionar seus serviços</p>
            <ProjectForm btntext='Criar projeto'/>
        </div>
     );
}
 
export default NewProject;