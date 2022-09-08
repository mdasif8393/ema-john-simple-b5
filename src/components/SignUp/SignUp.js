import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const [createUserWithEmailAndPassword, user] =  useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            setError("Passwords didn't match");
            return;
        }
        if(password.length < 6 ) {
            setError("Passwords must be at least 6 character");
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        setError("");
        navigate('/shop')
    }

    
    return (
        <div className="form-container">
            <div>
            <h2 className="form-title">Sign Up</h2>
            <p style={{color:'red'}}>{error}</p>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label  htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password"  />
                    </div>
                    <input className="form-submit" type="submit" value="Sign Up" required/>
                </form>
                <p>
                   Already have an account? <Link className="form-link" to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;