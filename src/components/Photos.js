import React from 'react'
import Navbar from './Navbar'
import Postlist from './Postlist'
import Pagination from './Pagination'
import posts from '../data/posts'

class Photos extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
        <main className="uk-main">
          <div className="uk-section">
            <div className="uk-container">
              <h2>Photos</h2>
              <Postlist posts={posts}/>
              <Pagination/>
            </div>
        </div>
        </main>
      </div>
    )
  }
}

export default Photos
