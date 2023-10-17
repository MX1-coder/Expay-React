// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Withdraw from './components/Withdraw'
import Walletsection from './components/Walletsection'
import Exchangesection from './components/Exchangesection'
import More from './components/Moresection'
import Business from './components/Business'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <>


      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Withdraw' element={<Withdraw />} />
          <Route path='/Walletsection' element={<Walletsection />} />
          <Route path='/Exchangesection' element={<Exchangesection />} />
          <Route path='/More' element={<More />} />
          <Route path='/Business' element={<Business />} />
          <Route path='/Dashboard' element={<Dashboard />} />


        </Routes>




      </Router>


    </>
  )
}

export default App




