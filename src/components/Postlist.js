import React from 'react'
import Post from './Post'


class Postlist extends React.Component {
  render(){    
    return (
      <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
        {this.props.posts.map(post => {
          return <div key={post.id}><Post post={post}/></div>
        })}
      </div>
    )
  }
}

export default Postlist
