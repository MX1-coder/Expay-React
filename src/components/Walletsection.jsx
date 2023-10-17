import React from 'react'
import { Link } from 'react-router-dom'
import logo5 from '../assets/logo5.png'
import logo11 from '../assets/wallet-logo.png'
import logo12 from '../assets/logo12.png'
import logo13 from '../assets/logo13.png'
import logo14 from '../assets/logo14.png'
import logo15 from '../assets/logo15.png'
import '../styles/Walletsection.css'

const Walletsection = () => {
  return (
    <>

      <div className='toggle-nav'>
        <button className="sign-in-btn">           <i class="bi bi-person-fill"></i>Log In</button>


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
      <div className='wallet-content'>
        <div className='short-cards'>
          <div class="card-details">
            <h6>AVAILABLE BALANCE: </h6>
          </div>
          <div class="card-details">
            <h6>NO.OF TRANSACTION: </h6>


          </div>
          <div class="card-details">

            <h6>HOLD BALANCE: </h6>

          </div>


        </div>
        <div className='wallet-card'>
          <div class="card-one card-on">
            <img id="logo11" src={logo15} class="card-img-top" alt="..." />
            <div class="card-body">
              <button className='btn wallet-btn'>SEND MONEY TO WALLET</button>
            </div>
          </div>
          <div class="card-one card-on">
            <img id="logo11" src={logo11} class="card-img-top" alt="..." />
            <div class="card-body">
              <button className='btn wallet-btn'>ADD MONEY TO WALLET</button>
            </div>
          </div>
          <div class="card-one card-on" >
            <img id="logo11" src={logo12} class="card-img-top" alt="..." />
            <div class="card-body">
              <button className='btn wallet-btn'>REQUEST BALANCE</button>
            </div>
          </div>
          <div class="card-one card-on" >
            <img id='logo11' src={logo13} class="card-img-top" alt="..." />
            <div class="card-body">
              <button className='btn wallet-btn'>DOWNLOAD STATEMENT</button>
            </div>
          </div>
          <div class="card-one card-on" >
            <img id='logo11' src={logo14} class="card-img-top" alt="..." />
            <div class="card-body">
              <button className='btn wallet-btn'>SEND MONEY TO EP</button>
            </div>
          </div>
        </div>
      </div>
      <div className='wallet-section-two'>
        <div className='wallet-text'>
          <h4>SEND MONEY TO WALLET</h4>
        </div>
        <div className='wallet-form'>
          <form>
            <span><div class="mb-3">

              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" class="form-control form-input" id="exampleInputEmail1" />


            </div>
              <div class="mb-3">

                <label for="exampleInputAmount" class="form-label">Amount</label>
                <input type="text" class="form-control form-input" id="exampleInputAmount" />

              </div>

            </span>

            <div className="mb-3">
              <label for="exampleInputDescription" class="form-label">Description</label>
              <input type="text" class="form-control " id="exampleInputDescription" />
            </div>

            <span>
              <div class="mb-3">
                <label for="exampleInputCurrency" class="form-label">Currency</label>
                <input type="text" class="form-control currency-input" id="exampleInputCurrency" />
              </div>


              <div class="mb-3">

                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label class="form-check-label" for="inlineCheckbox1">On</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label class="form-check-label" for="inlineCheckbox2">Off</label>
                </div>
              </div>

            </span>



            <button type="submit" class="btn send-btn">Send</button>
          </form>
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

export default Walletsection
