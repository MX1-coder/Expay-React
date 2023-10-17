import React from 'react'
import logo25 from '../assets/logo25.svg'
import logo26 from '../assets/logo26.svg'
import logo27 from '../assets/logo27.svg'
import '../styles/Contactsection.css'

const Contactsection = () => {
    return (
        <div className='contact-section'>
            <h2>Get in Touch</h2>
            
            <div className='contact-detail'>
                <form className='form-detail'>
                    <div class="row">
                        <div class="col-sm-5">
                            <label for="exampleInputName" class="form-label">Name</label>
                            <input type="email" class="form-control" aria-label="Name" />
                        </div>
                        <div class="col-sm-5">
                            <label for="exampleInputEmail" class="form-label">Email</label>
                            <input type="text" class="form-control" aria-label="Email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5">
                            <label for="exampleInputPhone" class="form-label">Phone</label>
                            <input type="number" class="form-control" aria-label="Phone" />
                        </div>
                        <div class="col-sm-5">
                            <label for="exampleInputAddress" class="form-label">Address</label>
                            <input type="text" class="form-control" aria-label="Address" />
                        </div>
                    </div>
                    <div class="col-sm-10">
                        <label for="exampleInputSubject" class="form-label">Subject</label>
                        <input type="text" class="form-control" aria-label="Subject" />
                    </div>
                    <div class="col-sm-10 ">
                        <label for="exampleInputTypeyourmessage" class="form-label">Type Your Message Here...</label>
                        <input type="text" class="form-control" aria-label="Type Your Message Here" />
                    </div>

                    <button className='btn Submit-btn'>Submit</button>



                </form>

                <div className='info-section'>

                    <span><img id="logo25" src={logo25} alt="" /><h6>224 RUE ST.CAMERON</h6></span>

                    <span><img id="logo25" src={logo26} alt="" /><h6>info@exp-pay.com</h6></span>


                    <span><img id="logo25" src={logo27} alt="" /><h6>1124356465879</h6></span>


                </div>


            </div>
            <div className='map-section'>


            </div>
        </div>
    )
}

export default Contactsection
