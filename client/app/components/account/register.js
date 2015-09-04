import React from 'react';
import RegisterForm from './registerForm';
class Register extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="register">
                <h1>Register</h1>
                <RegisterForm />
            </div>
        );
    }
}
export default Register;