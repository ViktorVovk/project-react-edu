import React from 'react';
import ButtonSelectLimit from './ButtonSelectLimit'

class SelectLiminPaganation extends React.Component{
  constructor(props){
    super(props)
      this.state={
          activeElem: 10
      }
      this.onChangeClickLimit = this.onChangeClickLimit.bind(this);
  }
  onChangeClickLimit(event){
      this.props.selectLimit(+event.target.innerText)
      this.setState({
        activeElem: +event.target.innerText
      })

  }
  render(){
    return(
      <div>
      <p>Колличество постов на странице:</p>
      <ul className="uk-subnav uk-subnav-pill" onClick={this.onChangeClickLimit}>
            {[10,15,20].map(item=>{
              return <ButtonSelectLimit key={item} item={item} state={this.state}/>
            })}
      </ul>
      </div>
    )
  }
}

export default SelectLiminPaganation
