import React from "react";
import hocComponent from "./hocComponent";
class FilterProductsClothing extends React.Component{
    render(){
       const {result,handleChange,handleSearch,storename}=this.props
        return(
        <div>
            <h1>{storename}</h1>
           <form>
           <input type='text' placeholder="Enter Product" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        
        {
            <div className="container">
                <div className="row">
                {
                    result.map((item)=>(
                        
                        <div className="card">
                        <div className="card-body">

                            <img className="Im1"src={`${item.img}`} alt="img"/>
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Made In:{item.madein}</p>
                            <p>offer:{item.offer}</p>
                            <p>Delivery:{item.expectedDelivery}</p>
                            <button className="button1">Add To Cart</button>
                            <button class="btn btn-dark text-white "><a href="https://www.myntra.com/dresses/sera/sera-women-black-romantic-florals-dress/17012384/buy?gclid=CjwKCAjwlqOXBhBqEiwA-hhitIIqmx-QHNInSSd5zCU3-f73QmwZBx2WY11SoSsA-X1xRAz" class="card-link text-lg-center">Buy</a></button>
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
export default hocComponent(FilterProductsClothing)