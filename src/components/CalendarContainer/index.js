import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    deleteData,
    getData,
    postData,
    putData,
} from '../../actions/dispatchHandler';
import Calendar from './Calendar';
import EventEditor from './EventEditor';
import TripDetails from './TripDetails';
import EventDetailsContainer from '../EventDetailsContainer';
import { eventDeleted, tripsFetched, tripEdited } from '../../actions';
import { TRIPS_PATH } from '../../constants';
import { FaPlus } from 'react-icons/fa';
class CalendarContainer extends Component {
    state = {
        selectedEvent: null,
        selectedDate: new Date(),
        eventEditorMode: false,
        selectedSlot: null,
    };

    onSelectEvent = async event => {
        await this.setState({ selectedEvent: event });
    };

    onSelectSlot = slot => {
        this.setState({
            selectedEvent: null,
            selectedSlot: slot,
            eventEditorMode: true,
        });
    };

    onEditEvent = () => {
        this.setState({ selectedSlot: null, eventEditorMode: true });
    };

    onDeleteEvent = id => {
        this.props
            .deleteData(`events`, id, eventDeleted)
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
        this.setState({ selectedEvent: null });
    };

    componentDidMount = () => {
        if (this.props.trip) {
            this.setState({
                selectedDate: this.props.trip.startsAt,
            });
        }
    };

    onTogglePrivacy = (id, newPrivateState) => {
        this.props
            .putData(TRIPS_PATH, id, tripEdited, { private: newPrivateState })
            .then(() => this.props.getData(TRIPS_PATH, tripsFetched));
    };

    render() {
        if (this.props.trip) {
            return (
                <>
                    <h1>Your trip!</h1>
                    <p>
                        the folks who are going with you:{' '}
                        {this.props.trip &&
                            this.props.trip.members.map((member, index) => {
                                if (
                                    index ===
                                    this.props.trip.members.length - 1
                                ) {
                                    return (
                                        <>
                                            {' '}
                                            and{' '}
                                            <span key={index}>
                                                {member.username}
                                            </span>
                                        </>
                                    );
                                }
                                return (
                                    <>
                                        <span>{member.username}</span>,
                                    </>
                                );
                            })}{' '}
                        <FaPlus />
                    </p>
                    <TripDetails
                        trip={this.props.trip}
                        onTogglePrivacy={this.onTogglePrivacy}
                    />
                    {this.props.events && (
                        <>
                            <div className="calendar-wrap">
                                <Calendar
                                    events={this.props.events}
                                    startDate={this.state.selectedDate}
                                    onSelectSlot={this.onSelectSlot}
                                    onSelectEvent={this.onSelectEvent}
                                    onNavigate={date => {
                                        this.setState({ selectedDate: date });
                                    }}
                                />
                                <EventDetailsContainer
                                    event={this.state.selectedEvent}
                                    editMode={this.onEditEvent}
                                    deleteEvent={this.onDeleteEvent}
                                />
                            </div>

                            <EventEditor
                                show={this.state.eventEditorMode}
                                onHide={() =>
                                    this.setState({
                                        eventEditorMode: false,
                                    })
                                }
                                slot={this.state.selectedSlot}
                                event={this.state.selectedEvent}
                                trip={this.props.trip}
                            />
                        </>
                    )}
                </>
            );
        } else {
            return <p>Loading ...</p>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    const trip = state.trips.find(
        trip => trip.id === parseInt(ownProps.match.params.id)
    );
    if (trip) {
        return {
            user: state.user,
            trip,
            events: trip.events.map(event => ({
                id: event.id,
                title: event.title,
                start: event.startsAt,
                end: event.endsAt,
                ...event,
            })),
        };
    }
    return {};
};
export default connect(mapStateToProps, {
    getData,
    deleteData,
    postData,
    putData,
})(CalendarContainer);
