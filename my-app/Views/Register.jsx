import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import LoggedContext from '../src/Components/loggedContext';
import { useContext } from 'react';


function Register() {
    const { logged, setLogged } = useContext(LoggedContext);
    const navigate = useNavigate();
    const submit = (event) => {
        //add some validation and store
        event.preventDefault();
        setLogged(true);
        console.log(logged)
        // Store the user data in local storage or a global state


        navigate('/Genres');
    }

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" name="password" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password1">Reconfirm Password: </label>
                    <input type="password" id="password1" name="password1" required />
                </div>
                <button onClick={submit} type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register