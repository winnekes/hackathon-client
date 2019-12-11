import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import lscache from 'lscache';

import CalendarContainer from './components/Calendar';
import HomeContainer from './components/Home/Home';
import LoginContainer from './components/Login';
import NavigationContainer from './components/Navigation';
import SignUpContainer from './components/SignUp';

import { getUserData, getUserDataResponseTransformer } from './actions/user';
import { getData } from './actions/dispatchHandler';
import { USERS_PATH } from './constants';

// import './components/assets/styles/main.css';
import { Container } from 'react-bootstrap';

class App extends Component {
    lsData = lscache.get('simplyshift-data');
    componentDidMount = () => {
        if (this.lsData && this.lsData.user) {
            this.props.getData(
                `${USERS_PATH}?id=${this.lsData.user.id}`,
                getUserData
            );
        }
    };

    render() {
        return (
            <>
                <Route path="/" component={NavigationContainer} />
                <Container className="main-container"></Container>
            </>
        );
    }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps, { getData })(App);
