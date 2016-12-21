import React from 'react';
import ReactDOM from 'react-dom';
import TheTodo from './TheTodo'

class TheInput extends React.Component{
constructor(){
  super();
  this.state={TextToTransfer:""}
}

TheClick(e){

  this.setState({TextToTransfer:ReactDOM.findDOMNode(this.refs.hey).value});
  ReactDOM.findDOMNode(this.refs.hey).value="";
}

render(){

return (<div><input id="Inp" type="text" ref="hey"/>
<button onClick={this.TheClick.bind(this)}>Add</button>
<TheTodo text={this.state.TextToTransfer}/>
</div>)

}



}

export default TheInput;
