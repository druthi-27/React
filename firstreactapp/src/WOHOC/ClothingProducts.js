import React from "react";
import './Clothing.css';
class ClothingProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
            clothing:[],
            search:'',
            result:[]
        }
    }
    static getDerivedStateFromProps(props,state){
        return {productDetails:props.data}
    }
    handleChange=(event)=>{
        //console.log(event.target.value)
        this.setState({search:event.target.value})
    }
    handleSearch=(event)=>{
        event.preventDefault()
        let data=this.state.productDetails.filter((item)=>item.pName===this.state.search)
        this.setState({result:data}) 
    }
    render(){
        return(
            
    <div>
                
        <form>
            <input type='text' placeholder="Enter product name" onChange={(e)=>this.handleChange(e)}></input>
            <button className="button2"onClick={(e)=>this.handleSearch(e)}>search</button>
        </form>
        
        
        {
             <div className="container">
                <div className="row">
                    
               
            {
                    this.state.result.map((item)=>(
                        
                
                            <div className="card">
                                <div className="card-body">
                                    <img className="Im1"src={`${item.Image}`} alt="img"/>
                                
                                    <h4>Product:{item.pName}</h4>
                                    <p>Price:{item.price}</p>
                                    <p>Made In:{item.madein}</p>
                                    <p>offer:{item.offer}</p>
                                    <p>Delivery:{item.expectedDelivery}</p>
                                    <button className="button1">Add To Cart</button>
                                    <button className="button1">WishList</button>
                                    
                                </div>
                            </div>
                            
                    
                
                    ))
                    
                }
                </div>
                 </div>
                 
               
                    
                }
                
                  
                </div>
        )
        
    }
}
export default ClothingProducts