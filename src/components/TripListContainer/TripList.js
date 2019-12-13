import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import '../assets/styles/trips.css';

import TripEditor from './TripEditor';

export default function TripList(props) {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="trips-container">
            <h1>Here are all your trips, {props.user.username}</h1>
            {props.trips.map(trip => (
                <Jumbotron
                    key={trip.id}
                    style={{
                        background: `url(${trip.image}) no-repeat center `,
                    }}
                >
                    <div className="jumbotron-content">
                        <header>
                            <h2>{trip.title}</h2>
                            <h4>
                                from{' '}
                                <Moment format="D/M/YY">{trip.startsAt}</Moment>{' '}
                                to{' '}
                                <Moment format="D/M/YY">{trip.endsAt}</Moment>
                            </h4>
                            <p>{trip.note}</p>
                            <p>
                                <Link
                                    to={`/trips/${trip.id}`}
                                    className="btn btn-primary"
                                >
                                    View your trip
                                </Link>
                            </p>
                        </header>
                    </div>
                </Jumbotron>
            ))}
            <Button variant="" onClick={() => setModalShow(true)}>
                Create a new trip
            </Button>
            <TripEditor show={modalShow} onHide={() => setModalShow(false)} />
        </div>
    );
}
