import { useState } from "react"

export const Dashboard = () => {
    // lista de strings
    const [list, setList] = useState<string[]>(['Teste', 'Teste', 'Teste'])
    return(
        <div>
            <p>List Dashboard</p>
            <input
                
            />
            <ul>
                {list.map((value, index) => {
                    return <li>{value} {index}</li>
                })}
            </ul>
        </div>
    )
}