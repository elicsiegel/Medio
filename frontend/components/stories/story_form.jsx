import React from 'react'; 
import { Redirect } from 'react-router-dom'; 

class StoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: this.props.currentUser.id 
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  componentDidMount() {
    // signals if page is edit page or not
    // if (this.props.match) {
    //   this.props.fetchPost(this.props.match.params.postId).then( (res) => { 
    //     this.setState({ title: res.post.title, body: res.post.body, id: res.post.id })
    //   }) 
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    const story = Object.assign({}, this.state);

    if (this.props.match.path === "/stories/edit") {
      // this.props.updatePost({post}).then(({post}) => {
      //   this.props.history.push(`/posts/${post.id}`)
      // })
    } 
    else {
      this.props.createStory( { story } ).then(
        this.props.history.push(`/`)
      );
    }  
  }

  render() {
    let title;
    
    if (this.props.match.path === "/stories/edit") {
      title = <h3>Edit Story</h3>
    }  else {
      title = <h3>Create New Story</h3>
    } 
    return (
      <div className="story-form">
        {title}
        <form  onSubmit={this.handleSubmit}>
          <input
            className="input-title"
            ref="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}
            required/>
          <input
            className="input-body"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="Body"
            onChange={this.update('body')}
            required></input>
          <button className="publish-button">Publish</button>
        </form>
      </div> 
    );
  }
}

export default StoryForm; 