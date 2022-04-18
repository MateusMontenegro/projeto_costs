import styles from './NewProject.module.css'
import  { useNavigate} from 'react-router-dom'
import ProjectForm from '../projects/ProjectForm';
const NewProject = () => {

    const history = history()

    function createPost(project){

        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch('http:/localhost:5000/projects',{
            method:'POST',
            headers: {
                'Content-Type' : 'aplicattion/json',
            },
            body: JSON.stringify(project)
        }).then((resp => resp.json())
        .then((data)=>{
            console.log(data)
            //redirect
        })
        .catch(err => console.log(err)),
        )}
    return ( 
        <div className={styles.newproject_container}>
            <h1> Criar Projeto</h1>
            <p> Crie seus projetos para depois adicionar seus serviços</p>
            <ProjectForm btntext='Criar projeto' handleSubimit={createPost}/>
        </div>
     );
}
 
export default NewProject;