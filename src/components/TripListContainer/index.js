import React, { Component } from 'react';
import { connect } from 'react-redux';
import TripList from './TripList';

class TripListContainer extends Component {
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
export default connect(mapStateToProps)(TripListContainer);
