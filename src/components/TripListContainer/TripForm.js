import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function TripForm(props) {
    console.log(props);
    return (
        <div className="main-form">
            <Form onSubmit={props.onSubmit}>
                <Form.Group>
                    <Form.Label>Title: </Form.Label>
                    <Form.Control
                        name="title"
                        value={props.values.title}
                        type="text"
                        onChange={props.onChange}
                        placeholder="Best trip ever"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Destination </Form.Label>
                    <Form.Control
                        name="destination"
                        value={props.values.destination}
                        type="text"
                        onChange={props.onChange}
                        placeholder="Mexico ... no, New York!"
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Notes and thoughts about this trip:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="2"
                        name="note"
                        value={props.values.note}
                        type="text"
                        onChange={props.onChange}
                        placeholder={`Important things to pack:\n - underwear`}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Begin of the trip: </Form.Label>
                    <Form.Control
                        name="startsAt"
                        value={props.values.startsAt}
                        type="date"
                        onChange={props.onChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>The last day: </Form.Label>
                    <Form.Control
                        name="endsAt"
                        value={props.values.endsAt}
                        type="date"
                        onChange={props.onChange}
                        required
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Upload an image:</Form.Label>
                    <Form.Control
                        name="image"
                        value={props.values.image}
                        type="text"
                        onChange={props.onChange}
                    />
                </Form.Group>
                <Button
                    variant="secondary"
                    type="submit"
                    onClick={props.onHide}
                >
                    And away we go!
                </Button>
            </Form>
        </div>
    );
}
