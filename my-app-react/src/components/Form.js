import { useState } from "react"

function Form() {
    function cadastrarContato(e) {
        /**
         * Esta linha abaixo é o que simplesmente
         * para a execução da requisição do formulário 
         * e apenas permite a execução das linhas de 
         * código seguinte.
         */
        e.preventDefault()
        let msg = window.confirm("Deseja cadastrar seu email?") ? 
                                        'e-mail enviado com sucesso!' :
                                        'e-mail não enviado.'
        
        console.log(email, password)
        alert(msg)
    }

    //inserindo um valor default, como parametro
    const [email, setEmail] = useState('dudu@gmail.com')
    const [password, setPassword] = useState()

    return(
        <>
            <h1>Preencha o formulário</h1>
            <form onSubmit={cadastrarContato}>
                <div>
                    <label htmlFor="email">E-mail: </label>
                    <input type="email" id="email" name="email" 
                            placeholder="exemplo: fulano@gmail.com"
                            value={email}
                            onChange={(e => setEmail(e.target.value))}
                            required/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" id="password" 
                        name="password" placeholder="Digite sua senha"
                        value={password}
                        onChange={(e => setPassword(e.target.value))}
                        required/>
                </div>
                <div>
                    <input type="submit" value="send"/>
                </div>
            </form>
        </>
    )
}

export default Form