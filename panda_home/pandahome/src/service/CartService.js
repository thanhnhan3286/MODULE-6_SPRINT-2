import axios from "axios";



export const setQuantity = async (quantity, id) => {
    const token = localStorage.getItem("token");
    try {
        return (await axios.post(`http://localhost:8080/api/cart/add?quantity=${quantity}&idProduct=${id}`,''
        ,{
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
            ));
    } catch (e) {
        console.log(e);
    }
}

export async function deleteAllCart() {
    const token = localStorage.getItem("token");
    try {
        return (await axios.post(`http://localhost:8080/api/cart/deleteAll`,
            "",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        ));
    } catch (e) {
        console.log(e);
    }
}


export const deleteCart = async (id) => {
    const token = localStorage.getItem("token");
    try {
        return (await axios.post(`http://localhost:8080/api/cart/delete?id=${id}`,
            "",
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        ));
    } catch (e) {
        console.log(e);
    }
}


export const getAll = async () => {
    const token = localStorage.getItem("token");
    try {
        return (await axios.get(`http://localhost:8080/api/cart/all`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            }
        )).data;
    } catch (e) {
        console.log(e);
    }
}