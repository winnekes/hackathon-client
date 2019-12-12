import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getData, deleteData, postData } from '../../actions/dispatchHandler';
import { Jumbotron, Button } from 'react-bootstrap';
import Calendar from './Calendar';

import moment from 'moment';

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
        return (
            <>
                <Jumbotron>
                    <h1>Your trip!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style
                        component for calling extra attention to featured
                        content or information.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
                <div className="calendar-wrap">
                    <Calendar user={this.props.user} />
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        shiftEntries: state.shiftEntries,
        shiftModels: state.shiftModels,
        user: state.user,
    };
};
export default connect(mapStateToProps, { getData, deleteData, postData })(
    CalendarContainer
);
