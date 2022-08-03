import Data from './object'

function Body(){
        return(
            <div className="Body">
                {
                    Data.map((item) => {
                        return (

                            <div className="Container">
                                <div class="col-md-3">
                                <div class="card" >
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
                            </div>
                        </div>

                            </div>
                            
                        )
                        })

                    
                }
             </div> 
        )
            }
        export default Body;
                    
    
            

