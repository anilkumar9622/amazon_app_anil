import { combineReducers } from '@reduxjs/toolkit'
import Cart from '../common/Redux/cartReducerCumActions'
 
 const rootReducer = combineReducers({
    Cart,
  })

  export default rootReducer