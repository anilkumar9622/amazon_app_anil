import { call, put, takeLatest, } from 'redux-saga/effects'
import {addNewItemToCart,addQuantityToCart,getAllCartItems,deleteNewItemToCart} from '../Services/cartService'
import {FETCH_CART_ITEMS,fetchCartItemsFail,fetchCartItemsSuccess,fetchCartItems,
   ADD_CART_ITEMS, addCartItemsFail, DELETE_CART_ITEMS,deleteCartItemsFail,deleteCartItemsSuccess,
    QUANTITY_CART_ITEMS,quantityCartItemsFail,quantityCartItemsSuccess} from '../Redux/cartReducerCumActions'


// FETCH ALL CART DATA
function* fetchCartItemsList() {
   
   try { 
   
    const {data} = yield call(getAllCartItems);
    console.log("vvvvvvvvvvvv",data?.length);
    yield put(fetchCartItemsSuccess(data?.data));
   } catch (e) {
      yield put(fetchCartItemsFail(e));
   }
}

export function* watchCartItemList() {
   yield takeLatest(FETCH_CART_ITEMS, fetchCartItemsList);
 }




// ADD TO CART
function* addcartItemsList(payload){
   try{
      console.log("addingcartitems##########", payload);

      const data = yield call(addNewItemToCart,payload);
      console.log(">>>>>>>>>", data);
      yield put(fetchCartItems());
        }catch (e) {
           yield put(addCartItemsFail(e));
        }
}

export function* watchAddToCart() {
   console.log("===---===---====adding to cart")
   yield takeLatest(ADD_CART_ITEMS, addcartItemsList);
   console.log(" 44 ===---===---====adding to cart")

 }


// DELETE TO ITEMS CART

function* deletecartItemsList(payload){
   try{
      const data = yield call(deleteNewItemToCart,payload);
      console.log(">>>>>>>>>", data);
          yield put(deleteCartItemsSuccess([])); 
          yield put(fetchCartItems()); // Dispatch Action
          
        }catch (e) {
          yield put(deleteCartItemsFail(e));
        }
}
export function* watchDeleteToCart() {
   yield takeLatest(DELETE_CART_ITEMS, deletecartItemsList);
 }
//-----------quantity of cart-----------
function* addQuantityItemsList(payload){
   try{
      console.log(">##########", payload);

      const data = yield call(addQuantityToCart,payload);
      console.log(">>>>>>>>>", data);
      yield put(quantityCartItemsSuccess());
      // yield put(fetchCartItems());
        }catch (e) {
           yield put(quantityCartItemsFail(e));
        }
}

export function* watchQuantityToCart() {
   yield takeLatest(QUANTITY_CART_ITEMS, addQuantityItemsList);
 }

