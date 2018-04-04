import React from 'react'
import Comment from './Comment'

class CommentsPost extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      commentsPost: []
    }
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.ID}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        commentsPost: data
      })
    })
  }

  newPost(){
    return {
    postId: null,
    name: "",
    email: "",
    body: ""
    }
  }

  addComent(obj){
      if(this.props.state.submitOnclick != null){
        obj.postId = +this.props.ID;
        obj.name = this.props.state.valueName;
        obj.email = this.props.state.valueEmail;
        obj.body = this.props.state.valueComment;
        this.state.commentsPost.push(obj);
        this.props.state.submitOnclick = null;
      }
  }

  render(){
    this.addComent(new this.newPost());
    return (
      <div className="uk-comments">
        {this.state.commentsPost.map(comm => {
          return <Comment key={comm.id} comm={comm}/>
        })}
      </div>
    )
  }
}

export default CommentsPost
