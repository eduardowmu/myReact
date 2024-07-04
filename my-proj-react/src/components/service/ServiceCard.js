import { BsFillTrashFill } from 'react-icons/bs'
import styles from '../project/ProjectCard.module.css'

function ServiceCard({ id, name, cost, description, key, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        /**
         * removendo o serviço e o respectivo custo
         * para atualizar o custo total de serviços
         */
        handleRemove(id, cost)
    }

    return(
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/>
                    Remove
                </button>
            </div>
        </div>
    )
}

export default ServiceCard