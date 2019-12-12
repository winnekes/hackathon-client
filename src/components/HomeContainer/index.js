import React, { Component } from 'react';
import '../assets/styles/home.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default class HomeContainer extends Component {
    render() {
        return (
            <>
                <h1>travelin</h1>
                <img
                    alt=""
                    src="https://d29fhpw069ctt2.cloudfront.net/icon/image/120281/preview.svg"
                />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc pharetra sollicitudin dolor. Fusce sagittis dignissim
                    condimentum. Cras mollis sodales euismod. Quisque semper
                    nibh in dolor convallis elementum. Integer suscipit ligula
                    ut odio volutpat, sagittis dignissim nisl eleifend. Nullam
                    molestie enim ullamcorper risus sollicitudin cursus.
                    Curabitur congue lacinia arcu.
                </p>
                <nav>
                    <Link to="/login" className="btn btn-info">
                        Login
                    </Link>
                    <Link to="/signup" className="btn btn-info">
                        Sign up
                    </Link>
                </nav>
            </>
        );
    }
}
