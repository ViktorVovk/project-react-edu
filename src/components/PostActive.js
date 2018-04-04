import React from 'react';
import Item from './Item'

class PostActive extends React.Component {
  constructor(props){
    super(props)
    this.state={
      post: {},
      user: {}
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.ID}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        post: data
      })
      fetch(`https://jsonplaceholder.typicode.com/users/${this.state.post.userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
    })
  }
  render(){
    return (
      <div>
          <Item state={this.state}/>
          <h1 className="uk-heading-bullet uk-margin-medium-bottom">
            <span>{this.state.post.title}</span>
            <a className="uk-text-small" href="#">{this.state.user.name}</a>
          </h1>
          <div className="uk-article uk-dropcap uk-margin-large-bottom">
            <p>{this.state.post.body}</p>
          </div>
      </div>
    )
  }
}

export default PostActive
