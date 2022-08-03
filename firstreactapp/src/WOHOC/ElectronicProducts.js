import React from "react";
class ElectronicProducts extends React.Component{
    constructor(props){
        super(props)
        this.state={
            productDetails:[],
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
                    <input type='text' placeholder="enter product name" onChange={(e)=>this.handleChange(e)}></input>
                    <button onClick={(e)=>this.handleSearch(e)}>search</button>
                </form>
                {
                    this.state.result.map((item)=>(
                        <div className="Container">
                            <div className="card">
                            <div className="Image">
                                <img src={`${item.Image}`} alt="img"/>
                            </div>
                            
                            <div className="Details">
                                <div >Product:{item.pName}</div>
                                <div >Price:{item.price}</div>
                                <div >Made In:{item.manufacturer}</div>
                                <div >offer:{item.offer}</div>
                                <div >Delivery:{item.expectedDelivery}</div>
                                <button >Add To Cart</button>
                                <button >WishList</button>
                                    
                            </div>    
                                    
                            </div>
                        </div>
                    ))
                }

            </div>
        )
    }
}
export default ElectronicProducts