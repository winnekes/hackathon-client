import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../assets/styles/forms.css';

export default function ImageUpload(props) {
    return (
        <div className="main-form">
            <Form onSubmit={props.onSubmit}>
                <input
                    type="file"
                    id="file"
                    name="file"
                    accept="image/jpeg,image/jpg"
                    onChange={props.onImageChange}
                />
            </Form>
        </div>
    );
}
