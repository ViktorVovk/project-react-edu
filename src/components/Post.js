import React from 'react';
import { Link } from "react-router-dom";


class Post extends React.Component {
  render(){
    return (
      <div className="uk-card uk-card-default uk-margin-medium-bottom">
          <div className="uk-card-header">
              <h3 className="uk-card-title uk-margin-remove-bottom">{this.props.post.title}</h3>
          </div>
          <div className="uk-card-body">
              <p>{this.props.post.body}</p>
          </div>
          <div className="uk-card-footer">
              <Link to={`/posts/${this.props.post.id}`} className="uk-button uk-button-text">Read more</Link>
          </div>
      </div>
    )
  }
}

export default Post
