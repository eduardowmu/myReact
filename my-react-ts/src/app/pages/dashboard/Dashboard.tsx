import { useRef } from "react"
import { Link } from "react-router-dom"

export const Dashboard = () => {
    /**Inicializando com um objeto, com um
     * atributo. Veremos que não será necessário
     * fazer um SET, como fazíamos no useState
    */
    const counterRef = useRef({ counter: 0 })

    return(
        <div>
            <p>Dashboard</p>
            <p>{counterRef.current.counter}</p>
            <button onClick={() => counterRef.current.counter++}>Somar</button>
            <button onClick={() => console.log(counterRef.current.counter)}>Log</button>
            <Link to='/login'>Login</Link>
        </div>
    )
}