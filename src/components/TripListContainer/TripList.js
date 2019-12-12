import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/styles/trips.css';
import Moment from 'react-moment';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function TripList(props) {
    return (
        <div className="trips-container">
            <h1>Here are all your trips, {props.user.username}</h1>
            {props.trips.map(trip => (
                <Jumbotron
                    style={{
                        background: `url(${trip.image}) no-repeat center center fixed`,
                    }}
                >
                    <div className="jumbotron-content">
                        <h2>{trip.title}</h2>
                        <h4>
                            from{' '}
                            <Moment format="D/M/YY">{trip.startsAt}</Moment> to{' '}
                            <Moment format="D/M/YY">{trip.endsAt}</Moment>
                        </h4>
                        <p>{trip.note}</p>
                        <p>
                            <Link
                                to={`/trips/${trip.id}`}
                                className="btn btn-primary"
                            >
                                View your trip calendar
                            </Link>
                        </p>
                    </div>
                </Jumbotron>
            ))}
        </div>
    );
}
