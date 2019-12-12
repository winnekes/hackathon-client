import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import TripForm from './TripForm';
import { TRIPS_PATH } from '../../constants';
import { tripsFetched, tripCreated } from '../../actions';
import { postData, getData } from '../../actions/dispatchHandler';
import { connect } from 'react-redux';

class TripEditor extends Component {
    state = {
        title: '',
        destination: '',
        image: '',
        note: '',
        startsAt: '',
        endsAt: '',
    };

    onSubmit = event => {
        event.preventDefault();
        this.props
            .postData(TRIPS_PATH, tripCreated, this.state)
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
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
                            <h1>Plan your trip!</h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <TripForm
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

export default connect(mapStateToProps, { getData, postData })(TripEditor);
