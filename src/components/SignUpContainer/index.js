import React, { Component } from 'react';
import { connect } from 'react-redux';

import SignUp from './SignUp';

import { USERS_PATH } from '../../constants';
import { postData } from '../../actions/dispatchHandler';

class SignUpContainer extends Component {
    state = {
        email: '',
        username: '',
        password: '',
        profileUrl: '',
        error: '',
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.postData(USERS_PATH, null, this.state).then(response => {
            if (response) {
                this.setState({ error: '' });
                this.props.history.push('/login');
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
    componentDidMount = () => {
        this.setState({
            email: '',
            username: '',
            password: '',
            profileUrl: '',
            error: '',
        });
    };
    render() {
        return (
            <SignUp
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                values={this.state}
                error={this.state.error}
            />
        );
    }
}

export default connect(null, { postData })(SignUpContainer);
