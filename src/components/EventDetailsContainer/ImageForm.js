import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function ImageForm(props) {
    return (
        <div className="main-form">
            <Form onSubmit={props.onSubmit}>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/*"
                    onChange={props.onChange}
                />
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
