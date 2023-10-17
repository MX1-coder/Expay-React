import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

const Login = ({ handleClose }) => {
    return (
        <div className="popup-2">
            <div className="popup-inner-2">
                <button className="close-btn-2" onClick={handleClose}>X</button>
                <h4>Log In to <a href="#">Exp-Pay</a></h4>
                <form>




                    <div class="mb-3">


                        <input type="email" class="form-control" id="exampleInputEmail2" placeholder='Email' />


                    </div>
                    <div class="mb-3">


                        <input type="text" class="form-control" id="exampleInputPassword" placeholder='Password' />


                    </div>
                    <span>

                        <div class="mb-3">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">Remember me</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <h6>Forgot Password?</h6>
                        </div>



                    </span>





                    <Link to={'/Dashboard'}>          <button className='next-btn'>Log In</button></Link>




                </form>
                <h6>Don't have an account?   <a href="#">Sign Up</a>

                </h6>

            </div>
        </div>


    )
}

export default Login
