import React from 'react';
import ButtonSelectLimit from './ButtonSelectLimit'

class SelectLiminPaganation extends React.Component{
  constructor(props){
    super(props)
      this.state={
          addClassName: true
      }
      this.onChangeClickLimit = this.onChangeClickLimit.bind(this);
  }
  onChangeClickLimit(event){
      this.props.selectLimit(+event.target.innerText)
      console.log(event.target.parentElement)
      this.setState({
        addClassName: !this.state.addClassName
      })

  }
  render(){
    const CLASSNAME = this.state.addClassName ? "uk-active" : "";
    return(
      <div>
      <p>Колличество постов на странице:</p>
      <ul className="uk-subnav uk-subnav-pill" onClick={this.onChangeClickLimit}>
            {[10,15,20].map(item=>{
              return <ButtonSelectLimit key={item} item={item} className={CLASSNAME}/>
            })}
      </ul>
      </div>
    )
  }
}

export default SelectLiminPaganation



/*
event.currentTarget.childNodes.forEach(item=>{
  item.classList.remove("uk-active");
})
event.target.parentElement.className = "uk-active";


<li className="uk-active"><button>10</button></li>
<li><button>15</button></li>
<li><button>20</button></li>


*/
