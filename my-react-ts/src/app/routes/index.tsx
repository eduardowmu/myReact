import { BrowserRouter, Route, Routes as Switch,  Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";
/**
 * 1 - O 'element', acompanhado com o componente entre </>, 
 * é que subsitui o antigo exact. Isso não permite que
 * seja renderizado com outra rota qualquer.
 * 
 * 2 - O Navigate serve como um friendlyURL
 */
export const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/pagina-inicial" element={<Dashboard/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" Component={() => <Navigate to='/pagina-inicial'/>}/>
            </Switch>
        </BrowserRouter>
    );
}