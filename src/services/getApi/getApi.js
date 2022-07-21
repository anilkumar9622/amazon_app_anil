import axios from "axios"
import RootService from "../index";
const { BASE_URL } = RootService;
export const cardApi1 = async () =>{
    return await axios.get(`${BASE_URL}/card`)
}


export const cardApi2 = async () =>{
    return await axios.get(`${BASE_URL}/card2`)
}

export const cardApi3 = async () =>{
    return await axios.get(`${BASE_URL}/card3`)
}

export const cardApi4 = async () =>{
    return await axios.get(`${BASE_URL}/card4`)
}

export const cardApi5 = async () =>{
    const token = sessionStorage.getItem('token');
    return await axios.get(`${BASE_URL}/cartview`, { headers: {"w_auth" : `${token}`} } )
}
export const cardApi6 = async () =>{
    const token = sessionStorage.getItem('token');
    return await axios.delete(`${BASE_URL}/removeItem`, { headers: {"w_auth" : `${token}`} } )
}
export const cardApi7 = async (id) =>{
    return await axios.patch(`${BASE_URL}/quantity/${id}`)
}


