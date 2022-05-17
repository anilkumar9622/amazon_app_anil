
import  rootService  from "../../services/index";
import axios from "axios";
const  { endpoints, postRequest,BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async(newItem)=> {
    console.log(newItem.payload);

    return await axios.post(`${BASE_URL}/addCart`,newItem.payload)
}

export const getAllCartItems = async () =>{
    return await axios.get(`${BASE_URL}/cartview`)
}

export const deleteNewItemToCart = async (id) =>{
    console.log(id.payload);
    return await axios.delete(`${BASE_URL}/removeItem/${id.payload}`)
}

export const addQuantityToCart = async(id)=> {
    console.log(id.payload);

    return await axios.patch(`${BASE_URL}/quantity/${id.payload}`)
}