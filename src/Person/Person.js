import React from 'react';// no need to import component
import Radium from 'radium';

const person = (props) => {
  return (
    <div className = "Person">
    <p onClick = {props.click}> I am {props.name} and I am {props.age} old </p>
    <p>{props.children}</p>
    <input type="text" onChange={props.changed} value = {props.name}></input>
    </div>
    )
}
//stateleff 没有state控制
export default Radium(person);
