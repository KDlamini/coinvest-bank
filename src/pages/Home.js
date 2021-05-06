import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <h3>Bank with professionals that understand investment.</h3>
            <p>You won't work for money, money will work for you.</p>

            <ul className="home-slider">
                <li>Low interest rates</li>
                <li>No hidden fees</li>
                <li>100% transparency</li>
                <li>Transaction fees 0%</li>
            </ul>

            <div className="home-banner">
                <div className="banner-card1">
                    <img src="./images/business-people-transparent-background-thumb.png"></img>
                    <h4>Grow your business</h4>
                    <p>We offer businesses a specialised range of secure and user-friendly Business and Commercial Banking products and services.</p>
                </div>
                <div className="banner-card2">
                    <img src="./images/business-people-file-thumb.png"></img>
                    <h4>We care about your investment</h4>
                    <p>Make your money grow with our diverse range of investment management solutions. We can help you allocate your resources with great returns.</p>
                </div>
                <div className="banner-card3">
                    <img src="./images/credit-card.png"></img>
                    <h4>New credit card system</h4>
                    <p>Easy transaction micro-chips, we offer point-of-sale payment solutions suited for your business and personal needs.</p>
                </div>
            </div>
            <ul className="bank-details">
                <li>
                    <a href="#"><i className="mobile alternate icon"></i></a>
                </li>
                <li>
                    <a href="#"><i class="at icon"></i></a>
                </li>
                <li>
                    <a href="#"><i class="address book outline icon"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Home
