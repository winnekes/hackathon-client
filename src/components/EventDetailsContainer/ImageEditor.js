import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { imageUploaded, imageEdited, tripsFetched } from '../../actions';
import { getData, postData, putData } from '../../actions/dispatchHandler';
import ImageUpload from './ImageUpload';
import { BASE_URL, TRIPS_PATH } from '../../constants';
import ImageForm from './ImageForm';

class ImageEditor extends Component {
    state = {
        uploading: false,
        image: null,
        fileName: '',
        note: '',
    };

    onImageChange = e => {
        const files = Array.from(e.target.files);
        this.setState({ uploading: true });

        const formData = new FormData();

        files.forEach((file, i) => {
            formData.append('file', file);
        });

        this.props
            .postData(`images/${this.props.event.id}`, null, formData)

            .then(response => {
                console.log('Got response from image upload', response);
                if (response && response.url) {
                    this.setState({
                        image: `${BASE_URL}${response.url}`,
                        fileName: response.fileName,
                    });
                }
            });
        console.log(this.state.image);
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = event => {
        event.preventDefault();
        let fileName = this.state.fileName;
        if (this.props.selectedImage) {
            fileName = this.props.selectedImage.id;
        }
        this.props
            .putData(`images`, fileName, imageEdited, {
                note: this.state.note,
            })
            .then(() => {
                this.props.getData(TRIPS_PATH, tripsFetched);
                this.setState({
                    uploading: false,
                    image: null,
                    fileName: '',
                    note: '',
                });
            });
    };

    componentWillReceiveProps = () => {
        if (this.state.selectedImage)
            this.setState({ note: this.state.selectedImage.note });
    };
    render() {
        console.log(this.props.selectedImage);
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
                            <h1>
                                {this.state.image
                                    ? 'Notes and thoughts about this image'
                                    : this.props.selectedImage
                                    ? "Edit your picture's note"
                                    : 'Add a lovely picture!'}
                            </h1>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img
                            className="image-preview"
                            src={
                                this.state.image
                                    ? this.state.image
                                    : this.props.selectedImage
                                    ? `${BASE_URL}${this.props.selectedImage.url}`
                                    : 'http://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder.png'
                            }
                            alt=""
                        />

                        {this.state.image ? (
                            <ImageForm
                                values={this.state}
                                onSubmit={this.onSubmit}
                                onChange={this.onChange}
                                onHide={this.props.onHide}
                            />
                        ) : this.props.selectedImage ? (
                            <ImageForm
                                values={this.state}
                                onSubmit={this.onSubmit}
                                onChange={this.onChange}
                                onHide={this.props.onHide}
                                selectedImage={this.props.selectedImage}
                            />
                        ) : (
                            <ImageUpload
                                values={this.state}
                                onSubmit={this.onSubmit}
                                onImageChange={this.onImageChange}
                                onHide={this.props.onHide}
                            />
                        )}
                    </Modal.Body>
                </>

                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect(null, { getData, postData, putData })(ImageEditor);
