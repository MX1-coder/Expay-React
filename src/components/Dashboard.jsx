import React from 'react'
import { Link } from 'react-router-dom'
import logo5 from '../assets/logo5.png'
import logo37 from '../assets/logo37.svg'
import logo38 from '../assets/logo38.svg'
import logo39 from '../assets/logo39.svg'
import '../styles/Dashboard.css'

const Dashboard = () => {
    return (

        <>
            <nav class="navbar navbar-section-two">

                <a class="navbar-brand" href="#"></a>
                <button class="navbar-toggler navbar-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><i class="bi bi-person-fill"></i>Log in

                </button>

            </nav>
            <nav className="navbar navbar-section">
                <div className="container-fluid">
                    <span>
                        <img id="logo5" src={logo5} alt="" />
                        <ul>
                            <Link to={'/Home'}><span><li>Home</li></span></Link>
                            <Link to={'/Dashboard'}><span><li>Dashboard</li></span></Link>
                            <Link to={'/Walletsection'}><li>Wallet</li></Link>
                            <Link to={'/Business'}><li>Business</li></Link>
                            <Link to={'/Exchangesection'}><li>Exchange</li></Link>
                            <Link to={'/Withdraw'}><li>Withdraw</li></Link>
                            <Link to={'/More'}><li>More <i class="bi bi-chevron-down"></i></li></Link>
                        </ul>
                    </span>
                </div>
            </nav>


            <div className='dashboard-section'>
                <div className='dashboard-cards'>
                    <div class="dash-details">
                        <h6>EXE PAY BALANCE: </h6>
                    </div>
                    <div class="dash-details">
                        <h6>NO.OF TRANSACTION: </h6>


                    </div>
                    <div class="dash-details">

                        <h6>ESCROW SYSTEM USED: </h6>

                    </div>
                    <div class="dash-details">

                        <h6>ACCOUNT TYPE: </h6>

                    </div>


                </div>
                <div className='dashboard-cards-two'>
                    <div class="dash-details-two">
                        <h6>ACCOUNT NUMBER:</h6>
                    </div>
                    <div class="dash-details-two">
                        <h6>WALLET BALANCE: </h6>


                    </div>
                    <div class="dash-details-two">

                        <h6>HOLD BALANCE:</h6>

                    </div>
                    <div class="dash-details-two">

                        <h6>TRADE PROFIT:</h6>

                    </div>


                </div>

                <div className='dash-card'>


                    <div class="card dash-cards">
                        <img id="logo37" src={logo37} class="card-img-top" alt="..." />

                    </div>

                    <div class="card dash-cards">
                        <img id="logo37" src={logo38} class="card-img-top" alt="..." />

                    </div>

                    <div class="card dash-cards">
                        <img id="logo37" src={logo39} class="card-img-top" alt="..." />

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

export default Dashboard
