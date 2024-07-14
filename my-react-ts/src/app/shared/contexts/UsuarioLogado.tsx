import { createContext, useCallback } from "react";

interface UsuarioLogadoContextData {
    nomeDoUsuario: string
    /**novo evento que poderá ser
     * compartilhado
     */
    logout: () => void
}
/**Define todas as propriedades que poderemos disponibilizar
 * através do nosso contexto
*/
export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>(
    {} as UsuarioLogadoContextData
);

interface UsuarioLogadoProviderProps {
    
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({ children }) => {
    const handleLogout = useCallback(() => {
        console.log('Logout executado')
    }, [])
    return(
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Eduardo', 
                                                logout: handleLogout}}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}