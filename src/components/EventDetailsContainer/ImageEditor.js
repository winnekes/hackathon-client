import moment from 'moment';
import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { eventCreated, eventEdited, tripsFetched } from '../../actions';
import { getData, postData, putData } from '../../actions/dispatchHandler';
import { TRIPS_PATH } from '../../constants';
import EventForm from './ImageForm';

class ImageEditor extends Component {
    state = {
        uploading: false,
        images: [],
    };

    onChange = e => {
        const files = Array.from(e.target.files);
        this.setState({ uploading: true });

        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append('file', file);
        });

        this.props
            .postData(`images/${this.props.event.id}`, null, formData)

            .then(response => console.log(response));
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.postData('/images');
    };

    render() {
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <>
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            <h1>Add some lovely pictures!</h1>
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
    ImageEditor
);
