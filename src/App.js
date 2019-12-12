import 'bootstrap/dist/css/bootstrap.min.css';
import lscache from 'lscache';
import React, { Component } from 'react';
// import './components/assets/styles/main.css';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getData } from './actions/dispatchHandler';
import { getUserData } from './actions/user';
import './components/assets/styles/main.css';
import CalendarContainer from './components/CalendarContainer';
import HomeContainer from './components/HomeContainer';
import LoginContainer from './components/LoginContainer';
import NavigationContainer from './components/NavigationContainer';
import SignUpContainer from './components/SignUpContainer';
import TripListContainer from './components/TripListContainer';
import { USERS_PATH } from './constants';

class App extends Component {
    lsData = lscache.get('travelin-data');

    componentDidMount = () => {
        if (this.lsData && this.lsData.user) {
            this.props.getData(
                `${USERS_PATH}?id=${this.lsData.user.id}`,
                getUserData
            );
        }
    };

    render() {
        if (!this.props.user) {
            return (
                <Container className="home">
                    <Route exact path="/" component={HomeContainer} />

                    <Route exact path="/login" component={LoginContainer} />
                    <Route exact path="/signup" component={SignUpContainer} />
                </Container>
            );
        } else {
            return (
                <>
                    <Route path="/" component={NavigationContainer} />
                    <Container className="main-container">
                        <Route
                            exact
                            path="/trips"
                            component={TripListContainer}
                        />
                        <Route
                            exact
                            path="/trips/:id"
                            component={CalendarContainer}
                        />
                    </Container>
                </>
            );
        }
    }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { getData })(App);
