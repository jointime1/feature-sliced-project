import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage/>} />
        </Routes>
      </Suspense>
  )
}

export default AppRouter