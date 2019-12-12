import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function MemberForm(props) {
    console.log(props);
    return (
        <div className="main-form">
            <Form onSubmit={props.onSubmit}>
                <Form.Group>
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        name="username"
                        value={props.values.username}
                        type="text"
                        onChange={props.onChange}
                        placeholder="Barney"
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
