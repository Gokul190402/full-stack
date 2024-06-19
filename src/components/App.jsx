import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Taycan from './Taycan';
import User from './User';
import Login from './Login';
import Order from './Order';
import Olist from './Olist';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/User" element={<User />} />
      <Route path="/Taycan" element={<Taycan />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Olist" element={<Olist />} />
    </Routes>
  );
}

export default App;
