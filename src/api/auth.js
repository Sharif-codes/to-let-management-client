import axiosSecure from ".";

export const getToken= async email=>{
    const {data}= await axiosSecure.post('/jwt', email)
    console.log('token recieved form server',data);
    return data;
}
// clear cookie
export const clearCookie = async () =>{
    const {data}= await axiosSecure.get('/logout')
    console.log('token recieved form server',data);
    return data;
}