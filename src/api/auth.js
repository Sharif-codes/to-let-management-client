import axios from "axios";

export const saveUser= async user =>{

    const currentUser= {
        email: user.email,
        role: 'user',
    }
    const {data}= await axios.put(`http://localhost:5000/users/${user.email}`, currentUser)
    return data;
} 
