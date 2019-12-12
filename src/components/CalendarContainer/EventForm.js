import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function EventForm(props) {
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
                        placeholder=""
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Destination: </Form.Label>
                    <Form.Control
                        name="destination"
                        value={props.values.destination}
                        type="text"
                        onChange={props.onChange}
                        placeholder=""
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Notes and thoughts about this event:
                    </Form.Label>
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
                    <Form.Label>Start</Form.Label>
                    <Form.Control
                        name="startsAt"
                        value={props.values.startsAt}
                        type="time"
                        onChange={props.onChange}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>End: </Form.Label>
                    <Form.Control
                        name="endsAt"
                        value={props.values.endsAt}
                        type="time"
                        onChange={props.onChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formBasicColor">
                    <Form.Label>Color: </Form.Label>
                    <Form.Control
                        name="color"
                        value={props.values.color}
                        type="color"
                        onChange={props.onChange}
                        required
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
