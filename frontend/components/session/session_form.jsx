import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.processForm(user);
  }


  render() {
    const form = (
        <form onSubmit={ this.handleSubmit }>
          <label>Username: </label>
          <input type="text" id="username" onChange={ this.updateInput('username') }></input>
          <label>Password: </label>
          <input type="password" id="password" onChange={ this.updateInput('password') }></input>
          <button>Submit</button>
        </form>
    );
    const errors = this.props.errors.map((error) => <li>{ error }</li>);

    if (this.props.loggedIn){
      return <Redirect to="/" />;
    }

    if(this.props.formType ===  '/login'){
      return(
        <div>
          <Link to='/signup'>Sign Up</Link>
          <h2>Login</h2>
          { errors }
          { form }
        </div>
      );
    }
    else{
      return(
        <div>
          <Link to='/login'>Log In</Link>
          <h2>Signup</h2>
          { errors }
          { form }
        </div>
      );
    }
  }
}

export default SessionForm;