import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'
import { useState, useEffect } from 'react'

function ProjectForm({ btnText }) {
    const [categories, setCategories] = useState([])
    //request para a API
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <form className={styles.form}>
            <Input 
                type="text" 
                text='Project name' 
                name='name'
                placeholder='Insira o nome do projeto'/>
            
            <Input 
                type="number" 
                text='Orçamento total' 
                name='budget'
                placeholder='Insira o nome do projeto'/>

            <Select 
                name='category_id' 
                text='Selecione a categoria' 
                options={categories}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default ProjectForm