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
        alert(msg)
    }

    return(
        <>
            <h1>Preencha o formulário</h1>
            <form onSubmit={cadastrarContato}>
                <div>
                    <input type="email" placeholder="exemplo fulano@gmail.com" 
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