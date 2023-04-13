import axios from 'axios';
import { IProduct } from './../models';


const url = "http://localhost:4000/products";

export const getallUsers = async (id: any) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user: any) => {
    return await axios.post(url,user);
}


export const deleteUser = async (id: any) => {
    return await axios.delete(`${url}/${id}`);
}