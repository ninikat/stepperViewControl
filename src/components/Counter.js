import React, { Component } from 'react';

export class Counter extends Component {

  constructor(props){
    super(props)

    this.minusClicked = this.minusClicked.bind(this);
    this.plusClicked = this.plusClicked.bind(this);
  }

  minusClicked(){
    let currentVal = this.valueElement.innerHTML;
    currentVal -= 1
    this.valueElement.innerHTML=currentVal;
  }

  plusClicked(){
    let currentVal = parseInt(this.valueElement.innerHTML);
    currentVal += 1
    this.valueElement.innerHTML=currentVal;
  }

  render() {
    return (
      <div className="counter_holder">
      <div className="left_click" onClick={this.plusClicked}> + </div>
      <p ref={(element)=>this.valueElement=element}> 0 </p>
      <div className="right_click" onClick={this.minusClicked}> - </div>
      </div>
    );
  }
}
