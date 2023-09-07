import axios from "axios";

export const getSameProduct = async (id) => {
    const token = localStorage.getItem('token');
    try {
        return (await axios.get(`http://localhost:8080/api/product/same/${id}`)).data;
    }catch (e) {
        console.log(e)
    }
}


export const getAllImg = async (id) => {
    const token = localStorage.getItem('token');
    try {
        return (await axios.get(`http://localhost:8080/api/image/${id}`
            // , {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
        )).data;
    } catch (e) {
        console.log(e)
    }
}


export const getAllProduct = async (page, name) => {
    const token = localStorage.getItem('token');
    try {
        return (await axios.get(`http://localhost:8080/api/product/all?page=${page}&name=${name}`
            // , {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
        )).data;
    } catch (e) {
        console.log(e)
    }
}


export const getProById = async (id) => {
    // const token = localStorage.getItem('token');
    try {
        return (await axios.get(`http://localhost:8080/api/product/detail/${id}`
            // ,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
        )).data;
    } catch (e) {
        console.log(e)
    }
}


export const getTop4New = async () => {
    // const token = localStorage.getItem('token');
    try {
        return (await axios.get(`http://localhost:8080/api/product/top4`
            // ,
            // {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     }
            // }
        )).data;
    } catch (e) {
        console.log(e);
    }
}