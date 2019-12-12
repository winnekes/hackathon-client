import React, { Component } from 'react';
import EventDetails from './EventDetails';

export default class EventDetailsContainer extends Component {
    render() {
        return (
            <EventDetails
                event={this.props.event}
                editMode={this.props.editMode}
                deleteEvent={this.props.deleteEvent}
            />
        );
    }
}
