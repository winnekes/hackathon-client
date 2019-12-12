import React from 'react';

import { Jumbotron, Button } from 'react-bootstrap';

import '../assets/styles/trips.css';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import MemberEditor from './MemberEditor';
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
                <h2>{trip.title}</h2>
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
                                    and <span>{member.username}</span>
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
