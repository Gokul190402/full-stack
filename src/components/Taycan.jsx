// Taycan.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TaycanImage from '../images/taycan2.jpg'; // Assuming this is the correct path to your Taycan image
import { useNavigate } from 'react-router-dom';
import './Taycan.css';

function Taycan() {
    const [menub, setMenub] = useState(false);
    const [userb, setUserb] = useState(false);
    const navigate = useNavigate();

    function handleMenu() {
        setMenub(!menub);
    }

    function handleUser() {
        setUserb(!userb);
    }

    function navOrder() {
        navigate('/Order', { state: { model: 'Taycan' } });
    }

    return (
        <>
            <div className='topbar'>
                <div className='menu'>
                    <button type='button' onClick={handleMenu} className='menubutt'>MENU</button>
                    {menub && (
                        <div className='menubox'>
                            <Link to='/Taycan'>Taycan</Link><br></br>
                        </div>
                    )}
                </div>
                <div className='mid'>
                    <b className='head'>PORSCHE</b>
                </div>
                <div className='user'>
                    <button type='button' onClick={handleUser} className='userbutt'>USER</button>
                    {userb && (
                        <div className='userbox'>
                            <Link to='/Login'>Login</Link><br></br>
                            <Link to='/User'>User</Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='namediv'>
                <b className='name'>ALL NEW PORSCHE TAYCAN 2024</b>
            </div>
            <div className='exc'>
                <img src={TaycanImage} alt='Taycan' className='taycan-image' />
            </div>
            <div className='get-button'>
                <button type='button' onClick={navOrder} className='get'>get your own TAYCAN</button>
            </div>
            <div className='details'>
                <div className='perf'>
                    <b className='name'>PERFORMANCE</b>
                    <p className='lines'>top speed :<b>230</b> km/h</p>
                    <p className='lines'>acceleration  0 to 100 kmph in <b>4.8s</b></p>
                    <p className='lines'>REAR WHEEL DRIVE, power : <b>410</b>nm</p>
                </div>
                <div className='perfimg'></div>
                <div className='mileimg'></div>
                <div className='mile'>
                    <b className='name'>MILEAGE</b>
                    <p className='lines'>range :<b>618</b> miles in single charge</p>
                    <p className='lines'>charging time :<b>18</b> minutes</p>
                </div>
            </div>
        </>
    );
}

export default Taycan;
