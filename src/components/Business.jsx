import React from 'react'
import logo16 from '../assets/business-logo.png'
import { Link } from 'react-router-dom'
import logo5 from '../assets/logo5.png'
import logo17 from '../assets/logo17.png'
import logo18 from '../assets/logo18.png'
import '../styles/Business.css'

const Business = () => {
  return (
    <>

      <div className='toggle-nav'>
        <button className="sign-in-btn" >            <i class="bi bi-person-fill"></i>Log In</button>


      </div>

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
              <Link to={'/More'}><li>More <i class="bi bi-chevron-down"></i></li></Link>
            </ul>
          </span>
        </div>
      </nav>
      <div className='business-section'>
        <div className='image-part'>
          <img id="logo16" src={logo16} alt="" />
        </div>
        <div className='text-part'>
          <h1>Send money and shop with one</h1>
          <h1>easy account</h1>
          <button className='btn signup-btn'>Sign Up for Free</button>
        </div>
      </div>
      <div className='short-section'>
        <h2>Looking for EXP-PAY Business?Whether you're local or global, we're here to support you</h2>
        <button className='btn business-btn'>EXP PAY for Business</button>

      </div>
      <div className='business-section-two'>
        <div className='sectiontwo-text'>
          <h4>Pay Later with</h4>
          <h4>EXP PAY Pay in 3</h4>
          <p>Spilt purchases into three interest-free monthly payments</p>
          <p>at millions of stores online</p>

          <a href="#">Find Out More</a>
          <p>Spilt purchases into three interest-free monthly payments</p>
          <p>at millions of stores online</p>

        </div>
        <div className='sectiontwo-image'>
          <img id="logo17" src={logo17} alt="" />
        </div>

      </div>
      <div className='business-section-three'>
        <div className='sectionthree-image'>
          <img id="logo18" src={logo18} alt="" />
        </div>
        <div className='sectionthree-text'>
          <h4>Get instant spend</h4>
          <h4>notifications</h4>
          <p>whether shopping at your usual store or somewhere</p>
          <p>new,we help keep checkout fast and your purchase</p>
          <p>protected.**You also get instant spend notifications,</p>
          <p>so you can easily keep track of all your online hauls.</p>

        </div>


      </div>
      <div className='shorttwo-section'>
        <h3>Join the millions of users worldwide</h3>
        <h3>trusting EXP-PAY every day</h3>
        <button className='btn sign-up-btn'>Sign Up for Free</button>

      </div>
      <div className='business-content'>
        <div className='content-text'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Expedita libero esse ex dolor aspernatur odio consequuntur,
            quo mollitia laborum ut nulla debitis, animi temporibus rem illum impedit assumenda,
            non quae?</p>
        </div>



      </div>

      <div className='footer-section'>

        <div className='detail'>Contact
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className='detail'>Services
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className='detail'>Services
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
        <div className='detail'>Follow Us
          <p> <i class="bi bi-facebook"></i>  <i class="bi bi-twitter"></i>  <i class="bi bi-instagram"></i></p>
        </div>
      </div>





    </>

  )
}

export default Business
