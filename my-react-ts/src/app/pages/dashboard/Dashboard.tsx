import { useContext, useRef } from "react"
import { Link } from "react-router-dom"
import { UsuarioLogadoContext } from "../../shared/contexts"

export const Dashboard = () => {
    const counterRef = useRef(0)

    
    /**
     * compartilhando o UsuarioLogadoContext
     * criado em UsuarioLogado
     */
    // const usuarioLogadoContext = useContext(UsuarioLogadoContext)

    // também podemos compartilhar apenas o atributo
    const { nomeDoUsuario } = useContext(UsuarioLogadoContext)

    return(
        <div>
            <p>Dashboard</p>
            {/* consumindo o contexto usuarioLogadoContext*/}
            <p>{nomeDoUsuario}</p>
            <p>Contador: {counterRef.current}</p>
            <button onClick={() => counterRef.current++}>Somar</button>
            <button onClick={() => console.log(counterRef.current)}>Log</button>
            <Link to='/login'>Login</Link>
        </div>
    )
}