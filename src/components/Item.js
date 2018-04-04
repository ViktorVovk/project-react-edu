import React from 'react'

class Item extends React.Component {

  render(){
    return (
      <div>
      <ul className="uk-breadcrumb uk-margin-medium-bottom">
          <li><a href="#">{this.props.state.user.name}</a></li>
          <li><a href="#">Post {this.props.state.post.id}</a></li>
          <li><span>Comments</span></li>
      </ul>
      </div>
    )
  }
}

export default Item
