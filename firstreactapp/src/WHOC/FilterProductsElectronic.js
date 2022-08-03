import React from "react";
import hocComponent from "./hocComponent";
class FilterProductsElectronic extends React.Component{
render(){
    const {result,handleChange,handleSearch}=this.props
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhV3-8K0ee6aZSpNK58uHY0FMiid2UgPETQ&usqp=CAU" alt="Girl with a jacket"></img>
            <h1>Electronic Gadgets</h1>
            <form>
           <input type='text' placeholder="enter product name" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleSearch(e)}>search</button>
        </form>
        {
                    result.map((item)=>(
                        <div>
                            <h2>Product:{item.pName}</h2>
                            <p>Price:{item.price}</p>
                            <p>Manufacturer:{item.manufacturer}</p>
                            <p>Made In:{item.madein}</p>
                            <p>offer:{item.offer}</p>
                            <p>Delivery:{item.expectedDelivery}</p>
                            <button className="button1">Add To Cart</button>
                            <button className="button1">WishList</button>
                        </div>
                    ))
                }
        </div>

    )
}
}

export default hocComponent(FilterProductsElectronic)