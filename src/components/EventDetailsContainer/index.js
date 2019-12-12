import React, { Component } from 'react';
import EventDetails from './EventDetails';
import ImageEditor from './ImageEditor';

export default class EventDetailsContainer extends Component {
    state = {
        imageEditorMode: false,
    };

    onImageEditMode = () => {
        this.setState({ imageEditorMode: true });
    };
    render() {
        return (
            <>
                <EventDetails
                    event={this.props.event}
                    editMode={this.props.editMode}
                    deleteEvent={this.props.deleteEvent}
                    imageEditMode={this.onImageEditMode}
                />

                <ImageEditor
                    show={this.state.imageEditorMode}
                    onHide={() =>
                        this.setState({
                            imageEditorMode: false,
                        })
                    }
                    event={this.props.event}
                />
            </>
        );
    }
}
