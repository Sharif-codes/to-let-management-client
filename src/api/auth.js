import axios from "axios";

export const saveUser= async (user,name) =>{

    const currentUser= {
        name,
        email: user.email,
        role: 'user',
        
    }
    const {data}= await axios.post(`http://localhost:5000/users/${user.email}`, currentUser)
    return data;
} 
