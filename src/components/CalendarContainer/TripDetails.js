import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import Moment from 'react-moment';
import '../assets/styles/trips.css';
import MemberEditor from './MemberEditor';

import { FaEdit, FaTrash, FaEye, FaEyeSlash, FaPlay } from 'react-icons/fa';

export default function TripDetails(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const trip = props.trip;
    return (
        <Jumbotron
            style={{
                background: `url(${trip.image}) no-repeat center center`,
            }}
        >
            <div className="jumbotron-content">
                <h2>
                    {trip.title} <FaEdit />
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
                        </>
                    )}
                </h2>
                <h4>
                    from <Moment format="D/M/YY">{trip.startsAt}</Moment> to{' '}
                    <Moment format="D/M/YY">{trip.endsAt}</Moment>
                </h4>
                <p>{trip.note}</p>
                <p>
                    the folks who are going with you:{' '}
                    {trip.members.map((member, index) => {
                        if (index === trip.members.length - 1) {
                            return (
                                <>
                                    {' '}
                                    and{' '}
                                    <span key={index}>{member.username}</span>
                                </>
                            );
                        }
                        return (
                            <>
                                <span>{member.username}</span>,
                            </>
                        );
                    })}
                </p>
                <Button onClick={() => setModalShow(true)}>
                    add a traveler
                </Button>

                <MemberEditor
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    trip={trip}
                />
            </div>
        </Jumbotron>
    );
}
