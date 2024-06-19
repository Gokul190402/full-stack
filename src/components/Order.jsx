import { useState,useEffect } from 'react';
import './Order.css'
import axios from 'axios'
import React from 'react'
import { useLocation } from 'react-router-dom';

function Order(){
    const [menu,setMenu] = useState(false)
    const [model,setModel] = useState('')
    const [user,setUser] = useState('')
    const [color,setColor] = useState('')
    const [seats,setSeats] = useState('')
    const [type,setType] = useState('')
    const [resultmess,setResultmess] = useState('')

    const location = useLocation()
    const model1 = location.state ? location.state.model : ''

    useEffect(()=>{
        setModel(model1)
    },[model1])

    function handleSeats(event){
        setSeats(event.target.value)
    }

    function handleType(event){
        setType(event.target.value)
    }

    function handleColor(event){
        setColor(event.target.value)
    }

    function handleOrder(){
        const orderData = {
            username : user,
            model : model,
            color : color,
            seats : seats,
            type : type
        }    
        console.log('data sent to the server',orderData)

        axios.post('http://localhost:5000/app/orders/new',orderData)
        .then(response =>{
            console.log(response.data)
            setResultmess(response.data)
        })
        .catch(error =>{
            console.log('error',error.response.data)
            setResultmess(error.response.data)
        })
    }

    return (
        <div className='maindiv'>
            <div className='topbar'>
                <div className='menu'>
                    <button type='button' className='menubutt' >MENU</button>
                </div>
                <div className='mid'>
                    <b className='head'>PORSCHE</b>
                </div>
                <div className='user'>
                <button type='button' onClick={()=>{setMenu(!menu)}} className='userbutt'>USER</button>
                </div>
            </div>
            <div className='orddiv'>
                <div className='det'>
                    <b>Order for {model}</b>
                    <input type='text' className='inpel name' onChange={(e)=>{setUser(e.target.value)}} value={user} placeholder='username'></input><br></br>
                    <input type='text' className='inpel model' defaultValue={model} placeholder='model'></input><br></br>
                    <select value={color} onChange={handleColor} className='color inpel drop' >
                        <option value="">color...</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="yellow">Yellow</option>
                    </select><br></br>
                    <select value={seats} onChange={handleSeats} className='seats inpel drop'>
                        <option value=''>seats..</option>
                        <option value='2'>2</option>
                        <option value='4'>4</option>
                    </select><br></br>
                    <select value={type} onChange={handleType} className='power inpel drop'>
                        <option value=''>type...</option>
                        <option value='sport'>sport</option>
                        <option value='track'>track</option>
                        <option value='coupe'>coupe</option>
                    </select>
                </div>
                <button type='button' onClick={handleOrder} className='ordbutt'>make your dream car</button>
                <p>{resultmess}</p>
            </div>
        </div>
    )
}

export default Order;