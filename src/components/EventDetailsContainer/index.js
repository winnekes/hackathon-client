import React, { Component } from 'react';
import { connect } from 'react-redux';
import { imageEdited, tripsFetched, imageDeleted } from '../../actions';
import {
    deleteData,
    getData,
    postData,
    putData,
} from '../../actions/dispatchHandler';
import { TRIPS_PATH } from '../../constants';
import EventDetails from './EventDetails';
import ImageEditor from './ImageEditor';

class EventDetailsContainer extends Component {
    state = {
        imageEditorMode: false,
        selectedImage: null,
    };

    onSelectImage = image => {
        this.setState({ selectedImage: image });
        this.onImageEditMode();
    };

    onImageEditMode = (mode = null) => {
        this.setState({ imageEditorMode: true });
        if (mode === 'add') {
            this.setState({ selectedImage: null });
        }
    };

    onTogglePrivacy = (fileName, newPrivateState) => {
        this.props
            .putData('images', fileName, imageEdited, {
                private: newPrivateState,
            })
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
    };

    onDeleteImage = id => {
        this.props
            .deleteData('images', id, imageDeleted)
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
        this.setState({ selectedEvent: null });
    };

    render() {
        return (
            <>
                <EventDetails
                    event={this.props.event}
                    editMode={this.props.editMode}
                    deleteEvent={this.props.deleteEvent}
                    imageEditMode={this.onImageEditMode}
                    onTogglePrivacy={this.onTogglePrivacy}
                    onDeleteImage={this.onDeleteImage}
                    onSelectImage={this.onSelectImage}
                />

                <ImageEditor
                    show={this.state.imageEditorMode}
                    onHide={() =>
                        this.setState({
                            imageEditorMode: false,
                        })
                    }
                    event={this.props.event}
                    selectedImage={this.state.selectedImage}
                />
            </>
        );
    }
}

export default connect(null, {
    getData,
    deleteData,
    postData,
    putData,
})(EventDetailsContainer);
