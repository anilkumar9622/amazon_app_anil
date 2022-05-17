import { all, fork } from 'redux-saga/effects'
import {watchAddToCart,watchCartItemList,watchDeleteToCart, watchQuantityToCart } from '../common/Sagas/cart_saga'

function* forkAllWatchers() {
    yield all([
       fork(watchAddToCart),
       fork(watchCartItemList),
       fork(watchDeleteToCart),
       fork(watchQuantityToCart)

    ])
  }

  export default forkAllWatchers