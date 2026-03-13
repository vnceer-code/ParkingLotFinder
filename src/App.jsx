import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import ParkingDetails from './pages/ParkingDetails'
import BookingPage from "./pages/BookingPage";
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/parking/:id' element={<ParkingDetails />} />
        <Route path="/parking/:id/booking/:slotId" element={<BookingPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App