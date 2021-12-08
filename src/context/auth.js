import React, { createContext } from "react";
import { api } from "../utils/api";

const authContext = createContext()

function AuthProvider(props){

    async function initUser(){
        const userInfo = await api.get('/userInfo', {
            headers: {'Authorization': `Bearer ${sessionStorage.getItem('token')}`}
        })
    }

    return (
        <authContext.Provider value={ {initUser} }>
            {props.children}
        </authContext.Provider>
    )
}

export { authContext, AuthProvider }