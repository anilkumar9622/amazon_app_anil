import { combineReducers } from '@reduxjs/toolkit'
import {deleteitems, cart} from '../common/Redux/cartReducerCumActions'
 
 const rootReducer = combineReducers({
    cart,
    deleteitems
  })

  export default rootReducer