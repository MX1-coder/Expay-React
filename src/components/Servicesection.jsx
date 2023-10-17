import React from 'react';
import logo6 from '../assets/logo6.png';
import logo7 from '../assets/logo7.png';
import logo8 from '../assets/image5.png';
import '../styles/Servicesection.css'

const Servicesection = () => {
    return (
        <div className='service'>
            <div className='service-text'>
                <h2>Services</h2>
                <button className='underline-btn'></button>

            </div>
            <div className='card-section'>
                <div class="card-one">
                    <img id="logo6" src={logo6} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4>Escrow Payments</h4>
                        <p>Attention to Detail</p>
                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                            Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                    </div>
                </div>
                <div class="card-two">
                    <img id="logo7" src={logo7} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4>Class Action Settlement</h4>
                        <h4>Distributions</h4>
                        <p>Expert Service</p>
                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                            optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                    </div>
                </div>
                <div class="card-three">
                    <img id="logo8" src={logo8} class="card-img-top" alt="..." />



                </div>
            </div>
        </div>
    )
}

export default Servicesection
