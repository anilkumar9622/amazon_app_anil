
import  rootService  from "../../services/index";
import axios from "axios";
import { FETCH_CART_ITEMS } from "../Redux/cartReducerCumActions";
const  { endpoints, BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async(newitem)=> {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbb",newitem);
    const token = sessionStorage.getItem('token');

    console.log("<<<<",token)

    return await axios.post(`${BASE_URL}/addCart`, newitem.payload,{ headers: {"w_auth" : `${token}`} })
    // const request = axios.get(`${USER_SERVER}/addToCart?productId=${_id}`)

}
// export function addNewItemToCart(id) {
//     const request = axios.get(`${BASE_URL}/addCart`, id.payload)
//         .then(response => response.data);

    
// }

export const getAllCartItems = async () =>{
    const token = sessionStorage.getItem('token');

    // console.log("<<<<",getAllCartItems)
    return await axios.get(`${BASE_URL}/cartview`,{ headers: {"w_auth" : `${token}`} })
    
}

export const deleteNewItemToCart = async (_id) =>{
    const token = sessionStorage.getItem('token');

    // console.log("delete items",_id.payload)
    return await axios.delete(`${BASE_URL}/removeItem/?_id=${_id.payload}`,{ headers: {"w_auth" : `${token}`} })
}

export const addQuantityToCart = async(_id)=> {
    // console.log(id.payload);
    const token = sessionStorage.getItem('token');

    return await axios.patch(`${BASE_URL}/quantity/?_id=${_id.payload}`,{ headers: {"w_auth" : `${token}`} })
}