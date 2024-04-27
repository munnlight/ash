import React, { useState } from 'react';
import "./LogIn.css"
import page from '../app/intro/page';
function LogIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginStatus, setLoginStatus] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        LogInFunction(username, password);
    };
    const LogInFunction = (username, password) => {
        if (!username || !password) {
            setLoginStatus('Please enter both username and password.');
            return;
        }
        const correctUsername = 'user';
        const correctPassword = 'password';

        if (username === correctUsername && password === correctPassword) {
            setLoginStatus('Login successful!');
        } else {
            setLoginStatus('Login failed! Invalid username or password.');
        }
    };

    return (
        <div className='main-con'>
            
            <form onSubmit={handleSubmit}>
                <div className='form-con' >
                    <div className='add-con'>
                        <h1>НЭВТРЭХ</h1>
                    </div>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='нэр'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='нууц үг'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <div className='button-con'>
                        <button type='submit'>НЭВТРЭХ</button>
                    </div>
                </div>  
            </form>
            


            {/* Display the login status */}
            {loginStatus && <p>{loginStatus}</p>}
        </div>
    );
}

export default LogIn;
