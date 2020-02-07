import React from 'react';
import { connect } from 'react-redux'
import {increment} from '../actions'
import {decrement} from '../actions'
const Counter = (props) =>{
    
//render(){
      
    return( 
        <div>
            <button onClick={props.increment}    className="increment">Increment</button>
            <button onClick={props.decrement} className="Decrement">Decrement</button>
    <p>count : {props.count} </p>
        
        </div>

    );
 //}

}
const getCount = (state) =>{
  console.log(state)
  return {
      count : state.counts
  }

}

export default connect(getCount,{decrement,increment})(Counter);