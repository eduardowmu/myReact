import { useCallback, useMemo, useRef, useState } from "react"
import { useEffect } from "react"
import { InputLogin } from "./components/InputLogin"
import { ButtonLogin } from "./components/ButtonLogin"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /**Este useRef irá armazenar uma referencia do elemento
     * <input/>
     */
    const inputPasswordRef = useRef<HTMLInputElement>(null)

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

        if(inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus()
        }
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
                <InputLogin 
                    label="E-mail"
                    type="email"
                    value={email}
                    onChange={onChangeValue => setEmail(onChangeValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}/>
                
                <InputLogin
                    ref={inputPasswordRef}
                    label="Password"
                    type="password"
                    value={password}
                    onChange={onChangeValue => setPassword(onChangeValue)}/>

                {/* <button type="button" onClick={handleLogin}>
                    Enviar
                </button> */}

                <ButtonLogin type="button" onClick={handleLogin}>
                    Entrar
                </ButtonLogin>

                {/* assim que representamos children, podemos usar o mesmo
                componente mas com "textos diferentes" */}
                
                <ButtonLogin type="button" onClick={handleLogin}>
                    Cadastrar-se
                </ButtonLogin>
            </form>
        </div>
    )
}