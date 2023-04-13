import "./edit.css";
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getallUsers} from '../../api/api'
import axios from 'axios'
const initialValue = {
    imagePath: "",
    name: "",
    price: 0,
    category: "",
    brand: "",
    producedby: "",
    size: "",
    code: 0,
    id: 0
}
const url = "http://localhost:4000/products/";


const editUser = async (id: string, arr: any) => {
    return await axios.put(`http://localhost:4000/products/${id}`, arr)
}
const EditUser = () => {

    const [user, setUser] = useState(initialValue);
    const {name, imagePath, price, category, brand, producedby, size, code} = user;

    const { id } = useParams();

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () =>{
        const response = await getallUsers(id);
        setUser(response.data);
        console.log(response.data)
    }


    const onValueChange = (e: any) =>
    {
        console.log(e);
        console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const editProductDetails = async () =>{
       await editUser(String(id), user);
       console.log(id)
    }
    return (
       <div className="editPage">
            <input type="text"  onChange={(e) => onValueChange(e)} name="name" value={name} />
            <input type="text"  onChange={(e) => onValueChange(e)} name="imagePath" value={imagePath} />
            <input type="number"  onChange={(e) => onValueChange(e)} name="price" value={price} />
            <input type="text"  onChange={(e) => onValueChange(e)} name="category" value={category}/>
            <input type="text"  onChange={(e) => onValueChange(e)} name="brand" value={brand} />
            <input type="text"  onChange={(e) => onValueChange(e)} name="producedby" value={producedby}/>
            <input type="text"  onChange={(e) => onValueChange(e)} name="size" value={size} />
            <input type="number"  onChange={(e) => onValueChange(e)} name="code" value={code}/>
            <button className="card-button" onClick={() => editProductDetails()}>
                Изменить
            </button>
       </div>
    )
}


export default EditUser;