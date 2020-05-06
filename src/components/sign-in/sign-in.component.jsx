import React from 'react';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name='email'
                        type='email'
                        value={email}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor=''>Email</label>
                    <input
                        name='password'
                        type='password'
                        value={password}
                        onChange={this.handleChange}
                        required
                    />
                    <label htmlFor=''>Password</label>
                    <input type='submit' value='Submit form' />
                </form>
            </div>
        );
    }
}

export default SignIn;
