import React from 'react'
import { Navbar } from './Navbar/Navbar'
import { Footer } from './Footer/Footer'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default AppLayout