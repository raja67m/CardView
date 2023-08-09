import React from "react";
import "./cardView.css";
import personOne from "./avatar/person_01.jpg";

import personFive from "./avatar/person_05.png";
import personSix from "./avatar/person_06.jpg";

import arrowOne from "./arrows/arrow_01.png";
import arrowTwo from "./arrows/arrow_02.png";


// import the actions and redux
import { deleteCard, updateCard } from "./action";
import { useSelector, useDispatch } from "react-redux";
// import the useState
import { useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";


function CardView() {
  // popup state
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  // redux state code
  const cards = useSelector((state) => state.cards);

  // card selected code
  const [selectedCard, setSelectedCard] = useState();
  const [editedCard, setEditedCard] = useState({});
  

  
 // move the cards status based
 const [todo,setTodo]=useState(
  cards.filter((card)=>card.status=== "To Do")
 );
 const [inProgressCards, setInProgressCards] = useState(
  cards.filter((card) => card.status === "In Progress")
);
const [testing, setTesting] = useState(
  cards.filter((card) => card.status === "Testing")
);
const [done, setDone] = useState(
  cards.filter((card) => card.status === "Done")
);

    


// fectch the newTask data
/*
useEffect(() => {
 
  const updatedTodo = cards.filter((card) => card.status === "To Do").sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
  setTodo(updatedTodo);

  const updatedInProgress = cards.filter((card) => card.status === "In Progress").sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
  setInProgressCards(updatedInProgress);

  const updatedTesting = cards.filter((card) => card.status === "Testing").sort((a, b) => parseInt(a.priority) - parseInt(b.priority));
  setTesting(updatedTesting);

  const updatedDone = cards.filter((card) => card.status === "Done");
  setDone(updatedDone);
}, [cards]);   
*/



  // card item deleted
  const dispatch = useDispatch();

  const handleShowClick = (card) => {
    setSelectedCard(card);
    setShowPopup(true);
    setEditedCard(card);
  };
  // handleDeleteClick

  const handleDeleteClick = () => {
    setShowPopup(false);
    setShowDeletePopup(true);
  };
  
  

  //handleDeleteClickConformation
  const handleDeleteYes = () => {
    if (selectedCard) {
      dispatch(deleteCard(selectedCard.id));
      setShowDeletePopup(false);
      setSelectedCard(null);

    setTodo(todo.filter((card) => card.id !== selectedCard.id));
    setInProgressCards(inProgressCards.filter((card) => card.id !== selectedCard.id));
    setTesting(testing.filter((card) => card.id !== selectedCard.id));
    setDone(done.filter((card) => card.id !== selectedCard.id));


    }
  };
  
  
  //handleDelete no function

  const handleDeleteNo = () => {
    setShowDeletePopup(false);
    setSelectedCard(null);
  };


// handleUpdate the function:
const handleUpdateClick = () => {
  if (cards) {
    dispatch(updateCard(editedCard));
    const updatedCards = cards.map((card) => {
      if (card.id === editedCard.id) {
        return editedCard;
      }
      return card;
    });

    // Update the cards state
    setEditedCard(
     updatedCards );

    setShowPopup(false);

    // update the status function:
    const updatedTodo = updatedCards
      .filter((card) => card.status === "To Do").sort((a, b) => a.priority -b.priority);
     
    setTodo(updatedTodo);

    const updatedInProgress = updatedCards
      .filter((card) => card.status === "In Progress").sort((a, b) => a.priority - b.priority);
       debugger;
    setInProgressCards(updatedInProgress);

    const updatedTesting = updatedCards
      .filter((card) => card.status === "Testing").sort((a, b) => a.priority -b.priority);
     
    setTesting(updatedTesting);

    const updatedDone = updatedCards.filter((card)=>card.status === "Done");
      
   
    setDone(updatedDone);
  }
};


const handleCancleClick = () => {
    setSelectedCard(null);
    setShowPopup(false);
    setShowDeletePopup(false);
    setEditedCard({});
  };

 
const toDoCount = todo.length;

const inProgress = inProgressCards.length;

const testting= testing.length;
  const dones = done.length;

 
      
         

  return (
    <div>
      <h1>To Do </h1>
    <div>




<Link to="/newTask" className="TaskisLink">
<div id="newTask" >
<AddIcon/>
      <span>New Task</span>
      </div>
</Link>
   
      
    </div>
      <div id="fullColumn" >
        {
          // This is taks loaded box
        }
        <div id="firstBox">
          <div className="task-item1">
            <p>
              To Do <span id="spn">- {toDoCount} Items</span>
            </p>
          </div>

        <div className="task-item2">
            <p>
              In Progress <span id="spn">- {inProgress} Items</span>
            </p>
          </div>

          <div className="task-item3">
            <p>
              Testing <span id="spn">- {testting} Items</span>
            </p>
          </div>

          <div className="task-item4">
            <p>
              Done <span id="spn">- {dones} Items</span>
            </p>
          </div>
        </div>
        {
          // this is card view

        }
        <div id="secondBox">
         
          <div id="firstCol" className="col">
          {   todo.map((card) => {
                  return (
                  <div
                    className="card1"
                    onClick={() => handleShowClick(card)}
                    key={card.id}
                  >
                    <div className="card-content">
                      <h6>{card.title}</h6>
                      <p >{card.description}</p>
                    
                        <p className="btn">{card.buttons}</p>
                  
                    </div>
                    <div className="imageAlign">
                      <img src={arrowOne} alt="Not Visible" />
                      <img src={personOne} alt="Not Visible" />
                    </div>
                  </div>
                );
            
            })}
  </div>
         

          {
            //card view secCol
          }
           
          <div id="secCol" className="col">
            
            {
            inProgressCards.map((card) => {
          return (
                  <div
                    className="card2"
                    onClick={() => handleShowClick(card)}
                    key={card.id}
                  >
                    <div className="card-content">
                      <h6>{card.title}</h6>
                      <p id="description">{card.description}</p>
                      <div>
                        <p className="btn">{card.buttons}</p>
                      </div>
                    </div>
                    <div className="imageAlign">
                      <img src={arrowOne} alt="Not Visible" />
                      <img src={personFive} alt="Not Visible" />
                    </div>
                  </div>
                );  
              }
             
            )
      }
            
          </div>
          {
            //third card view
          }
          <div id="thirdCol" className="col">
            {
              // card view first
              testing.map((card) => {
               
                  return (
                    <div
                      className="card3"
                      onClick={() => handleShowClick(card)}
                      key={card.id}
                    >
                      <div className="card-content">
                        <h6>{card.title}</h6>
                        <p id="description">{card.description}</p>
                        <div>
                          <p className="btn">{card.buttons}</p>
                        </div>
                      </div>
                      <div className="imageAlign">
                        <img src={arrowTwo} alt="Not Visible" />
                        <img src={personOne} alt="Not Visible" />
                      </div>
                    </div>
                  );
               
              })
            }

            
          </div>

          {
            //fourth card view
          }
          <div id="fourthCol" className="col">
            {
              // card view one
              done.map((card) => {
             
                  return (
                    <div
                      className="card1"
                      onClick={() => handleShowClick(card)}
                      key={card.id}
                    >
                      <div className="card-content">
                        <h6>{card.title}</h6>
                        <p id="description">{card.description}</p>
                        <div>
                          <p className="btn">{card.buttons}</p>
                        </div>
                      </div>
                      <div className="imageAlign">
                        <img src={arrowTwo} alt="Not Visible" />
                        <img src={personSix} alt="Not Visible" />
                      </div>
                    </div>
                  );
             
              })
            }

          
          </div>
          {showPopup && (
            <div className="popup">
              <div className="popup-content">
                <div className="titled">
                  <p id="editCard">Edit card details</p>
                  <button id="X" onClick={() => handleCancleClick()}>
                    X 
                  </button>
                </div>

                <div className="editDetails">
                  <div className="lab">
                    <label>ID</label>
                    <label>Status</label>
                    <label>Priority</label>
                    <label>Summary</label>
                  </div>

                  <div className="inpBox">
                    <input type="text" id="titleId" readOnly value={editedCard.title} />

                    <select
                  
               
                      value={editedCard.status}
                      onChange={(e) =>
                        setEditedCard({ ...editedCard, status: e.target.value })
                      }
                    >
                      <option value="To Do">To Do</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Testing">Testing</option>
                      <option value="Done">Done</option>
                    </select>


                  
                    <input type="number" id="newBox" value={editedCard.priority}
                   onChange={(e)=>setEditedCard({
                    ...editedCard,
                    priority:parseInt(e.target.value),
                   })}

                  />

                  <textarea
                      id="area"
                      value={editedCard.description}
                      onChange={(e) =>
                        setEditedCard({
                          ...editedCard,
                          description: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="bunselect">
                  <button className="popup-buttons" onClick={handleDeleteClick}>
                    Delete
                  </button>

                  <div>
                    <button
                      className="popup-buttons"
                      onClick={handleUpdateClick}
                    >
                     save
                    </button>
                    <button
                      className="popup-buttons"
                      onClick={() => handleCancleClick()}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showDeletePopup && (
            <div className="popup">
              <div className="popup-content">
                <div className="titled">
                  <p id="editCarded">Delete card </p>
                  <button id="X" onClick={() => handleCancleClick()}>
                    X
                  </button>
                </div>
                <p id="areYouDelete">Are you sure you want to delete?</p>
                <div className="deletedConfrimed">
                  <button className="conformed" onClick={handleDeleteYes}>
                    yes
                  </button>
                  <button
                    className="conformed"
                    onClick={() => handleDeleteNo()}
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardView;
