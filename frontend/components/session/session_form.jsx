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
    this.handleModalClick = this.handleModalClick.bind(this);
  }

  updateInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleModalClick(e) {
    e.stopPropagation()
    
    e.target.classList.forEach((klass) => {
      if (klass === "form-modal-overlay") {
        this.props.history.push("/")
      }
    });
    
    
  
  }

  render() {
    let title;
    if(this.props.formType ===  '/login') {
      title = (
        <h2>Login</h2>
      );
    } else {
      title = (
        <h2>Signup</h2>
      );
    }

    const errors = this.props.errors.map((error) => <li className="errors">{ error }</li>);

    const form = (
        <div className="form">
          <form onSubmit={ this.handleSubmit }>
            {title}
            { errors }
            <label>Username: </label>
            <input type="text" id="username" onChange={ this.updateInput('username') }></input>
            <label>Password: </label>
            <input type="password" id="password" onChange={ this.updateInput('password') }></input>
            <button>Submit</button>
          </form>
        </div>
      
    );
    

    if (this.props.loggedIn){
      return <Redirect to="/" />;
    }
    
    return(
      <div onClick={this.handleModalClick} className="form-modal-overlay">
        { form }
      </div>
    );
     

  }
}

export default SessionForm;