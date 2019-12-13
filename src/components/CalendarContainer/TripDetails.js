import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import Moment from 'react-moment';
import '../assets/styles/trips.css';
import MemberEditor from './MemberEditor';

import {
    FaEdit,
    FaTrash,
    FaEye,
    FaEyeSlash,
    FaPlay,
    FaPlus,
} from 'react-icons/fa';

export default function TripDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const trip = props.trip;
    return (
        <Jumbotron
            style={{
                background: `url(${trip.image}) no-repeat center center fixed`,
            }}
        >
            <div className="jumbotron-content">
                <header>
                    <h2>{trip.title}</h2>
                    <h4>
                        from <Moment format="D/M/YY">{trip.startsAt}</Moment> to{' '}
                        <Moment format="D/M/YY">{trip.endsAt}</Moment>
                    </h4>
                    <nav>
                        <FaEdit className="icon" />
                        <FaTrash className="icon" />{' '}
                        {trip.private ? (
                            <FaEyeSlash
                                className="icon"
                                onClick={() =>
                                    props.onTogglePrivacy(
                                        trip.id,
                                        !trip.private
                                    )
                                }
                            />
                        ) : (
                            <>
                                <FaEye
                                    onClick={() =>
                                        props.onTogglePrivacy(
                                            trip.id,
                                            !trip.private
                                        )
                                    }
                                />
                                <FaPlay
                                    className="icon"
                                    onClick={() =>
                                        window.open(
                                            `/slideshow/${trip.id}`,
                                            '_blank'
                                        )
                                    }
                                />
                                <FaPlus
                                    className="icon"
                                    onClick={() => setModalShow(true)}
                                />
                            </>
                        )}
                    </nav>
                    <p>Note: {trip.note}</p>
                </header>

                <MemberEditor
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    trip={trip}
                />
            </div>
        </Jumbotron>
    );
}
