import { Link } from 'react-router-dom';
import './Home.css';
import React, { useState } from 'react';
import './Taycan';
import FirstImage from '../images/first.jpg';
import { useNavigate } from 'react-router-dom';
import Lemans from '../images/lemans.jpg';
import Img911 from '../images/911.jpg';
import Img718 from '../images/718.jpg';
import Macan from '../images/macan.jpg';
import Pana from '../images/pana.jpg';

function Home() {
  const navigate = useNavigate();

  const [menub, setMenub] = useState(false);
  const [userb, setUserb] = useState(false);

  function handleMenu() {
    setMenub(!menub);
  }

  function handleUser() {
    setUserb(!userb);
  }

  function navTaycan() {
    console.log('button clicked');
    navigate('/Taycan');
  }

  return (
    <>
      <div className='space1'>
        <div className='topbar'>
          <div className='menu'>
            <button type='button' onClick={handleMenu} className='menubutt'>
              MENU
            </button>
            {menub && (
              <div className='menubox'>
                <Link to='/Taycan'>Taycan</Link>
              </div>
            )}
          </div>
          <div className='mid'>
            <b className='head'>PORSCHE</b>
          </div>
          <div className='user'>
            <button type='button' onClick={handleUser} className='userbutt'>
              USER
            </button>
            {userb && (
              <div className='userbox'>
                <Link to='/Login'>Login</Link>
                <Link to='/User'>User</Link>
              </div>
            )}
          </div>
        </div>
        <img src={FirstImage} alt='home image' className='getto'></img>
        <p className='spline'>The pure expression of an electric sports car</p>
        <div className='divbutt'>
          <button type='button' onClick={navTaycan} className='tybutt'>
            Discover the new TYCAN
          </button>
        </div>
        <h2>MODELS</h2>
        <div className='modellist'>
          <div className='listitem'>
            <img src={Img911} alt='image 911' className='car-image'></img>
            <button type='button' className='listbutt'>911</button>
          </div>
          <div className='listitem'>
            <img src={Img718} alt='image 718' className='car-image'></img>
            <button type='button' className='listbutt'>718</button>
          </div>
          <div className='listitem'>
            <img src={Macan} alt='image macan' className='car-image'></img>
            <button type='button' className='listbutt'>MACAN</button>
          </div>
          <div className='listitem'>
            <img src={Pana} alt='image pana' className='car-image'></img>
            <button type='button' className='listbutt'>PANAMERA</button>
          </div>
        </div>
        <h2>LEGENDARY PORSCHE 917 IN LEMANS 1970</h2>
        <img src={Lemans} alt='lemans image' className='lemans-img'></img>
        <div className='legend'>
          <button type='button' className='histbutt'>discover the history</button>
        </div>
        <div className='about1'>
          <p className='p1'>
            Welcome to the Porsche India website, where you will find information on all the current models, our dealer network and other Porsche related information.
            Porsche India is a division of ŠKODA AUTO Volkswagen India Private Limited, with its headquarters in Mumbai. We are the sole importers for Porsche’s range of sport luxury cars – including the iconic 911, Boxster, Cayman, Macan, Cayenne, Panamera and Taycan, the first electric car from Porsche – all of which showcase exemplary driving characteristics, thoroughbred performance, engineering excellence, attention to detail and exquisite craftsmanship. We are also the exclusive importer for Porsche’s range of parts and accessories in India and have the responsibility to set up and maintain dealerships and offer sales and after sales for our entire range of cars in India.
            The Porsche range is available through our network of exclusive Porsche Centres across the country, who are equipped to support customer requirements.
          </p>
        </div>
        <div className='bottom'>
          <h3>copyright : PORSCHE</h3>
          <div className='sidediv'>
            <div>
              <ul className='reg1'>
                <h4>dealers available in</h4>
                <li>americas</li>
                <li>europe</li>
                <li>asia</li>
                <li>oceania</li>
                <li>africa</li>
              </ul>
            </div>
            <div>
              <h3>contact</h3>
              <p>helpline@porsche.in</p>
              <p>whatsapp : 1234567890</p>
              <p>twitter : porsche</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
