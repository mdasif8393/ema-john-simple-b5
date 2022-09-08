import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const logInUser = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/shop')
    }

    return (
        <div className="form-container">
            <div>
            <h2 className="form-title">Loin</h2>
                <form onSubmit={logInUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                {
                    loading && <p>loading....</p>
                }
                <p style={{color:'red'}}>{error?.message}</p>
                <p>
                    New To Ema-John? <Link to="/signup" className="form-link">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;