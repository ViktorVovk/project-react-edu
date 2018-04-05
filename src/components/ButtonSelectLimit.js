import React from 'react';


class ButtonSelectLimit extends React.Component{
      render(){
        if(this.props.state.activeElem === this.props.item){
          return(
            <li className='uk-active'><button>{this.props.item}</button></li>
          )
        }
        return(
          <li><button>{this.props.item}</button></li>
        )
      }
}


export default ButtonSelectLimit
