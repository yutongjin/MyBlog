// import React, { Component } from 'react';
// import './App.css';
// import Radium from 'radium';
// import './Person/Person.css';
// import Person from './Person/Person';
// import sigh from './image/theshy.gif';
//
// class App extends Component {
//   // state = {
//   //   username: 'supermax'
//   // }
// //有状态
//  state = {
//     persons: [
//       {id : 'jdiap1', name : 'Max', age: 28},
//       {id : 'jdsdgf1', name : 'Cooper', age: 22},
//       {id : 'adfjt1', name : 'Min', age: 26},
//     ],
//     otherstates: 'other',
//     showPersons: false,
//     actions: ["E拉过来","a一下","挂上w","再a一下","外圈q","无情断头台！"],
//     index: 0,
//     xueNu: null
//   }
//
//   render() {
//     if(this.state.index > 4){
//       this.state.xueNu = sigh;
//     }
//     const style = {
//       backgroundColor: 'blue',
//       color: 'white',
//       font: 'inherit',
//       border: "1x solid blue",
//       padding: "8px",
//       cursor: "pointer",
//       ':hover' :{
//         backgroundColor: 'lightblue',
//         color: 'black',
//       }
//     }
//
//     let persons = null;
//     if(this.state.showPersons){
//       persons = (
//         <div>
//           {this.state.persons.map((person, index) => {
//             return <Person
//               name = {person.name}
//               age = {person.age}
//               click = {() => this.deletePersonHandler(index)
//               }
//               key = {person.id}
//               changed = {(event) => this.nameChangedHandler(event, person.id)}
//               />
//           })}
//           </div>
//         );
//         style.backgroundColor = 'red';
//         style[':hover'] = {
//           backgroundColor: 'salmon',
//           color: 'black'
//         }
//       }
//
//           // <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}
//           //   changed = {this.usernameChangedHandler} >Clarinet</Person>
//           // <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age}>Clarinet</Person>
//           // <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}
//           //   click = {this.swichNameHandler.bind(this,'bind pass test')}>Clarinet</Person>
//           //
//           // <Person name = " Yutong " age = "10">Clarinet</Person>
//           // <Person name = " Tina " age = "11"></Person>
//           // <Person name = " Yue " age = "11"></Person>
//           // <Person name = " Shaobo " age = "10"></Person>
//
//
//     //return 本质是 React.createElement('div',null, 'h1', 'HiI am yutong ');而不是html
// //   (类型，configuration（className ： App），具体内容)
// //class 不能用
// //用className来引入css
// //jsx只有一个root
//
// let classes = [];
// if (this.state.persons.length <= 2){
//   classes.push('red');// classes = ['red'];
// }
//
// if(this.state.persons.length <= 1){
//   classes.push('bold');
// }
// return (
//   //函数调用不加（）否则会在编译时执行
//     <div>
//       <div className = "App">
//         <p className = {classes.join(' ')}>Hi I am react</p>
//       </div>
//
//       <button style = {style}
//         onClick = {this.togglePersonHandler.bind(this, 'bind test')}>{this.state.actions[this.state.index]}
//       </button>
//       <div >
//         <p className = {classes.join(' ')}>{this.state.actions[this.state.index]}</p>
//         <img src={this.state.xueNu} alt="loading..."/>
//       </div>
//
//       {//只要状态改变，就重新render，所以界面render内容随状态定义。
//       persons}
// </div>
// );
// }
//
//   togglePersonHandler = () => {
//     //触发按钮后，改变状态：谁的状态？取出state里的变量
//     const doesShow = this.state.showPersons;
//     //利用setState函数改变其状态。
//     this.setState({showPersons: !doesShow});
//     const cur = this.state.index;
//     this.setState({index: cur + 1});
//   }
// deletePersonHandler = (personIndex) => {
//   const persons = [...this.state.persons]
//   this.state.persons.slice();
//   persons.splice(personIndex, 1);
//   this.setState({persons: persons});
// }
// nameChangedHandler = (event, id) => {
//    const personIndex = this.state.persons.findIndex(p => {
//      return p.id === id;
//    });
//
//    const person = {
//      ...this.state.persons[personIndex]
//    };
//    person.name = event.target.value;
//
//    const persons = [...this.state.persons];
//    persons[personIndex] = person;
//
//    this.setState({persons: persons });
//   }
// }
//
//
// export default Radium(App);


import React, { Component } from 'react';
import RouterWrap from './router';
import './App.css';
import Button from 'antd/lib/button';
class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterWrap/>

      </div>

    );
  }
}

export default App;
