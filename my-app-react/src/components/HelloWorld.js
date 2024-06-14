//como compartilham o mesmo diretório, não há necessidade de conter ./components
import Frase from './Frase';

function HelloWorld() {
    return(
    <div>
        <h1>Meu primero componente</h1>
        <Frase/>
    </div>)
}

export default HelloWorld