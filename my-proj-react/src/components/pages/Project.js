import styles from './Project.module.css'
import { json, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import ServiceForm from '../service/ServiceForm'
import ServiceCard from '../service/ServiceCard'
import { parse, v4 as uuidv4 } from 'uuid'

function Project() {
    const { id } = useParams()

    const [ project, setProject ] = useState([])

    const [ services, setServices ] = useState([])

    const [ showProjectForm, setShowProjectForm ] = useState(false)

    const [ showServiceForm, setShowServiceForm ] = useState(false)

    const [ mensagem, setMensagem ] = useState()

    const [ type, setType ] = useState()

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(resp => resp.json())
            .then((data) => {
                setProject(data)
                //inserindo os serviços criados
                setServices(data.services)
            })
            .catch(err => console.log(err))
        }, 5000)
    }, [id])

    function editPost(project) {
        //inicializar a mensagem para poder sempre atualizar 
        //em novos eventos
        setMensagem('')

        //budget validation: implementação futura
        if(project.budget < project.cost) {
            setMensagem('O orçamento não pode ser menor que o custo')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(resp => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            //menssagem
            setMensagem('Projeto Atualizado')
            setType('success')
        })
        .catch(err => console.log(err))
    }

    function createService() {
        setMensagem('')
        //validação de serviços
        //last service
        const lastService = project.services[project.services.length - 1]

        //chave unica
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + 
                        parseFloat(lastServiceCost)

        //maximum value validation
        if(newCost > parseFloat(project.budget)) {
            setMensagem('Orçamento ultrapassado. Verifique o valor do serviço')
            setType('error')
            //removendo serviço inválido
            project.services.pop()
            return false
        }

        //ad service cost to serviceCost
        project.cost = newCost

        //update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            //exibir os serviços
            //console.log(data)
            setShowServiceForm(false)
        })
        .catch(err => console.log(err))
    }

    function removeService(id, cost) {
        const servicesUpdated = project.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = servicesUpdated

        /**
         * atualizando o custo do projeto com a remoção do
         * novo serviço
         */
        projectUpdated.cost = parseFloat(projectUpdated.cost)
                             - parseFloat(cost)

        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated)
        }).then((resp) => resp.json())
        .then((data) => {
            setProject(projectUpdated)
            setServices(servicesUpdated)
            setMensagem('Service deleted!')
        })
        .catch(err => console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return(
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass='column'>
                        {mensagem && <Message type={type} msg={mensagem}/>}
                        <div className={styles.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={styles.btn} 
                                onClick={toggleProjectForm}>
                                { !showProjectForm ? 
                                    'Edit Procjet' : 'Close'
                                }
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Cateogira: </span>
                                        {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span>
                                        R${project.budget}
                                    </p>
                                    <p>
                                        <span>Total Utilizado: </span>
                                        R${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm handleSubmit={editPost} 
                                        btnText='Concluir Edição'
                                        projectData={project}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toggleServiceForm}>
                                {!showServiceForm ? 'Edit Project' : 'Close'}
                            </button>
                            <div className={styles.project_info}>
                                {showServiceForm && 
                                    <ServiceForm 
                                        handleSubmit={createService}
                                        btnText='Adicionar serviço'
                                        projectData={project}/>
                                }
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass='start'>
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.key}
                                        handleRemove={removeService}/>
                                ))
                            }
                            {services.length === 0 && 
                                <p>Não há serviços cadastrados</p>
                            }
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading/>
            )}
        </>
    )
}

export default Project