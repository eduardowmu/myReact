import { useState } from "react"
import { useEffect } from "react"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        if(window.confirm('Are tou there?')) {
            console.log('YES')
        } else {
            console.log('NO')
        }
    /**Como ainda não temos nenhuma dependência,
     * então o segundo parametro pode ser um array
     * vazio. Com isso, esta "função" será executada
     * apenas uma vez, ou seja, somente quando nosso
     * componente for carregado uma única vez.
     */
    },[]);

    useEffect(() => {
        console.log(email, password)
    /**Diferentemente da forma anterior, este useEffect
     * será executado toda vez que estes parametros forem
     * alterados
     */
    },[email, password])
    
    const handleLogin = () => {
        console.log(email, password)
    }
    return(
        <div>
            <form>
                <label>
                    <span>E-mail</span>
                    <input type="email" value={email} 
                        onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>password</span>
                    <input type="password" value={password} 
                        onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="button" onClick={handleLogin}>
                    Enviar
                </button>
            </form>
        </div>
    )
}