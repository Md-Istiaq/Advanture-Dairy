import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../_firebase.init';
import './Login.css'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const auth = getAuth(app)
    const Navigate = useNavigate()
    const provider = new GoogleAuthProvider();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handlePassword = e => {
        setPassword(e.target.value)
    }

    const SignIn = e => {
        e.preventDefault()

        signInWithEmailAndPassword(email, password)

    }
    if (user) {

        Navigate('/checkout')
    }
    if (error) {
        alert(error.message)
    }

    const googleSignIn = () =>{
        signInWithPopup(auth,provider)
        .then(result =>{
            Navigate('/checkout')
        })
        .catch(error =>{
          alert(error.message)
        })
    }
    return (
        <div className='login'>
            <h1>Log In</h1>
            <Form onSubmit={SignIn} className='w-25 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" required />
                </Form.Group>
                <div className='link'>
                    <Link to='/register'>Register if you haven't an account</Link>
                    <Link to="/updatepassword">Reset Password</Link>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <p>----------------OR-----------------</p>
                <Button onClick={googleSignIn} variant='primary' type='submiit'>Log In With Google</Button>
                </div>
            </Form>

        </div>
    );
};

export default Login;