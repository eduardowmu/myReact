import Item from './Item'

function List() {
    /*aplicando fragment, no lugar da tag pai <div> que faziamos
    no modo comvencional*/
    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item/>
                <Item marca="Toyota" lancamento={2024}/>
            </ul>
        </>
    )
}

export default List;