import React, { Component } from 'react';

class App extends Component{

  state = {
    count :''
  }

  Handle=(digit)=>{
    const{count}=this.state
    this.setState({
      count:count==='0'?String(digit):count+digit
    })
  }

  addDot=()=>{
    const {count}= this.state
    if (count.indexOf('.')===-1){
      this.setState({
        count:count+'.'
      })
    }
  }

  reset=()=>{
    const {count}= this.state
    this.setState({
      count:''
    })
  }

  Calculate=()=>{
    const{count}=this.state
    this.setState({
      count:eval(count)
    })
  }



  render(){

    return (
      <div className="container">
        <div className="calcbody">
          <div className="input">
            <input value={this.state.count}/>
            <h1>{this.state.count}</h1>
          </div>
          <div className="btnbgk">
            <div className="btnposition">
              <button className="resetbtn" onClick={()=>this.reset()}>C</button>
              <button onClick={()=>this.Handle('()')}>()</button>
              <button onClick={()=>this.Handle('%')}>%</button>
              <button onClick={()=>this.Handle('/')}>/</button>
              <button onClick={()=>this.Handle(7)}>7</button>
              <button onClick={()=>this.Handle(8)}>8</button>
              <button onClick={()=>this.Handle(9)}>9</button>
                <button onClick={()=>this.Handle('*')}>*</button>
              <button onClick={()=>this.Handle(4)}>4</button>
              <button onClick={()=>this.Handle(5)}>5</button>
              <button onClick={()=>this.Handle(6)}>6</button>
              <button onClick={()=>this.Handle('-')}>-</button>
              <button onClick={()=>this.Handle(1)}>1</button>
              <button onClick={()=>this.Handle(2)}>2</button>
              <button onClick={()=>this.Handle(3)}>3</button>
              <button onClick={()=>this.Handle('+')}>+</button>
              <button onClick={()=>this.Handle('+/-')}>+/-</button>
              <button onClick={()=>this.Handle(0)}>0</button>
              <button onClick={()=>this.addDot()}>.</button>
              <button className="equebtn" onClick={()=>this.Calculate()}>=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
