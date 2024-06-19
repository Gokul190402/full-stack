import { useState } from 'react';
import './Login.css';
import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [mess, setMess] = useState('');
    const [isSucess,setIsSucess] = useState(false)
    const [menub,setMenub] = useState(false)
    const [userb,setUserb] = useState(false)
    
    const navigate = useNavigate()

    const handleUser = (event) => {
        setUser(event.target.value);
    };

    const handlePass = (event) => {
        setPass(event.target.value);
    };

    function handleMenu(){
        setMenub(!menub)
    }

    function handleUser1(){
        setUserb(!userb)
    }


    const handleEnter = () => {
        const srhUser = {
            username: user,
            password: pass
        };
        console.log('Login attempt:', srhUser);

        axios.post('http://localhost:5000/app/users/login', srhUser)
            .then(response => {
                setMess(response.data);
                setIsSucess(true)
            })
            .catch(error => {
                console.error('Error during login:', error.message);
                setMess('Error: ' + error.message);
            });  
    };

    function navOrders(){
        navigate('/Olist', {state :{ user}})
    }

    return (
        <div className='mainlog'>
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
                    <button type='button' onClick={handleUser1} className='userbutt'>USER</button>
                    {
                        userb && <div className='userbox'>
                            <Link to='/Login'>Login</Link><br></br>
                            <Link to='/User'>User</Link>
                        </div>
                    }
                </div>
            </div>
            <div className='maindiv1'>
                <p className='logh1'>Logging in</p>
                <b>username :</b><input type='text' value={user} onChange={handleUser} className='inpellog userlog' /><br />
                <b>password :</b><input type='password' value={pass} onChange={handlePass} className='inpellog passlog' /><br />
                <button type='button' onClick={handleEnter} className='logbutt'>Login</button>
                <p className='res'>{mess}</p>
                {
                    isSucess && <button type='button' onClick={navOrders} className='navordbutt'>view your orders</button>
                }
            </div>
            
        </div>
    );
}

export default Login;
