import React from 'react'
import './App.css'
import Appbar from './Components/Appbar'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Homepage from './Components/Homepage'
import Aboutpage from './Components/Aboutpage'
import Contactpage from './Components/Contactpage'
import RandomPage from './Components/randomPage'

function App() {
  return (
    <BrowserRouter>
      <AppWithConditionalAppbar />
    </BrowserRouter>
  )
}

function AppWithConditionalAppbar() {
  const location = useLocation()


  const hideAppbarRoutes = ['/random', '/home', '/about', '/contact']
  const shouldHideAppbar = hideAppbarRoutes.includes(location.pathname)

  return (
    <>
      {!shouldHideAppbar && <Appbar />}

      <Routes>
        <Route path="/random" element={<RandomPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </>
  )
}

export default App
