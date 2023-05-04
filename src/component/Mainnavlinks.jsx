import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from '../PAGES/Home'
import BecomeADriver from '../PAGES/BecomeADriver'
import Business from '../PAGES/Business'
import Cities from '../PAGES/Cities'
import Drive from '../PAGES/Drive'
import Fleet from '../PAGES/Fleet'
import Food from '../PAGES/Food'
import Ride from '../PAGES/Ride'
import Scooters from '../PAGES/Scooters'


const Mainnavlinks = () => {
  return (
    <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/Ride' element={<Ride/>}/>
       <Route path='/BecomeADriver' element={<BecomeADriver/>}/>
       <Route path='/Fleet' element={<Fleet/>}/>
       <Route path='/Business' element={<Business/>}/>
       <Route path='/Scooters' element={<Scooters/>}/>
       <Route path='/Drive' element={<Drive/>}/>
       <Route path='/Food' element={<Food/>}/>
       <Route path='/Cities' element={<Cities/>}/>
    </Routes>
  )
}

export default Mainnavlinks;

