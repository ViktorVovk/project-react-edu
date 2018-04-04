import React from 'react'
import Navbar from './Navbar'
import PostActive from './PostActive';
import CommentsPost from './CommentsPost'
import AddComment from './AddComment'

class PostSingle extends React.Component {
  constructor(props){
    super(props)
    this.ID = props.match.params.id;
    this.state = {
      valueComment: "",
      valueEmail: "",
      valueName: "",
      submitOnclick: null
    }
    this.handleChangeCommentText = this.handleChangeCommentText.bind(this);
    this.handleChangeEmailText = this.handleChangeEmailText.bind(this);
    this.handleChangeNameText = this.handleChangeNameText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleChangeCommentText(event) {
  this.setState({
    valueComment: event.target.value
  });
}
handleChangeEmailText(event) {
  this.setState({
    valueEmail: event.target.value
  });
}
handleChangeNameText(event) {
  this.setState({
    valueName: event.target.value
  });
}
handleSubmit(event) {
  this.setState({
    submitOnclick: event
  });
  event.preventDefault();
  event.target.reset();

}
  render(){
    return (
      <div>
      <Navbar/>
      <main className="uk-main">
        <div className="uk-section">
          <div className="uk-container">

            <PostActive ID={this.ID}/>
            <hr></hr>
            <h3 className="uk-margin-remove-top">Comments:</h3>
            <CommentsPost ID={this.ID} state={this.state} required/>
            <AddComment
                ID={this.ID}
                state={this.state}
                handleChangeCommentText={this.handleChangeCommentText}
                handleChangeEmailText={this.handleChangeEmailText}
                handleChangeNameText={this.handleChangeNameText}
                handleSubmit={this.handleSubmit}
            />
          </div>
        </div>
      </main>
      </div>
    )
  }
}

export default PostSingle
