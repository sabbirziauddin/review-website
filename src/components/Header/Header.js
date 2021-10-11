import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>


            <div className="MenuBar-container bg-info  fixed-top ">
                <div className="container ">
                    <h1>COURSE POINT</h1>
                    <div className="row">


                        <div className="col-md-6">
                            <div className="menu-container ">
                                <ul className="d-flex   align-item-center">
                                    <Link to="/home" className="items">
                                        Home
                                    </Link>

                                    <Link to="/AboutUs" className="items">
                                        About Us
                                    </Link>
                                    <Link to="/Services" className="items">
                                        Services
                                    </Link>
                                    <Link to="teacher" className="items">
                                        Teacher
                                    </Link>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>

            </div>




        </div>
    );
};

export default Header;