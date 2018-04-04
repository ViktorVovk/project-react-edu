import React from 'react'
import ReactPaginate from 'react-paginate';

class Pagination extends React.Component {
  constructor(props){
    super(props);
    this.handleChangePagination = this.handleChangePagination.bind(this);
  }

  handleChangePagination(event){
    this.props.handlePagination(event.selected+1)
  }

  render(){
    let arrlim = [];
    for(let i=0; i < this.props.postsLength/this.props.limit; i++){
      arrlim[i] = i+1
    }
    return (



      <ReactPaginate previousLabel={"<"}
               nextLabel={">"}
               containerClassName={"uk-pagination uk-flex-center"}
               breakLabel={<a href="">...</a>}
               pageCount={this.props.postsLength/this.props.limit}
               onPageChange={this.handleChangePagination}
               initialPage={0}
               activeClassName={"uk-active"}
      />

    )
  }
}

export default Pagination
