import React, { useState } from 'react';
import "./LogIn.css"
import page from '../app/intro/page';
import { useNavigate } from 'react-router-dom';
function LogIn() {
    const navigator = useNavigate();

    const handleSubmit = () => {
        navigator("/home")
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
                        <button onClick={handleSubmit}>НЭВТРЭХ</button>
                    </div>
                </div>  
            </form>
            
        </div>
    );
}

export default LogIn;
