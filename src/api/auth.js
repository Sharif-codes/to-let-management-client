import axios from "axios";

export const saveUser= async (user,name) =>{

    const currentUser= {
        name,
        email: user.email,
        role: 'user',
        
    }
    const {data}= await axios.post(`https://building-management-server-chi.vercel.app/users/${user.email}`, currentUser)
    return data;
} 
