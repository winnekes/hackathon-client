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
    onNavigate = (a, b, c) => {
        console.log(a, b, c);
    };
    onSelectEvent = event => {
        console.log(event);
        this.setState({ selectedEvent: event });
    };

    onSelectSlot = slot => {
        this.setState({ eventEditorMode: true, selectedSlot: slot });
    };

    /*     onDeleteModel = id => {
        this.props
            .deleteData(SHIFT_MODELS_PATH, id, shiftModelDeleted)
            .then(() =>
                this.props.getData(SHIFT_MODELS_PATH, shiftModelsFetched)
            );
    };
    onDeleteEntry = id => {
        this.props
            .deleteData(SHIFT_ENTRIES_PATH, id, shiftEntryDeleted)
            .then(() =>
                this.props.getData(SHIFT_ENTRIES_PATH, shiftEntriesFetched)
            )
            .then(() => this.setState({ selectedEvent: null }));
    }; */

    componentDidMount = () => {
        if (this.props.trip) {
            this.setState({ selectedDate: this.props.trip.startsAt });
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
                            <EventEditor
                                show={this.state.eventEditorMode}
                                onHide={() =>
                                    this.setState({ eventEditorMode: false })
                                }
                                slot={this.state.selectedSlot}
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
};
export default connect(mapStateToProps, { getData, deleteData, postData })(
    CalendarContainer
);
