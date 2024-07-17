import { useCallback, useState } from "react"

export const Dashboard = () => {
    // lista de strings
    const [list, setList] = useState<string[]>(['Teste', 'Teste', 'Teste'])
    
    /*função que ir´pa tratar algum tipo um evento de algum elemento*/
    const handleInputKeyDown: 
        React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter') {
            //se não tiver nada no campo, cancela
            if(e.currentTarget.value.trim().length === 0) {return}
            
            /*uma forma de pegar a lista inicial com um novo
            valor adicionado*/
            setList([...list, e.currentTarget.value])

            /*Outra forma também de se fazer com adição de 
            conteúdo na lista*/
            //const value = e.currentTarget.value
            // setList((oldList) => {
            //     return [...oldList, value]
            // })
        }   
    }, [])

    return(
        <div>
            <p>List Dashboard</p>
            <input onKeyDown={handleInputKeyDown}/>
            <ul>
                {list.map((value, index) => {
                    return <li>{value} {index}</li>
                })}
            </ul>
        </div>
    )
}