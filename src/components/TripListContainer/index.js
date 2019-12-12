import lscache from 'lscache';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { tripsFetched } from '../../actions';
import { getUserData } from '../../actions/user';
import { getData } from '../../actions/dispatchHandler';
import { TRIPS_PATH, USERS_PATH } from '../../constants';
import TripList from './TripList';

class TripListContainer extends Component {
    lsData = lscache.get('travelin-data');

    componentDidMount = () => {
        if (this.lsData && this.lsData.user) {
            this.props.getData(
                `${USERS_PATH}?id=${this.lsData.user.id}`,
                getUserData
            );
            this.props.getData(TRIPS_PATH, tripsFetched);
        }
    };

    render() {
        return <TripList trips={this.props.trips} user={this.props.user} />;
    }
}

const mapStateToProps = state => {
    return {
        trips: state.trips,
        user: state.user,
    };
};
export default connect(mapStateToProps, { getData })(TripListContainer);
