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
                background: `url(${trip.image}) `,
            }}
        >
            <div className="jumbotron-content">
                <h2>{trip.title}</h2>
                <h4>
                    from <Moment format="D/M/YY">{trip.startsAt}</Moment> to{' '}
                    <Moment format="D/M/YY">{trip.endsAt}</Moment>
                </h4>
                <nav>
                    <FaEdit />
                    <FaTrash />{' '}
                    {trip.private ? (
                        <FaEyeSlash
                            onClick={() =>
                                props.onTogglePrivacy(trip.id, !trip.private)
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
                                onClick={() =>
                                    window.open(
                                        `/slideshow/${trip.id}`,
                                        '_blank'
                                    )
                                }
                            />
                            <FaPlus onClick={() => setModalShow(true)} />
                        </>
                    )}
                </nav>
                <p>{trip.note}</p>

                <MemberEditor
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    trip={trip}
                />
            </div>
        </Jumbotron>
    );
}
