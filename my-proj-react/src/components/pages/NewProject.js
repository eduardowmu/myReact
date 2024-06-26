import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
import { useNavigate } from 'react-router-dom'

function NewProject() {
    /**
     * este hook irá nos permitir criar redirects
     * nas páginas do nosso projeto.
     * https://stackoverflow.com/questions/62082869/uncaught-typeerror-history-push-is-not-a-function-error-occurs
     */
    const history = useNavigate()

    function createPost(project) {
        //inicialização de parametros
        project.cost = 0
        project.services = []

        fetch('http://localhost:5000/projects', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //será feita um redirect futuramente
                history('/projects', 
                    {message: 'Project Created!'}
                )
            })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.newproject_container}>
            <h1>Create new Project</h1>
            <p>
                Create your Project para 
                depois adicionar os serviços
            </p>
            <ProjectForm handleSubmit={createPost} 
                btnText='Criar Projeto'/>
        </div>
    )
}

export default NewProject