import {useState} from 'react'
import axios from 'axios'
import "./adminpanel.css"
export function AdminPanel(){
    const initialValue = {
        name: "",
        imagePath: "",
        category: "",
        price: 0,
        brand: "",
        producedBy: "",
        size: "",
        code: 0,
        id: 0,

    }
    const url = "http://localhost:4000/products/";

    async function addUser(user: any){
        return await axios.post(url,user);
    }
    const AddUser = () => {

        const [user, setUser] = useState(initialValue);
        const {name, imagePath, category, price, brand, producedBy, size, code, id} = user;
        
    
    
    const onValueChange = (e: any) =>
        {
          //  console.log(e);
          // console.log(e.target.value);
            setUser({...user, [e.target.name]: e.target.value});
           console.log(user);
        }
    
        const addUserDetails = async () =>{
           await addUser(user);
        }
    
    return(
        <div>
            
            <div className="Create-new-product" data-testid="admin">
                <h1>
                    Добро пожаловать в Админ панель
                </h1>
                <input type="text" placeholder='Название' onChange={(e) => onValueChange(e)} name="name" value={name} data-testid="name" />
                <input type="text" placeholder='url вашей фотографии' onChange={(e) => onValueChange(e)} name="imagePath" value={imagePath} />
                <input type="text" placeholder='Категория ваша: 1 - уход за телом и тд... по нумерации' onChange={(e) => onValueChange(e)} name="category" value={category} />
                <input placeholder='Цена' type="number" onChange={(e) => onValueChange(e)} name="price" value={price} />
                <input placeholder='Бренд' type="text" onChange={(e) => onValueChange(e)} name="brand" value={brand} />
                <input placeholder='Прозводство' type="text" onChange={(e) => onValueChange(e)} name="producedBy" value={producedBy} />
                <input placeholder='Размер или его вес' type="text" onChange={(e) => onValueChange(e)} name="size" value={size} />
                <input placeholder='штрихкод' type="number" onChange={(e) => onValueChange(e)} name="code" value={code} />
                <input placeholder='Id' type="number" onChange={(e) => onValueChange(e)} name="id" value={id} />
                <button className="card-button" onClick={() => addUserDetails()} data-testid="addProduct">Add</button>
            </div>
        </div>
    )
}
    return(
        <AddUser/>
    )
}