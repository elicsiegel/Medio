import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Dropzone from 'react-dropzone';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      imageFile: null,
      imageUrl: null 
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.logInGuestUser = this.logInGuestUser.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  updateInput(type) {
    return (e) => this.setState({ [type]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.props.formType === '/signup') {
      let formData = new FormData();

      formData.append("user[username]", this.state.username);
      formData.append("user[password]", this.state.password);

      if (this.state.imageFile !== null) {
        formData.append("user[image]", this.state.imageFile);
      }
      this.props.processForm(formData);

    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user); 
    }
    
  }

  handleModalClick(e) {
    e.stopPropagation()
    
    e.target.classList.forEach((klass) => {
      if (klass === "form-modal-overlay") {
        this.props.clearErrors();
        this.props.history.push("/")
      }
    });
    
  }

  onImgDrop(files) {
    this.updateFile(files[0])
  }

  updateFile(file) {
    
    let fileReader = new FileReader();

    fileReader.onloadend = () => {
      this.setState({imageFile: file, imageUrl: fileReader.result });
    }

    if (file) {
      fileReader.readAsDataURL(file); 
    }
  }

  logInGuestUser() {
    const user = {
      username: "Guest",
      password: "password"
    }
    this.props.processForm(user);
  }

  render() {
    let title;
    let imageUpload;
    let otherLink;

    if(this.props.formType ===  '/login') {
      title = (
        <h2>Login</h2>
      );
      otherLink = (
        <Link to='/signup'><p>Sign Up</p></Link>
        );
    } else {
      title = (
        <h2>Signup</h2>
      );
      otherLink = (
        <Link to='/login'><p>Log In</p></Link>
        )
      imageUpload = (
        <div className="image-upload">
          <img className="image-box" src={this.state.imageUrl}/>
          <Dropzone
            className="image-update-container"
            multiple={false}
            accept="image/*"
            onDrop={this.onImgDrop.bind(this)}>
            <p id="upload-image-p">Drop file here or click to upload Profile Picture</p>
          </Dropzone>     
        </div>
      );
    }

    const errors = this.props.errors.map((error) => <li className="errors">{ error }</li>);

    const form = (
        <div className="form">
          <form onSubmit={ this.handleSubmit }>
            {title}
            <div className="errors-container">
              { errors }
            </div>
            <label>Username: </label>
            <input type="text" id="username" onChange={ this.updateInput('username') }></input>
            <label>Password: </label>
            <input type="password" id="password" onChange={ this.updateInput('password') }></input>
            {imageUpload}
            <button>Submit</button>
          </form>
          {otherLink}
          <p onClick={this.logInGuestUser}>Guest Login</p>
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