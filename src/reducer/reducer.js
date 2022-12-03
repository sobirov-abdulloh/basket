import {KIRIT} from"./type"

 
const initialState={
  product:["olma"]
 }

 const reducer=(state,action)=>{
  switch(action.type){
    case KIRIT:
      return (state ={
        product:[...state.product, action.payload]
      })
    
      default:
        return state

    }
}
export  {initialState, reducer}