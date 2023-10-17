import React from 'react'
import logo5 from '../assets/logo5.png'
import { Link } from 'react-router-dom'

const Headersection = () => {




  return (
    <>

      <nav className="navbar navbar-section">
        <div className="container-fluid">
          <span>
            <img id="logo5" src={logo5} alt="" />
            <ul>
              <Link to={'/Home'}><span><li>Home</li></span></Link>
              <Link to={'/Walletsection'}><li>Wallet</li></Link>
              <Link to={'/Business'}><li>Business</li></Link>
              <Link to={'/Exchangesection'}><li>Exchange</li></Link>
              <Link to={'/Withdraw'}><li>Withdraw</li></Link>
              <Link to={'/More'}><li >More <i class="bi bi-chevron-down"></i></li></Link>
            </ul>
          </span>
        </div>
      </nav>
    </>

  )
}

export default Headersection
