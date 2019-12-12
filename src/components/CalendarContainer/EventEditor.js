import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import EventForm from './EventForm';
import moment from 'moment';
import { timeout } from 'q';
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
        console.log(this.state);
    };

    onSubmit = event => {
        event.preventDefault();
        const date = moment(this.props.slot.date).format('YYYY-MM-DD');
        console.log(date);
        const startsAt = moment(date + ' ' + this.state.startsAt).format(
            'YYYY-MMMM-DDDD HH:mm:ss'
        );
        const endsAt = moment(date + ' ' + this.state.endsAt).format(
            'YYYY-MMMM-DDDD HH:mm:ss'
        );
        const events = { ...this.state, startsAt, endsAt };
        console.log(events);
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
