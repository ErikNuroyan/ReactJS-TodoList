'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class TheTodo extends React.Component{
constructor(){
super();
this.state={TheText:[],Number:0}

}

Delete(e){
let CurrArr=this.state.TheText;
CurrArr[e.target.id]="";            //it's gonna make a memory leak needs to be changed
this.setState({TheText:CurrArr});
}

componentWillReceiveProps(nextProps){
  if(this.props!==nextProps){
    console.log(nextProps.text);
    this.setState({TheText:this.state.TheText.concat([<li key={this.state.Number}>{nextProps.text}<button id={this.state.Number} onClick={this.Delete.bind(this)}>Delete</button></li>]),Number:this.state.Number+1});
  }
}

componentWillMount(){
  console.log("Before");
  //Do an ajax get request here
}

render (){
  console.log("rendered");
return (<div><ul>{this.state.TheText}</ul></div>);

}




}

export default TheTodo;
