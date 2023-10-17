import React from 'react'
import '../styles/Testimonials.css'
import logo19 from '../assets/logo19.png'
import logo20 from '../assets/logo20.png'
import logo21 from '../assets/logo21.png'
import logo22 from '../assets/logo22.svg'
import logo23 from '../assets/logo23.svg'
import logo24 from '../assets/logo24.svg'
import profile from '../assets/profile.jpg'


const Testimonials = () => {
    return (

        <>
            <div className='testi-content'>
                <div className='testi-text'>
                    <h2>Why Use EXP-PAY</h2>
                </div>
                <div className='testi-section'>
                    <div class="card-one-testi">
                        <img id="logo19" src={logo19} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4>Fast</h4>

                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                        </div>
                    </div>
                    <div class="card-two-testi">
                        <img id="logo19" src={logo20} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4>Safe</h4>


                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                                optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                        </div>
                    </div>
                    <div class="card-one-testi">
                        <img id="logo19" src={logo21} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h4>Easy</h4>

                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                        </div>




                    </div>
                </div>
            </div>
            <div className='testi-content-two'>
                <div id="carouselExampleCaptions" class="carousel slide  slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className='testi-text-two'>
                            <h2>Testimonials</h2>
                            <button className='underline-btn'></button>
                        </div>
                        <div className='testi-section-two'>
                            <div class="card-testi-1">
                                <img id="logo22" src={logo22} class="card-img-top" alt="..." />
                                <div class="card-body">


                                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                        Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                </div>
                                <div className='testi-body1'>
                                <img id="profile" src={profile} alt="" />
                                </div>
                            </div>
                            <div class="card-testi-2">
                                <img id="logo22" src={logo23} class="card-img-top" alt="..." />
                                <div class="card-body">



                                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                                        optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                                </div>
                                <div className='testi-body2'>
                                <img id="profile" src={profile} alt="" />
                                </div>
                            </div>
                            <div class="card-testi-3">
                                <img id="logo22" src={logo24} class="card-img-top" alt="..." />
                                <div class="card-body">


                                    <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                        Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                        Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                </div>

                                <div className='testi-body'>
<img id="profile" src={profile} alt="" />
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item slide">
                            <div className='testi-text-two'>
                                <h2>Testimonials</h2>
                                <button className='underline-btn'></button>
                            </div>
                            <div className='testi-section-two'>
                                <div class="card-testi-1">
                                    <img id="logo22" src={logo22} class="card-img-top" alt="..." />
                                    <div class="card-body">


                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                            Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                    </div>
                                    <div className='testi-body1'>

                                    </div>
                                </div>
                                <div class="card-testi-2">
                                    <img id="logo22" src={logo23} class="card-img-top" alt="..." />
                                    <div class="card-body">



                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                                            optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                                    </div>
                                    <div className='testi-body2'>
                                    <img id="profile" src={profile} alt="" />
                                    </div>
                                </div>
                                <div class="card-testi-3">
                                    <img id="logo22" src={logo24} class="card-img-top" alt="..." />
                                    <div class="card-body">


                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                            Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                    </div>

                                    <div className='testi-body'>
                                    <img id="profile" src={profile} alt="" />
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="carousel-item slide">
                            <div className='testi-text-two'>
                                <h2>Testimonials</h2>
                                <button className='underline-btn'></button>
                            </div>
                            <div className='testi-section-two'>
                                <div class="card-testi-1">
                                    <img id="logo22" src={logo22} class="card-img-top" alt="..." />
                                    <div class="card-body">


                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                            Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                    </div>
                                    <div className='testi-body1'>
                                    <img id="profile" src={profile} alt="" />
                                    </div>
                                </div>
                                <div class="card-testi-2">
                                    <img id="logo22" src={logo23} class="card-img-top" alt="..." />
                                    <div class="card-body">



                                        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                            Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                                            optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                                    </div>
                                    <div className='testi-body2'>
                                    <img id="profile" src={profile} alt="" />
                                    </div>
                                </div>
                                <div class="card-testi-3">
                                    <img id="logo22" src={logo24} class="card-img-top" alt="..." />
                                    <div class="card-body">


                                        <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                            Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                                    </div>

                                    <div className='testi-body'>
                                    <img id="profile" src={profile} alt="" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                {/* <div className='testi-text-two'>
                    <h2>Testimonials</h2>
                    <button className='underline-btn'></button>
                </div>
                <div className='testi-section-two'>
                    <div class="card-testi-1">
                        <img id="logo22" src={logo22} class="card-img-top" alt="..." />
                        <div class="card-body">


                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                        </div>
                        <div className='testi-body1'>

                        </div>
                    </div>
                    <div class="card-testi-2">
                        <img id="logo22" src={logo23} class="card-img-top" alt="..." />
                        <div class="card-body">



                            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Fugit tempore, adipisci cum voluptas, suscipit maxime perspiciatis,
                                optio esse fuga placeat distinctio ab blanditiis dolores error culpa quasi quidem odit provident.</h6>
                        </div>
                        <div className='testi-body2'>

                        </div>
                    </div>
                    <div class="card-testi-3">
                        <img id="logo22" src={logo24} class="card-img-top" alt="..." />
                        <div class="card-body">


                            <h6>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Esse aliquam placeat ducimus earum sit, quos rerum omnis.
                                Earum repellendus voluptas neque porro beatae. Fugit temporibus expedita impedit libero maiores aperiam?</h6>
                        </div>

                        <div className='testi-body'>

                        </div>


                    </div> */}
            </div>

            </div>
        </>
    )
}

export default Testimonials
