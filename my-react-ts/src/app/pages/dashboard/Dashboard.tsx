import { useCallback, useState } from "react"

/**
 * Esta interface irá representar um item
 * da nossa lista
 */
interface ListItem {
    title: string;
    isSelected: boolean;
}

export const Dashboard = () => {
    // lista de strings
    const [list, setList] = useState<ListItem[]>([])
    
    /*função que ir´pa tratar algum tipo um evento de algum elemento*/
    const handleInputKeyDown: 
        React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
        if(e.key === 'Enter') {
            //se não tiver nada no campo, cancela
            if(e.currentTarget.value.trim().length === 0) {return}
            
            /*uma forma de pegar a lista inicial com um novo
            valor adicionado*/
            // setList([...list, e.currentTarget.value])

            /*Outra forma também de se fazer com adição de 
            conteúdo na lista*/
            const value = e.currentTarget.value

            setList((oldList) => {
                /**
                 * este metodo some() espera um predicate, caso o title
                 * for identico ao valor do campo preenchido, não será
                 * inserido na lista, para não ter repetição.
                 */
                if(oldList.some((listItem) => listItem.title === value)) return oldList

                return [...oldList,
                    { 
                        title: value,
                        isSelected: false
                    }
                ]
            })
        }   
    }, [])

    return(
        <div>
            <p>List Dashboard</p>
            <input onKeyDown={handleInputKeyDown}/>
            <p>{list.filter((listItem) => listItem.isSelected).length}</p>
            <ul>
                {list.map((listItem, index) => {
                    return <>
                        <li>
                            <input 
                                type="checkbox"
                                // isso irá garantir que a checkbox mantenha o valor atualizado
                                //checked={listItem.isSelected}
                                onChange={() => {
                                    setList(oldList => {
                                        return oldList.map(oldListItem => {
                                            const newIsSelected = oldListItem.title === listItem.title
                                                                ? !oldListItem.isSelected 
                                                                : oldListItem.isSelected
                                            
                                            return {
                                                ...oldListItem,
                                                isSelected: newIsSelected
                                            }
                                        })
                                    })
                                }}/>
                                {listItem.title} {index}
                        </li>
                    </>
                })}
            </ul>
        </div>
    )
}