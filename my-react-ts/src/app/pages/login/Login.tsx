import { useCallback, useMemo, useState } from "react"
import { useEffect } from "react"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailLength = useMemo(() => {
        return email.length * 1000
    },[email.length]);

    // useEffect(() => {
    //     if(window.confirm('Are tou there?')) {
    //         console.log('YES')
    //     } else {
    //         console.log('NO')
    //     }
    // /**Como ainda não temos nenhuma dependência,
    //  * então o segundo parametro pode ser um array
    //  * vazio. Com isso, esta "função" será executada
    //  * apenas uma vez, ou seja, somente quando nosso
    //  * componente for carregado uma única vez.
    //  */
    // },[]);

    useEffect(() => {
        console.log(email, password)
    /**Diferentemente da forma anterior, este useEffect
     * será executado toda vez que estes parametros forem
     * alterados
     */
    },[email, password])
    
    const handleLogin = useCallback(() => {
        console.log(email, password)
        /**Se retirarmos essas dependencias, a memoria
         * permanecerá com os mesmos valores iniciais
         * digitados se fizermos alteração.
         */
    },[email, password])
    // () => {
    //     console.log(email, password)
    // }
    return(
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLength}</p>
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