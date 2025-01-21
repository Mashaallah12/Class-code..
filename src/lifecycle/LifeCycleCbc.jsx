import React, { Component } from 'react'

export default class LifeCycleCbc extends Component {
    state={value:0}
    
    
    componentDidMount(){
        console.log("mounting phase")
    }
    componentDidUpdate(){
        console.log("updateing phase");
        
    }
    componentWillUnmount(){
        console.log("umounting phase");
        
    }

    increment =()=>{
       this.setState({value: this.state.value + 1})
        
    }
  render() {
    return (
      <div>
        <h1>LifeCycleCbc</h1>
        <h2>Counter{this.state.value}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}
