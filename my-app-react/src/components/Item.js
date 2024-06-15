import PropTypes from 'prop-types';

function Item({marca, lancamento}) {
    return(
        <>
            <li>{marca} - {lancamento}</li>
        </>
    )
}

/*Repare que isso parece como criação de objeto em JS*/
Item.propTypes = {
    /*mesmo que joguemos um tipo numero em uma string
    veremos que na página irá exibir normalmente sem
    erro, mas no console será escrito um erro a nível
    de programação*/
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired
}

Item.defaultProps = {
    marca: "Honda",
    lancamento: 2016
}

export default Item;