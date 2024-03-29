import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import Home from "./components/home/Layout";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/shops/Shop';
import Nav from './components/nav/Nav';

const App = () => {

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, [])

  return (
    <BrowserRouter className="main">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App