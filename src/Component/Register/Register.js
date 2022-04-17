import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import app from '../../_firebase.init';

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const auth = getAuth(app)
    

    const Navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword();

    const handleEmail = e =>{
           setEmail(e.target.value)
    }
   
    const handlePassword = e =>{
        setPassword(e.target.value)
    }

    const createUser = e =>{

        e.preventDefault()

        createUserWithEmailAndPassword(email,password)
    } 

    if(user){
        Navigate('/checkout')
    }
    if(error){
        alert(error.message)
    }
      return (
          <div className='register'>
              <h1>Register Now</h1>
            <Form onSubmit={createUser} className='w-25 mx-auto mt-5'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
                </Form.Group>
            
                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <div className='link'>
                <Link to="/login">Log in if you register before</Link>
                <Button variant="primary" type="submit">
                Register
                </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;