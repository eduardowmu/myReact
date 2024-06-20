import styles from './Container.module.css'

/**
 * Aqui poderemos alterar classes que vão fazer
 * com que possamos mudar a disposição dos nossos
 * itens dentro do container
 */
function Container(props) {
    /**
     * Estamos dizendo que os elementos filhos que
     * estão encapsulados dentro do componente que
     * criamos chamado <Container></Container>, dentro
     * de App.js.
     * 
     * O customClass irá nos garantir que tenha o minimo
     * de espaço para os conteúdos do body da página.
     */
    return(
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container