import axios from "axios";

export const getUser = async ()=>{
    const token = localStorage.getItem("token");
    try {
        return (await axios.get(`http://localhost:8080/api/customer`
            ,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data;
    }catch (e) {
        console.log(e)
    }
}