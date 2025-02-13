import { useState } from 'react'
import './global.css'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Navbar />
          <HomePage />
          <Footer />
        </div>,
    },
    {
      path: "/projects",
      element: 
      <div>
        <Navbar />
        <ProjectPage />
        <Footer />
      </div>
    },
    {
      path: "*",
      element:
        <div>
          <Navbar />
          <NotFound />
          <Footer />
        </div>
    }
  ]
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
