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

    return (
        <div className='main-con'>
            
            <form>
                <div className='form-con' >
                    <div className='add-con'>
                        <h1>НЭВТРЭХ</h1>
                    </div>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='нэр'
                        className='input-con'
                    />
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='нууц үг'
                        className='input-con'
                    />
                    <div className='button-con'>
                        <button type='submit'>НЭВТРЭХ</button>
                    </div>
                </div>  
            </form>
            
        </div>
    );
}

export default LogIn;
