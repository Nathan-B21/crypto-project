import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";

const Navbar = () =>{

    return(
        <div className = "align-items-center">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="navbar justify-content-between" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home</a>
                        <a class="nav-item nav-link" href="#">Features</a>
                        <a class="nav-item nav-link" href="#">Pricing</a>
                        <form className="from-inline">
                            <input type = "text" id= "myInput" onKeyUp="searchFilter()" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-success" type = "submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Navbar;