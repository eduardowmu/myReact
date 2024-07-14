import { useContext } from "react"
import { UsuarioLogadoContext } from "../contexts"

// custom react-hook
export const useUsuarioLogado = () => {
    const context = useContext(UsuarioLogadoContext)
    return context
}