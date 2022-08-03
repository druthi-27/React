import React from 'react';
import  './Count.css'
export class Count extends React.Component  {
    
    constructor(props)
    {
        super(props)
        this.state={
            count:0,
            
        }
    }

    add = () => {
         this.setState({
            count : this.state.count + 1
        })
     }

    sub = () => {
     this.setState({
           count : this.state.count - 1
      })
    }
     reset = () =>{
        this.setState({
           count:0
        })
      };
     
    

    render() { 
        return ( 
            <div className='container'>
                <div className='card'>
                    <h4 >Press Plus to Increment the Number {this.add}</h4><br></br>
                <button className="counter-button" onClick={this.add}>+</button>
                <h4>Press Minus To Decrement the Number</h4>
                {/* <span className="output">
                    {this.state.count}
                </span> */}
                <button className="counter-button" onClick={this.sub}> - </button><br></br>
                <h4>Press Reset to Reset the Number</h4>
                <button className="reset" onClick={this.reset}>Reset</button>
                <span className="output">
                    {this.state.count}
                </span>
                
                </div>
            </div>
         )
    }
}