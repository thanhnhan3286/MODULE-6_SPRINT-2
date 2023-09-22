import axios from "axios";

// export async function getOrderById() {
//
// }


export async function payWithVNpay(total) {
    const token = localStorage.getItem("token");

    try {
        return (await axios.post(`http://localhost:8080/vnpay/create?total=${total}`, ''
            , {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })).data;
    } catch (e) {
        console.log(e)
    }
}


export async function createOrderAndOrderDetail(order) {
    const token = localStorage.getItem("token");
    try {
        await axios.post(`http://localhost:8080/api/order/create`, order,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
    } catch (e) {
        console.log(e)
    }
}


export const getAllByIdOrder = async (id) => {
    const token = localStorage.getItem("token");
    try {
        return (await axios.get(`http://localhost:8080/api/order/detail?id=${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data;
    } catch (e) {
        console.log(e)
    }
}


export const getAllByIdCustomer = async () => {
    const token = localStorage.getItem("token");
    try {
        return (await axios.get(`http://localhost:8080/api/order`,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })).data;
    } catch (e) {
        console.log(e)
    }
}