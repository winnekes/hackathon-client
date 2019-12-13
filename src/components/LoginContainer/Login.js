import React from 'react';
import { Alert, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/styles/forms.css';

export default function Login(props) {
    return (
        <>
            <h1>Login</h1>
            <div className="main-form">
                {props.error && <Alert variant="primary">{props.error}</Alert>}
                <Form onSubmit={props.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email: </Form.Label>
                        <Form.Control
                            name="email"
                            value={props.values.email}
                            type="email"
                            onChange={props.onChange}
                            placeholder="yourname@test.com"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control
                            name="password"
                            value={props.values.password}
                            type="password"
                            onChange={props.onChange}
                            placeholder="Password"
                            required
                        />
                        <Form.Text className="text-muted">
                            <Link to="/signup">Don't have an account yet?</Link>
                        </Form.Text>
                        <Form.Text className="text-muted">
                            <Link to="/">Back home</Link>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
}
