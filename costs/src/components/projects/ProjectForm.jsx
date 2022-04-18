import { useEffect, useState } from 'react';
import styles from './Projectform.module.css'
import Input from '../form/input';
import Select from '../form/Select';
import SubmitButtom from '../form/SubmitButton';
const ProjectForm = ({btntext, handleSubimit, projectData}) => {
    const[categories, setCategories] = useState([])
    const[project, setProject] = useState(projectData || {})
    useEffect(() =>{
        fetch("http://localhost:5000/categories", {
            method:"GET",
            headers: {
                'Content-Type': 'aplicattion/json',
            },
    
        })
        .then((resp)=> resp.json())
        .then((data)=> {
            setCategories(data)
        }) .catch((err)=> console.log(err))
    },[])
    
    const submit = (e) =>{
        e.preventDefault()
        handleSubimit(project)

    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})

    }

    return ( 
        <form  onSubmit={submit} className={styles.form}>
            <Input type='text' 
            text='Nome do projeto'
             name='name' 
             placeholder='Insira o nome do projeto'
             handleOnChange={handleChange}
             />
             <Input type='number' 
            text='Orçamento do projeto'
             name='budget' 
             placeholder='Insira o Orçamento total'
             handleOnChange={handleChange}/>
            <Select name='category_id' text='selecione uma categoria' options={categories}/>
            <SubmitButtom text={btntext}/>
        </form>
     );
}
 
export default ProjectForm;