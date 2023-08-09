import { DELETE_CARD,UPDATE_CARD,ADD_CARD } from "./action";
//images in the person and avatar

import { createStore } from "redux";
import cardData from "./cards.json";
const initialState={
   cards:cardData
      
};

const cardReducer=(state=initialState,action)=>{

   switch(action.type){

      //deleted card
      case DELETE_CARD:
         return{

           ...state,
            cards: state.cards.filter((card) => card.id !== action.payload),
         };

         //updated the card
         case UPDATE_CARD:
            return{
             ...state,
             cards:state.cards.map((card) => {
               if(card.id === action.payload.id){
                  return{
                     ...card,
                 description:action.payload.description,
                 status:action.payload.status,
                 priority:action.payload.status,
                  };
               }
               return card;
             }),
            };

            case ADD_CARD:
               return{
                  ...state,
                  cards:[...state.cards,action.payload],
               };
         default:
            return state;

   }
}

 const store=createStore(cardReducer);

export default store;