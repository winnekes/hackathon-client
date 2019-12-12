import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteData, getData, postData } from '../../actions/dispatchHandler';
import Calendar from './Calendar';
import EventEditor from './EventEditor';
import TripDetails from './TripDetails';

class CalendarContainer extends Component {
    state = {
        selectedEvent: null,
        selectedDate: new Date(),
        eventEditorMode: false,
        selectedSlot: null,
    };

    onSelectEvent = event => {
        console.log(event);
        this.setState({ selectedEvent: event });
    };

    onSelectSlot = async slot => {
        await this.setState({ eventEditorMode: true });
        await this.setState({ selectedSlot: slot });
    };

    componentDidMount = () => {
        if (this.props.trip) {
            this.setState({
                selectedDate: this.props.trip.startsAt,
                selectedSlot: null,
            });
        }
    };
    render() {
        if (this.props.trip) {
            return (
                <>
                    <h1>Your trip!</h1>
                    <TripDetails trip={this.props.trip} />
                    {this.props.events && (
                        <>
                            <div className="calendar-wrap">
                                <Calendar
                                    events={this.props.events}
                                    startDate={this.state.selectedDate}
                                    onSelectSlot={this.onSelectSlot}
                                    onNavigate={date => {
                                        this.setState({ selectedDate: date });
                                    }}
                                />
                            </div>
                            {this.state.selectedSlot && (
                                <EventEditor
                                    show={this.state.eventEditorMode}
                                    onHide={() =>
                                        this.setState({
                                            eventEditorMode: false,
                                        })
                                    }
                                    slot={this.state.selectedSlot}
                                    trip={this.props.trip}
                                />
                            )}
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
export default connect(mapStateToProps, { getData, deleteData, postData })(
    CalendarContainer
);
