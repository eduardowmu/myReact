import { useCallback, useEffect, useState } from "react"
import { ListTask, TarefasService } from "../../shared/services/api/tarefas/TarefasService"
import { ApiException } from "../../shared/services/api/ApiException"

/**
 * 
 * @returns 
 * A interface foi retirada pois foi incluída em
 * TarefasService.ts
 */

export const Dashboard = () => {
    // lista de strings
    const [list, setList] = useState<ListTask[]>([])

    /**
     * Chamando nossa service
     */
    useEffect(() => {
        TarefasService.getAll()
            .then((result) => {
                if(result instanceof ApiException) {
                    console.log(result.message)
                } else {
                    setList(result)
                }
            })
    }, [])
    
    /*função que irá tratar algum tipo um evento de algum elemento*/
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
            
            /**
             * este metodo some() espera um predicate, caso o title
             * for identico ao valor do campo preenchido, não será
             * inserido na lista, para não ter repetição.
             */
            if(list.some((listItem) => listItem.title === value)) return

            /**
             * Chamando o serviço de criação da tarefa
             */
            TarefasService.post({
                title: value,
                status: false
            }).then((result) => {
                if(result instanceof ApiException) {
                    console.log(result.message)
                } else {
                    setList((oldList) => {
                        return [...oldList, 
                            result
                        ]
                    })
                }
            })
        }   
    }, [list])

    return(
        <div>
            <p>List Dashboard</p>
            <input onKeyDown={handleInputKeyDown}/>
            <p>{list.filter((listItem) => listItem.status).length}</p>
            <ul>
                {list.map((listItem, index) => {
                    return <>
                        <li key={listItem.id}>
                            <input 
                                type="checkbox"
                                // isso irá garantir que a checkbox mantenha o valor 
                                //atualizado checked={listItem.isSelected}
                                onChange={() => {
                                    setList(oldList => {
                                        return oldList.map(oldListItem => {
                                            const newIsSelected = oldListItem.title === 
                                                                listItem.title
                                                                ? !oldListItem.status 
                                                                : oldListItem.status
                                            
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