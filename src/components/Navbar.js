import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/" className="navlink"><img src="./images/logo.png" class="logo"/></Link>
            <div className="main-nav-tab">
                <div className="nav-tab-top">
                    <ul>
                        <li>
                            <Link to="/find-branch" className="navlink">Find Branch</Link>
                        </li>
                        <li>
                            <Link to="/help" className="navlink">Help Center</Link>
                        </li>
                        <li>
                            <a href="tel:012 346 8801" className="navlink">012 346 8801</a>
                        </li>
                        <li>
                            <Link to="/account" className="navlink">Account</Link>
                        </li>
                    </ul>
                </div>

                <div className="nav-tab-bottom">
                    <ul>
                        <li>
                            <Link to="/open-an-account" className="navlink">Open an Account</Link>
                        </li>
                        <li>
                            <Link to="/banking" className="navlink">Banking</Link>
                        </li>
                        <li>
                            <Link to="/business-services" className="navlink">Business Services</Link>
                        </li>
                        <li>
                            <a href="/about" className="navlink">About</a>
                        </li>
                        <li>
                            <Link to="/contact" className="navlink">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

