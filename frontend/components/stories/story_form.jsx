import React from 'react'; 
import { Redirect } from 'react-router-dom'; 
import Dropzone from 'react-dropzone';
import ReactQuill from 'react-quill';
import renderHTML from 'react-render-html';


class StoryForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      category: "",
      author_id: this.props.currentUser.id
    };
    this.showStoryFormBody = this.showStoryFormBody.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.deleteImage = this.deleteImage.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  showStoryFormBody(e) {
    e.stopPropagation();
    this.props.showStoryFormBody();
    this.storyBodyFormInput.focus(); 
  }

  handleChange(value) {
    this.setState({body: value});
  }

  handleCategoryChange(event) {
    this.setState({category: event.target.value});
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
        this.setState({ title: res.story[storyId].title, imageUrl: res.story[storyId].story_img_url, body: res.story[storyId].body, id: res.story[storyId].id, category: res.story[storyId].category})
      }) 
    }
  }

  parseLinks() {
    const updatedLinkBody = this.state.body.split("href=\"");
    let finalValue = [];

    for (let i = 0 ; i < updatedLinkBody.length ; i++) {
      if (i % 2 === 0) {
        finalValue.push(updatedLinkBody[i]);
      } else if (updatedLinkBody[i].startsWith("http://") || updatedLinkBody[i].startsWith("https://")) {
        finalValue.push(updatedLinkBody[i]);
      } else {
        finalValue.push("http://" + updatedLinkBody[i]);
      }
    }
    return finalValue.join("href=\""); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const story = Object.assign({}, this.state);
    
    const parsedLinkBody = this.parseLinks(); 

    let ensureCategory;
    if (this.state.category === "") {
      ensureCategory = "General"; 
    } else {
      ensureCategory = this.state.category; 
    }

    let formData = new FormData();

    formData.append("story[title]", this.state.title);
    formData.append("story[body]", parsedLinkBody);
    formData.append("story[author_id]", this.state.author_id);
    formData.append("story[category]", ensureCategory);

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
      this.props.createStory( formData ).then(({story}) => {
        this.props.history.push(`/stories/${Object.keys(story)[0]}`)
      })
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
    let bodyPlaceholder = "<p>Tell your story...</p>"
    return (
      <div className="story-form" onClick={e => e.stopPropagation()} >
        {title}
        <form  onSubmit={this.handleSubmit}>
          <div id="upload-image">
            {imageName}
            <img id="story-form-img" src={this.state.imageUrl}/>
            <Dropzone
              className="image-update-container"
              multiple={false}
              accept="image/*"
              onDrop={this.onImgDrop.bind(this)}>
              <p id="upload-image-p">Drop file here or click to upload Story Photo</p>
            </Dropzone>
          </div>
          <label className="category-label">
            Pick a category:
            <select value={this.state.category !== "" ? this.state.category : "General"} onChange={this.handleCategoryChange}>
              <option value="General">General</option>
              <option value="Art">Art</option>
              <option value="Science">Science</option>
              <option value="Travel">Travel</option>
              <option value="Food">Food</option>
            </select>
          </label>
          <input
            className="input-title"
            ref="title"
            value={this.state.title}
            placeholder="Title"
            onChange={this.update('title')}
            required />   

          <ReactQuill placeholder={"Body (double click on text to add formatting)"} 
            ref={ el => this.storyBodyFormInput = el } 
            className="quill-input-body" 
            theme="bubble" value={this.state.body} onChange={this.handleChange} />

          <button className="publish-button">Publish</button>
        </form>
      </div> 
    );
  }
}

export default StoryForm; 