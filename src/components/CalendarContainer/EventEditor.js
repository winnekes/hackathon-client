import moment from 'moment';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { eventCreated, tripsFetched } from '../../actions';
import { getData, postData } from '../../actions/dispatchHandler';
import { TRIPS_PATH } from '../../constants';
import EventForm from './EventForm';

class EventEditor extends Component {
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

    onSubmit = event => {
        event.preventDefault();
        const date = moment(this.props.slot.start).format('YYYY-MM-DD');

        const startsAt = moment(date + ' ' + this.state.startsAt).format(
            'YYYY-MM-DD HH:mm:ss'
        );
        const endsAt = moment(date + ' ' + this.state.endsAt).format(
            'YYYY-MM-DD HH:mm:ss'
        );
        const updatedEvent = { ...this.state, startsAt, endsAt };

        event.preventDefault();
        this.props
            .postData(
                `${TRIPS_PATH}/${this.props.trip.id}/events`,
                eventCreated,
                updatedEvent
            )
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
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
const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { getData, postData })(EventEditor);
