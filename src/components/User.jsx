import { useState } from 'react';
import './User.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import React from 'react'

function User() {
    const [uname, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mob, setMob] = useState('');
    const [pass, setPass] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [menub,setMenub] = useState(false)
    const [userb,setUserb] = useState(false)

    const handleName = (event) => {
        setName(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleMob = (event) => {
        setMob(event.target.value);
    }

    const handlePass = (event) => {
        setPass(event.target.value);
    }

    function handleMenu(){
        setMenub(!menub)
    }

    function handleUser(){
        setUserb(!userb)
    }

    const saveUser = () => {
        const userData = {
            username: uname, 
            email: email, 
            mobile: mob, 
            password: pass
        };

        console.log('Sending data to backend:', userData);

        axios.post('http://localhost:5000/app/users/register', userData)
        .then(response => {
            setResponseMessage(response.data);
        })
        .catch(error => {
            console.log(error.response.data);
            setResponseMessage('Error: ' + error.response.data);
        });
    }

    return (
        <>
            <div className='topbar'>
            <div className='menu'>
                    <button type='button' onClick={handleMenu} className='menubutt'>MENU</button>
                    {
                        menub && <div className='menubox'>
                            <Link to='/Taycan'>Taycan</Link><br></br>
                        </div>
                    }
                    </div>
                    <div className='mid'>
                        <b className='head'>PORSCHE</b>
                    </div>
                    <div className='user'>
                    <button type='button' onClick={handleUser} className='userbutt'>USER</button>
                    {
                        userb && <div className='userbox'>
                            <Link to='/Login'>Login</Link><br></br>
                            <Link to='/User'>User</Link>
                        </div>
                    }
                </div>
            </div>
            <div className='maindivuser'>
                <div className='userdiv'>
                    <p className='userh1'>Creating new account</p>
                    <b className='linesuser'>Name:</b><input type='text' value={uname} onChange={handleName} className='inpeluser name' /><br/>
                    <p>Cannot change username afterwards</p>
                    <b className='linesuser'>Email:</b><input type='text' value={email} onChange={handleEmail} className='inpeluser email' /><br/>
                    <b className='linesuser'>Mobile:</b><input type='text' value={mob} onChange={handleMob} className='inpeluser mobile' /><br/>
                    <b className='linesuser'>Password:</b><input type='password' value={pass} onChange={handlePass} className='inpeluser pass' /><br/>
                    <button type='button' onClick={saveUser} className='reg'>Register</button>
                    <p className='res'>{responseMessage}</p>
                </div>
            </div>
        </>
    );
}

export default User;
