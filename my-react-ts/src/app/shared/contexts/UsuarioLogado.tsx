import { createContext } from "react";

interface UsuarioLogadoContextData {
    nomeDoUsuario: string
}

export const UsuarioLogadoContext = createContext<UsuarioLogadoContextData>(
    {} as UsuarioLogadoContextData
);

interface UsuarioLogadoProviderProps {
    
    children: React.ReactNode
}

export const UsuarioLogadoProvider: React.FC<UsuarioLogadoProviderProps> = ({ children }) => {

    return(
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Eduardo' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}