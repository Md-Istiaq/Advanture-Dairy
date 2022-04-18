import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';

import { useUpdatePassword } from 'react-firebase-hooks/auth';
import app from '../../_firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePassword = () => {

const auth = getAuth(app)
  const [password, setPassword] = useState('');
  const [email,setEmail] = useState('')
  const [updatePassword, updating, error] = useUpdatePassword(auth);

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (updating) {
    return toast('Updating Password');
  }

  const resetPassword = async() =>{
    await updatePassword(email);
    toast('Updated password');

  }
  return (
    <div className="App">
        <p>Enter your Email</p>
        <input type="email"  onChange={(e) => setEmail(e.target.value)} />
        <p>Enter Password</p>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br/>
      <button
        onClick={resetPassword}
      >
        Update password
      </button>
      <ToastContainer />
    </div>
  );
};

export default UpdatePassword;