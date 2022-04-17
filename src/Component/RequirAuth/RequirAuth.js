import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import app from '../../_firebase.init';
import {Spinner} from 'react-bootstrap'

const RequirAuth = ({children}) => {

    const auth = getAuth(app)

    const [user,loading] = useAuthState(auth)

    const location = useLocation()
    if(loading){
        return <>
        <Spinner  animation="grow" size="sm" />
        <Spinner animation="grow" />
        </>
    }

    if(!user){
        return <Navigate to='/login' state={{from:location}} replace></Navigate>
    }
    return children;
};

export default RequirAuth;