import moment from 'moment';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaEdit, FaEye, FaEyeSlash, FaTrash } from 'react-icons/fa';
import Moment from 'react-moment';
import { BASE_URL } from '../../constants';
import '../assets/styles/events.css';

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
                            <div className="images">
                                {' '}
                                {event.images.map(image => (
                                    <div>
                                        <FaTrash
                                            onClick={() =>
                                                props.onDeleteImage(image.id)
                                            }
                                        />
                                        {image.private ? (
                                            <FaEyeSlash
                                                onClick={() =>
                                                    props.onTogglePrivacy(
                                                        image.id,
                                                        !image.private
                                                    )
                                                }
                                            />
                                        ) : (
                                            <FaEye
                                                onClick={() =>
                                                    props.onTogglePrivacy(
                                                        image.id,
                                                        !image.private
                                                    )
                                                }
                                            />
                                        )}
                                        <img
                                            key={image.id}
                                            className="thumbnail"
                                            alt={image.note}
                                            src={`${BASE_URL}${image.url}`}
                                            onClick={() => {
                                                props.onSelectImage(image);
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </Card.Text>
                        <Button onClick={() => props.imageEditMode('add')}>
                            Add images
                        </Button>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}
