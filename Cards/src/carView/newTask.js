import React from "react";
import "./newTask.css";

import { connect } from "react-redux";
import { addCard } from "./action";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import CardView from "./card";

class NewTask extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
  
      title: "",
      status: "To Do",
      priority: "",
      description: "",
      buttons: "",
      redirectNextPage:false,
    };
  }
handleAddNewTask = () => {
  const { title, status, priority, description,buttons } = this.state;

  if (title && status && description && priority && buttons) {
    const newCard = {
      id: uuidv4(), 
      title: title,
      status: status,
      priority: priority,
      description: description,
      buttons:buttons
    };

    this.props.addCard(newCard);
    this.setState({
      title: "",
      status: "To Do",
      description: "",
      priority: "",
      buttons:"",
      redirectNextPage:true,
    });

    console.log("This is added"+ newCard);
  } else {
    console.log("error" );
  }
};




// handleInput event changed
handleTitleChange=(event)=>{
  this.setState({
    title:event.target.value,
  })
}
handleStatusChange=(event)=>{
  this.setState({
    status:event.target.value,
  })
}
handlePriorityChange=(event)=>{
  this.setState({
    priority:event.target.value,
  })
}
handleDescriptionChange=(event)=>{
  this.setState({
    description:event.target.value,
  })
}
handleTypesChagne=(event)=>{
  this.setState({
    buttons:event.target.value,
  })
}

handleCancle=()=>{
  this.setState({
    isShown:false,
    title:"",
    status:"",
    description:"",
    priority:"",
    buttons:""
  });
}

   render(){
    const {title,status,priority,description,buttons,redirectNextPage}=this.state;
    if(redirectNextPage){
      return <CardView/>
    }
      return(
         <div>
          
            <div className="addTaskCol">
              <h1>Add New Task</h1>
              <div className="TaskFroms">
              
              
             

                  <div className="labOne">
                    <label className="labed">ID</label>
                    <label className="labed">Status</label>
                    <label className="labed">Priority</label>
                    </div>

   <div className="thereeboxs">
   <input type="text" className="titleId" 
                    value={title}
                    onChange={this.handleTitleChange}

                    />

<select value={status} className="titleId" 
                    onChange={this.handleStatusChange}
                 
                    >
                      <option value="To Do">To Do</option>
                     
                    </select>

                    <input type="number" className="titleId"  
                    value={priority}
                    onChange={this.handlePriorityChange}
                  />
   </div>


<div className="labTwo">
    <label className="summary">Summary</label>
     <label className="labeded">Type</label>

</div>

           <div className="fourBoxs">

           <textarea
                     className="titleId" 
                     value={description}
                     onChange={this.handleDescriptionChange} 
                     
                    />

 <input type="text" className="titleId"   value={buttons} onChange={this.handleTypesChagne}/>

 <div className="towButtons">

               
               <button
                 className="popup-buttons" id="saves"
                onClick={this.handleAddNewTask}
               >
                save
               </button>
          
         <Link to="/cancel">
<button className="popup-buttons" id="saves">
                      Cancel
                    </button>
                    </Link>

 </div>
            </div>        
 </div>
            </div>
       



         </div>
      );
   }
}

export default connect(null, { addCard })(NewTask);
