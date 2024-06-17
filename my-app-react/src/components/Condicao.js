import { useState } from "react"

function Condicao() {

    const [email, setEmail] = useState()
    /*manipulação de email como se fosse
    email de usuário*/
    const [userEmail, setUserEmail] = useState()

    function sendEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function clearField(e) {
        e.preventDefault()
        setUserEmail('')
        document.getElementById('email').value = 
            email === '' ? email : ''
    }

    return(
        <>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" id="email" placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
                <button type="submit" onClick={sendEmail}>
                    Send
                </button>
                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={clearField}>Clear</button>
                    </div>
                )}
            </form>
        </>
    )
}

export default Condicao