import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Login from './Login';
import { Alert } from 'react-bootstrap';
import { LOGIN_PATH } from '../../constants';
import { postData } from '../../actions/dispatchHandler';
import { login, loginResponseTransformer } from '../../actions/user';

class LoginContainer extends Component {
    state = { email: '', password: '' };

    onSubmit = event => {
        event.preventDefault();

        this.props
            .postData(LOGIN_PATH, login, this.state, loginResponseTransformer)
            .then(response => {
                if (response) {
                    this.props.history.push('/trips');
                } else {
                    this.setState({
                        error:
                            'Are you sure you put in your information correctly? Please try again',
                    });
                }
            });
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    render() {
        return (
            <Login
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                error={this.state.error}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    };
};
export default connect(mapStateToProps, { postData })(LoginContainer);
