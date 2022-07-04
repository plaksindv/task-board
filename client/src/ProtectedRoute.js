import React, { useContext } from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthContext } from './authContext';

/* eslint-disable */
export default function ProtectedRoute({component: Component, ...rest}) {
    const {authed, setAuthed} = useContext(AuthContext);

    return (
        <Route path='/home' {...rest} render={(props) => {
            if(authed){
                return <Component {...props}/>
            }
            else{
                return <Navigate to="/"/>
            }
        }} />
    )
}
