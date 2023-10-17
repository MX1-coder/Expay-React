import React from 'react'
import '../styles/Withdraw.css'
import { Link } from 'react-router-dom'
import logo5 from '../assets/logo5.png'

const Withdraw = () => {
  return (
    <>
      {/* <nav class="navbar navbar-section-two">

        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler navbar-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-person-fill"></i>Log in

        </button>

      </nav> */}
      <div className='toggle-nav'>
        <button className="sign-in-btn">            <i class="bi bi-person-fill"></i>Log In</button>


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

      <div className='withdraw-section'>
        <form>

          <div className='form-section'>
            <label for="exampleInput1" class="form-label">CHOOSE OPTION</label>
            <span className='check'>

              <div class="form-check form-check-inline ">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">EP money</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                <label class="form-check-label" for="inlineCheckbox2">Wallet</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                <label class="form-check-label" for="inlineCheckbox3">Trade Money</label>
              </div>
            </span>


            <span className='check2'><div class="mb-3">

              <label for="exampleInput1" class="form-label">SELECT CURRENCY</label>
              <input type="text" class="form-control" id="exampleInput1" placeholder='USD' />


            </div>
              <div class="mb-3">

                <label for="exampleInputAmount" class="form-label">Amount</label>
                <input type="text" class="form-control" id="exampleInputAmount" placeholder='0.00' />

              </div>

            </span>

            <div class="mb-3">
              <label for="exampleInputDescription" class="form-label">Description</label>
              <input type="text" class="form-control descript-input" id="exampleInputDescription" />
            </div>
          </div>
        </form>
        <div class="card withdraw-card" >

          <span className='span-one'>
            <div class="mb-3">

              <label for="exampleInputEmail1" class="form-label">BANK ACCOUNT NO</label>
              <input type="email" class="form-control mail-control" id="exampleInputEmail1" />


            </div>
            <div class="mb-3">

              <label for="exampleInputAmount" class="form-label">IFSC CODE</label>
              <input type="text" class="form-control mail-control" id="exampleInputAmount" />

            </div>
            <div class="mb-3">

              <label for="exampleInputAmount" class="form-label">NAME</label>
              <input type="text" class="form-control mail-control" id="exampleInputAmount" />

            </div>

          </span>


          <button className='btn withdraw-btn'>Withdraw</button>

        </div>
        <div class="card withdraw-card">

          <span>
            <div class="mb-3">

              <label for="exampleInputEmail1" class="form-label">PAYPAL EMAIL</label>
              <input type="email" class="form-control" id="exampleInputEmail1" />


            </div>
            <div class="mb-3 des-section">

              <label for="exampleInputAmount" class="form-label">DESCRIPTION</label>
              <input type="text" class="form-control" id="exampleInputAmount" />

            </div>

          </span>

          <button className='btn withdraw-btn'>Withdraw</button>

        </div>
        <div class="card withdraw-card">

          <span><div class="mb-3">

            <label for="exampleInputEmail1" class="form-label">SKRILL EMAIL</label>
            <input type="email" class="form-control" id="exampleInputEmail1" />


          </div>
            <div class="mb-3">

              <label for="exampleInputdescription" class="form-label">DESCRIPTION</label>
              <input type="text" className="form-control des-input" id="exampleInputdescription" />

            </div>

          </span>


          <button className='btn withdraw-btn'>Withdraw</button>

        </div>
        <div class="card withdraw-cards">

          <div className='cardbox1'>
            <div class="mb-3">

              <label for="exampleInputAmount" class="form-label">PERFECT MONEY</label>
              <input type="text" class="form-control" id="exampleInputAmount" />

            </div>
            <button className='btn withdraw-btn'>Withdraw</button>
          </div>
          <div className='cardbox2'>
            <div class="mb-3">

              <label for="exampleInputAmount" class="form-label">BTC ADDRESS</label>
              <input type="text" class="form-control" id="exampleInputAmount" />

            </div>
            <button className='btn withdraw-btn'>Withdraw</button>

          </div>

        </div>


      </div>
      <div className='footer-section'>
        {/* <div className='footer-details'> */}
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
      {/* </div> */}


    </>

  )
}

export default Withdraw
