import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Video_Room from './Video_Room'
import ZegoCloud from './ZegoCloud'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ZegoCloud />} />
        <Route path='/room/:id' element={<Video_Room />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App