import React from 'react'
import '../styles/Exchangesection.css'
import { Link } from 'react-router-dom'
import logo5 from '../assets/logo5.png'
import logo29 from '../assets/logo29.png'
import logo30 from '../assets/logo30.png'
import logo31 from '../assets/logo31.png'
import logo32 from '../assets/logo32.png'
import logo33 from '../assets/logo33.png'
import logo34 from '../assets/logo34.png'
import logo35 from '../assets/logo35.png'
import logo36 from '../assets/logo36.png'


const Exchangesection = () => {
  return (
    <>

      <div className='toggle-nav'>
        <button className="sign-in-btn" >           <i class="bi bi-person-fill"></i>Log In</button>


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
      <div className='exchange-content'>
        <h5>Our Clients</h5>
        <p>Working Together</p>
        <div className='logo-section'>
          <img id='logo30' src={logo33} alt="" />
          <img id='logo30' src={logo32} alt="" />
          <img id='logo30' src={logo31} alt="" />
          <img id='logo30' src={logo30} alt="" />
          <img id='logo30' src={logo29} alt="" />
        </div>

        <h5>Exchange rate calculator</h5>
        <div className='card-rate-section'>

          <div className='rate-section'>



            <div class="card card-rate">


              <span><h6><img id='logo34' src={logo34} alt="" /></h6>  <h6>USD</h6></span>
              <div class="input-group mb-2">

                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">00.00</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">2.45</a></li>

                </ul>

              </div>
              <div class="input-group mb-2">
                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">0.000</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">0.678</a></li>

                </ul>

              </div>
            </div>
            <div class="card card-rate">
              <span><h6><img id='logo34' src={logo35} alt="" /></h6>  <h6>EUR</h6></span>
              <div class="input-group mb-2">

                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">00.00</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">2.45</a></li>

                </ul>

              </div>
              <div class="input-group mb-2">
                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">0.000</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">0.678</a></li>

                </ul>

              </div>
            </div>
            <div class="card card-rate">
              <span><h6><img id='logo34' src={logo36} alt="" /></h6>  <h6>RUB</h6></span>
              <div class="input-group mb-2">

                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">00.00</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">2.45</a></li>

                </ul>

              </div>
              <div class="input-group mb-2">
                <button class="btn btn-outline-none dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">0.000</button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">0.678</a></li>

                </ul>

              </div>
            </div>
            <div class="card card-rate">
              <span><h6>Updated-10/10/2023</h6>  <h6>More Currencies</h6></span>
            </div>



          </div>

          <div className='rate-section-two'>
            <div class="card card-rate-two">
              <label for="exampleInputEmail1" class="form-label">HAVE</label>
              <div class="input-group mb-3 w-75">

                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">USD</button>

              </div>
              <label for="exampleInputEmail1" class="form-label">WANT</label>
              <div class="input-group mb-3 w-75">

                <input type="text" class="form-control" aria-label="Text input with dropdown button" />
                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">RUB</button>

              </div>

            </div>

          </div>

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

export default Exchangesection
