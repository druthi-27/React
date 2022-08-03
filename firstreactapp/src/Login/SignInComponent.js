import React from "react";
export class SignInComponent extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <form>
                 Username:<input type='text'></input>
                 Address:<input type='text'></input>
                 Number:<input type='number'></input>
                 Total:<input type='number'></input>
                 Mode:<input type='text'></input>
                 <select className="cars">
                    <option value="cod">COD</option>
                    <option value="Card">Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="upi">UPI</option>
                    </select>
                    <input type="submit" value="Submit"></input>
                    <div>
                 <button onClick={this.props.toggleFun}>Home</button><br></br>
                 <button onChange={this.props.updateUser}>Logout</button>
                 </div>
                </form>
            </div>
        )
    }
}
 