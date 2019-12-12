import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import '../assets/styles/trips.css';
import Moment from 'react-moment';
import moment from 'moment';

export default function TripList(props) {
    return (
        <div className="trips-container">
            <h1>All your trips</h1>
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
                            <Moment format="D. MMM. 'YY">
                                {trip.startsAt}
                            </Moment>{' '}
                            to{' '}
                            <Moment format="D. MMM. 'YY">{trip.endsAt}</Moment>
                        </h4>
                        <p>{trip.note}</p>
                        <p>
                            <Button variant="primary">Learn more</Button>
                        </p>
                    </div>
                </Jumbotron>
            ))}
        </div>
    );
}
