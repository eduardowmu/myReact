import { useState } from "react"


export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
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