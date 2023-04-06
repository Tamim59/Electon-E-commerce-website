import React from 'react'
import { Outlet } from 'react-router-dom'
import Topheader from './Topheader'
import Header from '../Header'
import Navbar from '../Navbar'
import Footer from '../Footer'

const Rootlayouts = () => {
  return (
    <>
        <Topheader />
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Rootlayouts