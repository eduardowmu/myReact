import Item from './Item'

function List() {
    /*aplicando fragment, no lugar da tag pai <div> que faziamos
    no modo comvencional*/
    return(
        <>
            <h1>My List</h1>
            <ul>
                <Item marca="Honda"/>
                <Item marca="Toyota"/>
            </ul>
        </>
    )
}

export default List;