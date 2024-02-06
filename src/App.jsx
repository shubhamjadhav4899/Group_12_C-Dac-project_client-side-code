import { useState } from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "/node_modules/bootstrap/dist/js/bootstrap.min.js"
import AddRoom from './components/room/AddRoom'
import ExistingRooms from './components/room/ExistingRooms'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./components/home/Home"
import EditRoom from './components/room/EditRoom'
import NavBar from './components/layout/NavBar'
import RoomListing from './components/room/RoomListing'
import Admin from './components/admin/Admin'

function App() { 
        return 
        <>
        <main>
                <Router>
                        <NavBar/>
                        <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/edit-room/:roomId' element={<EditRoom/>}/>
                                <Route path='/existing-rooms/:roomId' element={<ExistingRooms/>}/>
                                <Route path='/add-room' element={<AddRoom/>}/>
                                <Route path='/browse-all-rooms' element={<RoomListing/>}/>
                                <Route path='/admin' element={<Admin/>}/>
                        </Routes>
                </Router>
                <footer/>
        </main>
        </>
}

export default App
