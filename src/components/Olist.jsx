import { useState,useEffect } from "react"
import { Link } from 'react-router-dom'
import { useLocation } from "react-router-dom"
import axios from 'axios'
import './Olist.css'
import React from 'react'


function Olist () {

    const [menub,setMenub] = useState(false)
    const [userb,setUserb] = useState(false)
    const [orders,setOrders] = useState([])

    const location = useLocation()
    const userobj = location.state || {}

    console.log('username :',userobj.username)

    function handleMenu(){
        setMenub(!menub)
    }

    function handleUser(){
        setUserb(!userb)
    }

    useEffect(() => {
        if (userobj.username) {
          axios.get(`http://localhost:5000/app/orders/getlist/${userobj.username}`)
            .then(response => {
              console.log(response.data);
              setOrders(response.data);
            })
            .catch(error => {
              console.log(error.message);
            });
        } else {
          console.log('Username not found');
        }
      }, [userobj.username]);

    return(
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
            <h2>this is the orders list page</h2>
            <div className="listingdiv">
            {orders.length === 0 ? (
          <p>There are no orders for you</p>
        ) : (
          <ul className="ordlist">
            {orders.map(order => (
              <li className="listclass" key={order._id}>
                <p className="modeltitle">{order.model}</p>
                <p>color : {order.color} , type :{order.type} , seats :{order.seats}</p>
              </li>
            ))}
          </ul>
        )}   
            </div>
        </>
    )
}                


export default Olist