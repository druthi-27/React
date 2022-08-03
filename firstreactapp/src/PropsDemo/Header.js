function Header(){
   
    return(

            <div className="Header">
                <div className="Title">
                    <div className="Address">Address</div>
                    <div className="Search">Search</div>
                    <div className="Help">Help</div>
                    <button onClick={this.props.toggleFun}>signout</button>

                </div>
            </div>

        )
    }
    
    export default Header;
    