import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

import '../assets/styles/trips.css';
import Moment from 'react-moment';

export default function TripDetails(props) {
    const trip = props.trip;
    return (
        <Jumbotron
            style={{
                background: `url(${trip.image}) no-repeat center center fixed`,
            }}
        >
            <div className="jumbotron-content">
                <h2>{trip.title}</h2>
                <h4>
                    from <Moment format="D/M/YY">{trip.startsAt}</Moment> to{' '}
                    <Moment format="D/M/YY">{trip.endsAt}</Moment>
                </h4>
                <p>{trip.note}</p>
                <p></p>
            </div>
        </Jumbotron>
    );
}
