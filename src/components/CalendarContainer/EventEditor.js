import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EventForm from './EventForm';

export default class EventEditor extends Component {
    state = {
        title: '',
        destination: '',

        note: '',
        startsAt: '',
        endsAt: '',
        image: '',
        color: '#387D7A',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1>Add an event!</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EventForm
                            values={this.state}
                            onSubmit={this.onSubmit}
                            onChange={this.onChange}
                            onHide={this.props.onHide}
                        />
                    </Modal.Body>
                </>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
