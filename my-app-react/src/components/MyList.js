function MyList({ itens }) {
    return(
        <>
            <h3>My List of frontend tools</h3>
            {itens.length > 0 ? (
                itens.map((item, index) => (
                    <p key={index}>{item}</p>
                //se não houver itens
                ))) : (<p>Não há itens na lista</p>)
            }
        </>
    )
}

export default MyList