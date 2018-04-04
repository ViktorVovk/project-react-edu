import React from 'react';
import Navbar from './Navbar';
import Postlist from './Postlist';
import Pagination from './Pagination';
import SelectLiminPaganation from './SelectLiminPaganation';

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      limit: 10,
      page: null,
      postsLength: null
    };
  }

  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        postsLength: data.length,
      })
    })
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=${this.state.page}&_limit=${this.state.limit}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        page: 1,
        limit: 10
      })
    })
  }

  handlePagination(page){
      fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${this.state.limit}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data,
          page: page,
        })
      })
  }

  selectLimit(limit){
    fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        posts: data,
        limit: limit,
      })
    })
  }

  render() {
    return (
      <div>
        <Navbar/>
        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">
              <SelectLiminPaganation
                    selectLimit={this.selectLimit.bind(this)}
                    limit={this.state.limit}
              />
              <h2>Posts</h2>
              <Pagination limit={this.state.limit} posts={this.state.posts} page={this.state.page} handlePagination={this.handlePagination.bind(this)} postsLength={this.state.postsLength}/>
              <Postlist posts={this.state.posts}/>
              <Pagination limit={this.state.limit} posts={this.state.posts} page={this.state.page} handlePagination={this.handlePagination.bind(this)} postsLength={this.state.postsLength}/>
            </div>
        </div>
        </main>
      </div>
    )
  }
}

export default Posts
