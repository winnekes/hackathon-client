import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteData, getData, postData } from '../../actions/dispatchHandler';
import Calendar from './Calendar';
import TripDetails from './TripDetails';

class CalendarContainer extends Component {
    state = {
        selectedEvent: null,
    };
    /*    onNavigate = date => {
        this.props.getData(
            `${SHIFT_ENTRIES_PATH}?month=${date}`,
            shiftEntriesFetched
        );
    };
    onSelectEvent = event => {
        console.log(event);
        this.setState({ selectedEvent: event });
    };

    onSelectModel = model => {
        this.setState({ selectedModel: model });
    };

    onSelectSlot = slot => {
        if (this.state.selectedModel) {
            console.log(this.state.selectedModel, slot);

            const modifiedData = {
                shiftModel: this.state.selectedModel.id,
                startsAt: moment(slot.start).toLocaleString(),
            };

            this.props
                .postData(SHIFT_ENTRIES_PATH, shiftEntryCreated, modifiedData)
                .then(() =>
                    this.props.getData(SHIFT_ENTRIES_PATH, shiftEntriesFetched)
                );
        }
    };
 */
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

    componentDidMount = () => {};
    render() {
        console.log('MY TRIP', this.props.trip);
        if (this.props.trip) {
            return (
                <>
                    <h1>Your trip!</h1>
                    <TripDetails trip={this.props.trip} />
                    {this.props.events && (
                        <div className="calendar-wrap">
                            <Calendar events={this.props.events} />
                        </div>
                    )}
                </>
            );
        } else {
            return <p>Loading ...</p>;
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    const trip = state.trips.find(trip => trip.id == ownProps.match.params.id);
    console.log(trip);
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
