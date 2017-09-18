import React, { Component } from 'react'
import './Settle.css'

class Settle extends Component {
  render() {
  const commodity = this.props.commodity.filter(t => t.compeled==true)
    const liList = commodity.map(t => (
      <li key={t.id}>
        <div className="tupian"
          style={{backgroundImage:`url(${t.img})`}}
        ></div>
        <div className="jia">
          <span>{t.cake}</span>
          <span>{`$ ${t.jiage}`}</span>
        </div>
        <div className="shuliang">
          <a href="javascript:;" className="j"
            onClick={()=> this.props.suanClick('-',t,commodity)}
          >-</a>
          <span>{t.shuliang}</span>
          <a href="javascript:;" className="j"
            onClick={()=>this.props.suanClick('+',t,commodity)}
          >+</a>
        </div>
      </li>
    ))
    return (
      <div className="settle">
        <span>{`${this.props.zongjia ? this.props.zongjia : '0.00'} 元`}</span>
        <ul>
          {liList}
        </ul>
      </div>
    )
  }
}

export default Settle
