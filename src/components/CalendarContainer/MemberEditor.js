import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import MemberForm from './MemberForm';
import { TRIPS_PATH } from '../../constants';
import { memberAdded, tripsFetched } from '../../actions';
import { postData, getData } from '../../actions/dispatchHandler';
import { connect } from 'react-redux';

class MemberEditor extends Component {
    state = {
        username: '',
    };

    onSubmit = event => {
        event.preventDefault();

        this.props
            .postData(
                `${TRIPS_PATH}/${this.props.trip.id}/member`,
                memberAdded,
                this.state
            )
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
                            <h1>
                                Who's travelling with you to{' '}
                                {this.props.trip.destination}?
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <MemberForm
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

export default connect(mapStateToProps, { getData, postData })(MemberEditor);
