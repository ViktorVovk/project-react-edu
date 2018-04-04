import React from 'react';


class ButtonSelectLimit extends React.Component{
      render(){
        return(
          <li className={this.props.className}><button>{this.props.item}</button></li>
        )
      }
}


export default ButtonSelectLimit
