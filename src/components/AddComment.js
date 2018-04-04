import React from 'react';

class AddComment extends React.Component {
  render(){
    return (
      <form action="#" className="uk-comment-form uk-margin-medium-top" onSubmit={this.props.handleSubmit}>
          <fieldset className="uk-fieldset">
              <legend className="uk-legend">Add Comment</legend>
              <div className="uk-margin">
                  <textarea className="uk-textarea" rows="5" placeholder="Comment" value={this.props.valueComment} onChange={this.props.handleChangeCommentText} required></textarea>
              </div>
              <div className="uk-margin">
                  <input className="uk-input" type="text" placeholder="Name" value={this.props.valueName} onChange={this.props.handleChangeNameText} required/>
              </div>
              <div className="uk-margin">
                  <input className="uk-input" type="email" placeholder="Email" value={this.props.valueEmail} onChange={this.props.handleChangeEmailText} required/>
              </div>
              <div className="uk-margin">
                  <button className="uk-button uk-button-primary" type="submit">Post Comment</button>
              </div>
          </fieldset>
      </form>
    )
  }
}

export default AddComment
