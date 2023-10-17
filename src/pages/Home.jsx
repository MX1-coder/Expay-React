import React, { useState } from 'react';
import Bannersection from '../components/Bannersection';
import Headersection from '../components/Headersection';
import Servicesection from '../components/Servicesection';
import Footersection from '../components/Footersection';
import Testimonials from '../components/Testimonials';
import Contactsection from '../components/Contactsection';
import Signup from '../components/Signup';



const Home = () => {

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        console.log('Clicked')
        setShowPopup(!showPopup);
    }

    return (

        <>
            <div className='toggle-nav'>
                <button className="sign-in-btn" onClick={togglePopup}>            <i class="bi bi-person-fill"></i>Sign In</button>
                {showPopup && <Signup handleClose={togglePopup} />}

            </div>






            <Headersection />

            <Bannersection />
            <Servicesection />
            <Testimonials />
            <Contactsection />
            <Footersection />
        </>
    )
}

export default Home
