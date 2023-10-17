import React, { useState } from 'react'
import '../styles/Signup.css'
import { Link } from 'react-router-dom'
import Login from '../components/Login'

const Signup = ({ handleClose }) => {

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    console.log('Clicked')
    setShowPopup(!showPopup);
  }



  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={handleClose}>x</button>
        <h4>Sign Up to <a href="#">Exp-Pay</a></h4>
        <form>



          <span>

            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">Personal</label>
              </div>
            </div>
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                <label class="form-check-label" for="inlineCheckbox1">Business</label>
              </div>
            </div>



          </span>
          <div class="mb-3">


            <input type="email" class="form-control" id="exampleInputEmail2" placeholder='Email' />


          </div>
          <div class="mb-3">


            <input type="text" class="form-control" id="exampleInputFirstname" placeholder='First Name' />


          </div>
          <div class="mb-3">


            <input type="text" class="form-control" id="exampleInputLastname" placeholder='Last Name' />


          </div>
          <div class="mb-3">


            <input type="text" class="form-control" id="exampleInputCreatepassword" placeholder='Create Password' />


          </div>
          <div class="mb-3">


            <input type="text" class="form-control" id="exampleInputConfirmpassword" placeholder='Confirm Your Password' />


          </div>




          <Link to={'/Dashboard'}>          <button className='next-btn'>Next</button></Link>




        </form>


        <h6>Already have an account?   <a onClick={togglePopup} href="#">Log in</a>
          {showPopup && <Login handleClose={togglePopup} />}
        </h6>

      </div>
    </div>

  )
}

export default Signup
