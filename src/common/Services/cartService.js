
import  rootService  from "../../services/index";
import axios from "axios";
const  { endpoints, BASE_URL } = rootService;
const { addToCart } = endpoints;

export const addNewItemToCart = async(n)=> {
    console.log(n.payload,n.type);

    return await axios.post(`${BASE_URL}/addCart`,n.payload)
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