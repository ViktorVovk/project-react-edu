import React from 'react'


class Comment extends React.Component {
  render(){
    return (
      <div>
        <article className="uk-comment">
          <header className="uk-comment-header uk-grid uk-grid-medium uk-flex-middle">
            <div className="uk-width-expand">
              <h4 className="uk-comment-title uk-margin-remove">{this.props.comm.name}</h4>
              <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="mailto:{this.props.comm.email}">{this.props.comm.email}</a></li>
              </ul>
            </div>
          </header>
          <div className="uk-comment-body">
            <p>{this.props.comm.body}</p>
          </div>
        </article>
        <hr></hr>
      </div>
    )
  }
}

export default Comment
