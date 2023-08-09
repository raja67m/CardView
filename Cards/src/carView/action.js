
 export const DELETE_CARD ="DELETE_CARD";
 export const UPDATE_CARD="UPDATE_CARD";
export const ADD_CARD= "ADD_CARD";

export const deleteCard =(cardId)=>({
   type:DELETE_CARD,
   payload:cardId,
});

export const updateCard =(itemUpdateId)=>{
   return{
      type:UPDATE_CARD,
      payload:itemUpdateId
   };
}


export const addCard=(card)=>{
   return{
      type:ADD_CARD,
      payload:card,
   }
}