'use strict'
import React from 'react';
import ReactDOM from 'react-dom';
import TheInput from './TheInput';
import TheTodo from './TheTodo'


class Todolist extends React.Component{




render(){

return(<div>
   <TheInput/>
  </div>);
}

}

ReactDOM.render(<Todolist/>,document.getElementById("yay"));
