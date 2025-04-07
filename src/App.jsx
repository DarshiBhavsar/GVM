import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './Components/Appbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RandomPage from './Components/randomPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/random' element={<RandomPage />}></Route>
      </Routes>
      <Appbar />
    </BrowserRouter>
  )
}

export default App
