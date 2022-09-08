import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    return (
        <div className="form-container">
            <div>
            <h2 className="form-title">Sign Up</h2>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input type="password" name="confirm-password" id="" />
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