import React from 'react'; 
import { Redirect } from 'react-router-dom'; 
import Dropzone from 'react-dropzone';

class StoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author_id: this.props.currentUser.id
    };

    this.updateFile = this.updateFile.bind(this);
    this.deleteImage = this.deleteImage.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
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

  deleteImage() {
    this.setState({imageUrl: ""})
  }

  componentDidMount() {
    // signals if page is edit page or not
    if (this.props.match.path === '/stories/:storyId/edit') {
      const storyId = this.props.match.params.storyId; 

      this.props.fetchStory(storyId).then( (res) => { 
        this.setState({ title: res.story[storyId].title, imageUrl: res.story[storyId].story_img_url, body: res.story[storyId].body, id: res.story[storyId].id })
      }) 
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state);

    let formData = new FormData();

    formData.append("story[title]", this.state.title);
    formData.append("story[body]", this.state.body);
    formData.append("story[author_id]", this.state.author_id);

    if (this.state.imageFile !== undefined) {
        formData.append("story[image]", this.state.imageFile);
      }

    if (this.props.match.path === "/stories/:storyId/edit") {
      formData.append("story[id]", this.state.id);
      this.props.updateStory(formData).then(({story}) => {
        this.props.history.push(`/stories/${Object.keys(story)[0]}`)
      })
    } 
    else {
      this.props.createStory( formData ).then(
        this.props.history.push(`/`)
      );
    }  
  }

  render() {
    let title;
    let imageName;
    if (this.props.match.path === "/stories/:storyId/edit") {
      title = <h3>Edit Story</h3>
      imageName = <h5 id="current-image-title">Current Image</h5>; 
    }  else { 
      title = <h3>Create New Story</h3>
    } 
    return (
      <div className="story-form">
        {title}
        <form  onSubmit={this.handleSubmit}>
          <div id="upload-image">
            <div>
              {imageName}
              <img id="story-form-img" src={this.state.imageUrl}/>
              <Dropzone
                className="image-update-container"
                multiple={false}
                accept="image/*"
                onDrop={this.onImgDrop.bind(this)}>
                <p id="upload-image-p">Upload an image</p>
              </Dropzone>
            </div>
          </div>
          <input
            className="input-title"
            ref="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}
            required/>
          <textarea
            className="input-body"
            ref="body"
            cols='20'
            value={this.state.body}
            rows='5'
            placeholder="Tell your story..."
            onChange={this.update('body')}
            required></textarea>
          <button className="publish-button">Publish</button>
        </form>
      </div> 
    );
  }
}

export default StoryForm; 