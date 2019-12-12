import moment from 'moment';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { eventCreated, eventEdited, tripsFetched } from '../../actions';
import { getData, postData, putData } from '../../actions/dispatchHandler';
import { TRIPS_PATH } from '../../constants';
import EventForm from './EventForm';

class EventEditor extends Component {
    state = {
        id: null,
        title: '',
        destination: '',
        note: '',
        startsAt: '',
        endsAt: '',
        color: '#387D7A',
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        const date = moment(
            this.state.id ? this.state.date : this.props.slot.start
        ).format('YYYY-MM-DD');

        const startsAt = moment(date + ' ' + this.state.startsAt).format(
            'YYYY-MM-DD HH:mm:ss'
        );
        const endsAt = moment(date + ' ' + this.state.endsAt).format(
            'YYYY-MM-DD HH:mm:ss'
        );
        const updatedEvent = { ...this.state, startsAt, endsAt };
        if (this.state.id) {
            this.props
                .putData(`events`, this.state.id, eventEdited, updatedEvent)
                .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
        } else {
            this.props
                .postData(
                    `${TRIPS_PATH}/${this.props.trip.id}/events`,
                    eventCreated,
                    updatedEvent
                )
                .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
        }
    };

    componentWillReceiveProps = nextProps => {
        if (this.props.event !== nextProps.event) {
            const event = nextProps.event;
            if (event) {
                this.setState({
                    id: event.id,
                    date: moment(event.start),
                    title: event.title,
                    destination: event.destination,
                    note: event.note,
                    startsAt: moment(event.start).format('HH:mm'),
                    endsAt: moment(event.end).format('HH:mm'),
                    color: event.color,
                });
            } else {
                this.setState({
                    title: '',
                    destination: '',
                    note: '',
                    startsAt: '',
                    endsAt: '',
                    color: '#387D7A',
                });
            }
        }
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
                            <h1>
                                {this.props.event
                                    ? 'Need to change something?'
                                    : 'Add a new event to your trip!'}
                            </h1>
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

export default connect(mapStateToProps, { getData, postData, putData })(
    EventEditor
);
