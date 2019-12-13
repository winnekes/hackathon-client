import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';
export default class HomeContainer extends Component {
    render() {
        return (
            <div className="home-wrapper">
                <h1>travelin</h1>
                <h3>a trip planner and nostalgia creator</h3>
                <img
                    alt=""
                    src="https://d29fhpw069ctt2.cloudfront.net/icon/image/120281/preview.svg"
                />
                <p>
                    For the ones struck with wanderlust, and for the dreamers
                    <br />
                    <i>just keep Travelin'</i>
                </p>
                <nav>
                    <Link to="/login" className="btn btn-primary">
                        Login
                    </Link>
                    <Link to="/signup" className="btn btn-primary">
                        Sign up
                    </Link>
                </nav>
            </div>
        );
    }
}
