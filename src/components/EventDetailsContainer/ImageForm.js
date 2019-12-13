import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function ImageForm(props) {
    return (
        <div className="main-form">
            <Form onSubmit={props.onSubmit}>
                <Form.Group>
                    <Form.Label></Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="2"
                        name="note"
                        value={props.values.note}
                        type="text"
                        onChange={props.onChange}
                        placeholder={`Add a note`}
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
