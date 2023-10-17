// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from '../assets/image1.png';
import logo2 from '../assets/image2.png';
import logo3 from '../assets/image3.png';
import logo4 from '../assets/image4.png';

import '../styles/Bannersection.css'




const Bannersection = () => {
  return (

    <>

      <div className='content-section'>


        <div className='text-section'>
          <h2>Exp-Pay</h2>
          <h3>Exceptional Service</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aliquid alias maxime sed laboriosam architecto at eligendi debitis saepe! Numquam ex sunt dolore deserunt non laboriosam harum vero velit autem.</p>
          <button className='contact'>Contact Us</button>
        </div>

        <div className='image-section'>
          <img id="logo" src={logo} alt="" />

        </div>
      </div>

      <div className='content-two'>
        <div className='image-section-two'>
          <img id="logo2" src={logo2} alt="" />
          <img id="logo3" src={logo3} alt="" />
          <img id="logo4" src={logo4} alt="" />

        </div>

        <div className='text-section-two'>
          <h3>About exp-pay</h3>
          <button className='underline-btn'></button>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos cupiditate reiciendis ex maxime? Optio voluptatibus nemo non qui unde est accusantium, impedit nam? Incidunt, cum? Omnis sit officia aut!</p>
        </div>
      </div>

    </>

  )
}

export default Bannersection
