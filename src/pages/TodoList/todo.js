import React, {Component} from 'react';
export default class Todo extends Component{

  constructor(props){
    super(props);
    this.state = {
      list : []
    };
  }
    addTodo = () => {
     var temp = this.state.list;
     var val = this.refs.title.value;
     this.refs.title.value = '';
     temp.push(val);
     this.setState({
       list : temp
     });
   }
   deleteTodo = (key) =>{
     var temp = this.state.list;
     temp.splice(key,1);
     this.setState({list: temp})
   }
  render(){
    return (
      <div id = "Todo">
      <h2>Wode Todo </h2>
      <input ref = "title"></input>
      <button onClick = {this.addTodo}>Add</button>
  <hr/>
  <hr/>

  <ul>
   {
    this.state.list.map((value,key) => {
      return (
        <li key = {key}>
        {value}<button onClick = { (key) => this.deleteTodo}>
        delete
        </button></li>
      )
    })
    }
  </ul>
      </div>
    );
  }
}
