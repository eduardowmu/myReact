import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject() {
    return(
        <div className={styles.newproject_container}>
            <h1>Create new Project</h1>
            <p>
                Create your Project para 
                depois adicionar os serviços
            </p>
            <ProjectForm btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject