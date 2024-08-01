import React from 'react'
import List from './components/List'
import FavouriteStudent from './components/FavouriteStudent'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ListContexProvider from './components/ListContexProvider'
import Home from './components/Home'
import Navbar from './components/Navbar'
function App() {




  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <ListContexProvider >
        <Routes>
          <Route path="/" element={<Home />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/favourite" element={<FavouriteStudent />}></Route>

         
        </Routes>
        </ListContexProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
