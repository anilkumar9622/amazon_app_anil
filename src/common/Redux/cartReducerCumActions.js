
export const FETCH_CART_ITEMS_FAIL = "FETCH_CART_ITEMS_FAIL";
export const FETCH_CART_ITEMS_SUCCESS = "FETCH_CART_ITEMS_SUCCESS";
export const FETCH_CART_ITEMS = "FETCH_CART_ITEMS"

export const fetchCartItemsSuccess = (payload) => ({ type:FETCH_CART_ITEMS_SUCCESS, payload });
export const fetchCartItemsFail= (payload) => ({ type:FETCH_CART_ITEMS_FAIL, payload });
export const fetchCartItems= (payload) => ({ type:FETCH_CART_ITEMS, payload });

export const ADD_CART_ITEMS = "ADD_CART_ITEMS"
export const ADD_CART_ITEMS_SUCCESS = "ADD_CART_ITEMS_SUCCESS";
export const ADD_CART_ITEMS_FAIL = "ADD_CART_ITEMS_FAIL"

export const addCartItems = (payload) => ({ type:ADD_CART_ITEMS, payload});
export const addCartItemsSuccess = (payload) => ({ type: ADD_CART_ITEMS_SUCCESS, payload});
export const addCartItemsFail = (payload=null) => ({ type: ADD_CART_ITEMS_FAIL, payload});

export const DELETE_CART_ITEMS = "DELETE_CART_ITEMS"
export const DELETE_CART_ITEMS_SUCCESS = "DELETE_CART_ITEMS_SUCCESS";
export const DELETE_CART_ITEMS_FAIL = "DELETE_CART_ITEMS_FAIL"

export const deleteCartItems = (payload) => ({ type: DELETE_CART_ITEMS, payload});
export const deleteCartItemsSuccess = (payload) => ({ type: DELETE_CART_ITEMS_SUCCESS, payload});
export const deleteCartItemsFail = (payload=null) => ({ type: DELETE_CART_ITEMS_FAIL, payload});

export const QUANTITY_CART_ITEMS = "QUANTITY_CART_ITEMS"
export const QUANTITY_CART_ITEMS_SUCCESS = "QUANTITY_CART_ITEMS_SUCCESS";
export const QUANTITY_CART_ITEMS_FAIL = "QUANTITY_CART_ITEMS_FAIL"

export const quantityCartItems = (payload) => ({ type: QUANTITY_CART_ITEMS, payload});
export const quantityCartItemsSuccess = (payload) => ({ type: QUANTITY_CART_ITEMS_SUCCESS, payload});
export const quantityCartItemsFail = (payload=null) => ({ type: QUANTITY_CART_ITEMS_FAIL, payload});

const initialState = {
        loading : true,
        items : [],
        totalAmount: 0,
        totalItem: 0,
  }
  
  
 export  const cart=(state = initialState, action)=> {
    const { type, payload } = action;
    console.log("OOOOOOOOOOOOOOOOOOOOOO",type, payload);
    switch (type) {
      // GET ALL CART ITEMS
      case FETCH_CART_ITEMS:
        return {
                loading : false,
                items : payload
        } 
      case FETCH_CART_ITEMS_FAIL:
        return {
                loading : false,
                items : payload
        } 
        case FETCH_CART_ITEMS_SUCCESS:
          return {
                loading : true,
                items : payload
          } 
        // --------------------------------
        // ----- ADD TO CART --------------------
        case ADD_CART_ITEMS:
          return {
                  loading : false,
                  items : payload
          } 
        case ADD_CART_ITEMS_SUCCESS:
        return {
                loading : true,
                items : payload
        } 
        case ADD_CART_ITEMS_FAIL:
          return {
                  loading : false,
                  items : payload
          }
  // -------------------------------------------------------
  //  --------DELETE TO CART -------------------------
        
      //-------------------------------
      //-------quantity of cart------------
      case QUANTITY_CART_ITEMS:
        return {
                loading : false,
                items : payload
      } 
      case QUANTITY_CART_ITEMS_SUCCESS:
         return {
                 loading : true,
                 items : payload
      } 
      case QUANTITY_CART_ITEMS_FAIL:
         return {
                 loading : false,
                 items : payload
      } 
        default:
        return state
}
        

  }





const deletestate = {
        loading : true,
       delete : []
  }
  
 
 export const deleteitems=(state = deletestate, action)=> {
        const { type, payload } = action;
        console.log("OOOOOOOOOOOOOOOOOOOOOO",type, payload);
        switch (type) {
          // GET ALL CART ITEMS
          case DELETE_CART_ITEMS:
                return {
                        loading : false,
                        delete : payload
              } 
              case DELETE_CART_ITEMS_SUCCESS:
                 return {
                         loading : true,
                        delete : payload
              } 
              case DELETE_CART_ITEMS_FAIL:
                 return {
                         loading : false,
                         delete : payload
              } 
              default:
        return state
}
        

  }
