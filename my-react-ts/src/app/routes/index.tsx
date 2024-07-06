import { BrowserRouter as Router, Route, Routes as Switch, Navigate as Redirect } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Dashboard } from '../pages/Dashboard'


export const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path='/entrar' element={<Login/>}/>
                <Route path='/pagina-inicial' element={<Dashboard/>}/>
                <Route path='*' element={<Redirect to='/pagina-inicial'/>}/>
            </Switch>
        </Router>
    )
}