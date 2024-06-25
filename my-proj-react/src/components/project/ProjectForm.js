import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useState, useEffect } from 'react'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    //request para a API
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        //console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value})
        console.log(project)
    }

    function handleCategory(e) {
        setProject({ ...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
        console.log(project)
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text='Project name' 
                name='name'
                placeholder='Insira o nome do projeto'
                handleOnchange={handleChange}
                value={project.name ? project.name : ''}/>
            
            <Input 
                type="number" 
                text='Orçamento total' 
                name='budget'
                placeholder='Insira o nome do projeto'
                handleOnchange={handleChange}
                value={project.budget ? project.budget : ''}/>

            <Select 
                name='category_id' 
                text='Selecione a categoria' 
                options={categories}
                handleOnchange={handleCategory}
                value={project.category ? project.category.id : ''}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm