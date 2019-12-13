import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/styles/forms.css';
export default function SignUp(props) {
    return (
        <>
            <h1>Sign up</h1>
            <div className="main-form" autoComplete="off">
                {props.error && <Alert variant="primary">{props.error}</Alert>}
                <Form onSubmit={props.onSubmit}>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            name="username"
                            value={props.values.username}
                            type="text"
                            onChange={props.onChange}
                            placeholder="Username"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            variant="info"
                            name="email"
                            value={props.values.email}
                            type="email"
                            onChange={props.onChange}
                            placeholder="Your email"
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            name="password"
                            value={props.values.password}
                            type="password"
                            onChange={props.onChange}
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicProfileUrl">
                        <Form.Label>Link to profile image</Form.Label>
                        <Form.Control
                            name="profileUrl"
                            value={props.values.profileUrl}
                            type="url"
                            onChange={props.onChange}
                        />
                        <Form.Text className="text-muted">
                            <Link to="/login">Login</Link>
                        </Form.Text>
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Sign up
                    </Button>
                </Form>
            </div>
        </>
    );
}
