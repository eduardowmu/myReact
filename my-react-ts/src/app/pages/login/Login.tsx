/**useHistory is deprecated to this version */
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const navigate = useNavigate()

    /**
     * Este método irá fazer o papel de um
     * redirecionamento
     */
    const handleClick = () => {
        navigate('/pagina-inicial')
    }

    return(
        <div>
            Login
            <button onClick={handleClick}>Página Inicial</button>
        </div>
    )
}