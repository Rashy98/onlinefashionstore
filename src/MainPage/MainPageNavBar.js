import React, {Component} from "react";


class MainPageNavBar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="">
                    <img src="https://c7.uihere.com/files/371/129/128/fashion-cardigan-concept-store-shorts-designer-om-logo.jpg" width="30" height="30"
                         className="d-inline-block align-top" alt=""/>
                </a>

                <a className="navbar-brand" href="#">Fashion Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active" >
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Promotions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse float-right d-flex flex-row-reverse" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Sign Up</a>
                        </li>
                        <button type="button" className="btn btn-success">Cart</button>

                    </ul>
                </div>
            </nav>
        );
    }
}

export default MainPageNavBar;

