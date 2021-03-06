import React from 'react';
import InputField from 'app/common/inputField';
import userApi from 'app/Apis/usersApi';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                username: "",
                password: ""
        };
    }

    handleChange(e) {
        var key = e.target.id;
        var value = e.target.value;

        this.setState({
            [key] : value
        });
    }

    submitForm(e) {
        e.preventDefault();
        userApi.createUser(this.state)
            .then(function(data) {
                console.log(data);
            }, function(err) {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <InputField
                        type="text"
                        name="username"
                        title="User Name"
                        value={ this.state.username }
                        onChange={ this.handleChange.bind(this) }
                        />
                    <InputField
                        type="password"
                        name="password"
                        title="Password"
                        value={ this.state.password }
                        onChange={ this.handleChange.bind(this) }/>

                    <input className="button" type="submit" value="Submit" onClick= {this.submitForm.bind(this)}/>
                </form>
            </div>
        );
    }
}
export default RegisterForm;