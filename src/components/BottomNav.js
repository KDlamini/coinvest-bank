import React from 'react'
import { Link } from "react-router-dom";

function BottomNav() {
    return (
        <section className="bottom-table-of-content">
                <div className="get-in-touch">
                    <Link to="/" className="navlink"><img src="./images/logo.png" class="logo"/></Link>
                    <h4>Get in touch</h4>
                        <ul>
                            <li>
                                <Link to="/contact" className="navlink">Contact Us</Link>
                            </li>
                        </ul>
                    <h4>Follow us on</h4>
                        <ul className="social">
                            <li><a href="#"><i class="facebook f icon"></i></a></li>
                            <li><a href="#"><i class="twitter icon"></i></a></li>
                            <li><a href="#"><i class="instagram icon"></i></a></li>
                            <li><a href="#"><i class="linkedin icon"></i></a></li>
                            <li><a href="#"><i class="youtube icon"></i></a></li>
                        </ul>
                </div>

                <div className="bank-with-us">
                    <h4>Bank with us</h4>
                    <ul>
                        <li>
                            <Link to="/" className="navlink">Home</Link>
                        </li>
                        <li>
                            <Link to="/find-branch" className="navlink">Branch Locator</Link>
                        </li>
                        <li>
                            <Link to="/open-an-account" className="navlink">Open an Account</Link>
                        </li>
                        <li>
                            <Link to="/banking" className="navlink">Banking</Link>
                        </li>
                        <li>
                            <Link to="/business-services" className="navlink">Business Services</Link>
                        </li>
                    </ul>
                </div>

                <div className="company">
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href="/about" className="navlink">About Us</a>
                        </li>
                        <li>
                            <Link to="/help" className="navlink">Help Center</Link>
                        </li>
                    </ul>
                </div>
        </section>
    )
}

export default BottomNav
