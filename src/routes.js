import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth';


import Cadastro from './pages/Cadastro/cadastro'
import Login from './pages/Login/login'
import Produtos from './pages/Produtos/produtos'
import Home from './pages/Home/Home'
import Account from './pages/Account/Account'
import ConfirmAccount from './pages/ConfirmAccount/ConfirmAccount'
import ConfirmEmailChange from './pages/ConfirmEmailChange/ConfirmEmailChange'
import Drop from "./components/DropzoneComponent/drop";

export default function Routes() {
    return(
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/cadastro' exact component={Cadastro}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/produtos' component={Produtos}/>
                    <Route path='/account' component={Account}/>
                    <Route path='/confirmAccount/:confirmationCode' component={ConfirmAccount} />
                    <Route path='/confirmEmailChange/:confirmationCode' component={ConfirmEmailChange} />
                    <Route path='/drop' component={Drop} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    )
}