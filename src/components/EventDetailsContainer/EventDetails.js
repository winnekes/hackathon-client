import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Moment from 'react-moment';
import moment from 'moment';

import { FaEdit, FaTrash } from 'react-icons/fa';

export default function EventDetails(props) {
    const event = props.event;
    let startDate;
    let endDate;
    if (event) {
        startDate = moment(event.start).format('MM-DD-YYYY');
        endDate = moment(event.end).format('MM-DD-YYYY');
    }
    return (
        <div className="event-details">
            <h2>Event details</h2>
            {!event && <p>Select an event to view</p>}
            {event && (
                <Card
                    style={{
                        width: '16rem',
                    }}
                >
                    <Card.Body>
                        <Card.Title>
                            {event.title} <FaEdit onClick={props.editMode} />
                            <FaTrash
                                onClick={() => props.deleteEvent(event.id)}
                            />
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {event.note}
                        </Card.Subtitle>
                        <Card.Text>
                            {startDate === endDate && (
                                <>
                                    <Moment format="DD MMMM YYYY">
                                        {event.start}
                                    </Moment>
                                    <br />
                                    <Moment format="hh:mm a">
                                        {event.start}
                                    </Moment>{' '}
                                    -{' '}
                                    <Moment format="hh:mm a">
                                        {event.end}
                                    </Moment>
                                </>
                            )}
                            {startDate !== endDate && (
                                <>
                                    <Moment format="DD">{event.start}</Moment> -{' '}
                                    <Moment format="DD MMMM YYYY">
                                        {event.end}
                                    </Moment>
                                    <br />
                                    <Moment format="hh:mm a">
                                        {event.start}
                                    </Moment>{' '}
                                    -{' '}
                                    <Moment format="hh:mm a">
                                        {event.end}
                                    </Moment>
                                </>
                            )}
                        </Card.Text>
                        <Button>Add images</Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}
