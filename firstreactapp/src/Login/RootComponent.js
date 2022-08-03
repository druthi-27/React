import React from "react";
import { DashBoard } from "./Dashboard";
import { SignInComponent } from "./SignInComponent";
class RootComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
           isLoggedIn:true,
           Data:[],
           msg:''
        } 
    }

    toggleUser=()=>{
        console.log("toggle hit")
        this.setState({isLoggedIn:!(this.state.isLoggedIn)})
    }

    
   updateState=()=>{ 
     // Changing state 
    console.log("Continue Shopping")
    this.setState({
      msg:"Thank You for Visisting"
    }) 
   } 
  
  
    render(){
       console.log("render")
        return(
            <div className="Body">
               {
                this.state.Data.map((item) => {
                    return (
                        <div className="Container">
                                <div className="Image">
                                    <img src={`${item.Image}`} alt="img"/>
                                </div>
                                <div className="Details">
                                    <div className="Desc">{item.Desc}</div>
                                    <div className="Quan">{item.Quan}</div>
                                    <div className="Price">{item.Price}</div>
                                    <div className="Off">{item.Off}</div>
                                    <button className="button">Add To Cart</button>
                                    <button className="button">WishList</button>
                                    
                                </div>
                    {   
                 this.state.isLoggedIn?<>
                <DashBoard data={this.state.Data} toggleFun={this.toggleUser}></DashBoard>
                </>:<>
                <SignInComponent  toggleFun={this.toggleUser} ></SignInComponent>
                </>
                }
                </div>
                     )
                    })
               } 

            </div>
        )
    }
}
export default RootComponent