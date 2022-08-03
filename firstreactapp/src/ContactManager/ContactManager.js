import React from "react"
import './ContactManager.css';
import axios from "axios"
class ContactManager extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contactinfo:this.props.data,
            ipUser:"",
            ipPhone:"", 
            ipEmail:"",
            update:false,
            results:[],
            statusText:'',
            uid:-1
        }
    }
    componentDidMount=()=>{
        axios.get(' http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
      }
      deleteUser=(e,itemid)=>{
        e.preventDefault()
        axios.delete(` http://localhost:3001/empDetails/${itemid}`).then((res)=>this.setState({statusText:"deleted"})).catch((err)=>console.log(err))
        axios.get(' http://localhost:3001/empDetails').then((res)=>this.setState({results:res.data})).catch((err)=>console.log(err))
    }
    updateUser=(e,itemid)=>{
        axios.patch(`http://localhost:3001/empDetails/${itemid}`,{
            fname:'Peter'
        }).then((res)=>this.setState({statusText:"updated"})).catch((err)=>console.log(err))
    }
   handleChange=(e,key)=>{
    if(key==='uname')
    this.setState({ipUser:e.target.value})
    if(key==='phone')
    this.setState({ipPhone:e.target.value})
    if(key==='email')
    this.setState({ipEmail:e.target.value})
   
   }
    
   handleContact=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3001/empDetails',{
            id:Date.now(),
            fname:this.state.ipUser,
            phone:this.state.ipPhone,
            email:this.state.ipEmail,
            
        
    }).then((res)=>{return res.json()}).then((res)=>this.setState({results:res})).catch((err)=>console.log(err))
    
}
    handleDelete=(e,itemid)=>{
      const result=this.state.contactinfo.filter((item)=>item.id!==itemid)
      this.setState({contactinfo:result})
    }
    toggleUpdate=()=>{
        this.setState({update:!this.state.update})
    }
    setUpdateMsg=(e,itemid)=>{
        e.preventDefault()
        this.toggleUpdate()   
        this.setState({uid:itemid})
    }
    handleUpdate=(e)=>{
        e.preventDefault()
        let temp=[...this.state.contactinfo]
        let obj=temp.find((item)=>item.id===this.state.uid)
        obj.fname=this.state.ipUser
        this.setState({contactinfo:temp})
        this.setState({uid:-1})
        this.toggleUpdate()
    }
    render(){
        return(
            <div className="body">
                {
                this.state.update?<h1>Enter your new contacts</h1>:<h1></h1>
                }
                <form >
                <div className="container">
                Username:<input type='text' onChange={(e)=>this.handleChange(e,'uname')}></input>
                Phone:<input type='text' onChange={(e)=>this.handleChange(e,'phone')}></input>
                Email:<input type='text' onChange={(e)=>this.handleChange(e,'email')}></input>
                
                {
                    this.state.update?<button onClick={(e)=>this.handleUpdate(e)}>update contact</button>:<button onClick={(e)=>this.handleContact(e)}>add contact</button>
                }
                </div>
                </form>
            All Contacts:
            {
                this.state.results.map((item)=>(
                    <div class="col">
                         <div className="card">
                         <div className="card-body">
                        <h2>{item.fname}</h2>
                        <h3>{item.phone} </h3>
                        <h3>{item.email}</h3>
                        <button className="btn btn-primary m-2" onClick={(e)=>this.deleteUser(e,item.id)}>delete</button>
                        
                        <button onClick={(e)=>this.setUpdateMsg(e,item.id)}>update</button>
                    </div>
                    </div>
                    </div>
                ))
            }
            </div>
        )
    }
}
export default ContactManager