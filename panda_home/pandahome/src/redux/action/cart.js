import axios from "axios";
import {GET_ALL_CART} from "./type";

export const getAllCart = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://localhost:8080/api/cart/all`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                }
            })
        dispatch({
            type: GET_ALL_CART,
            payload: res.data,
        })
    } catch (e) {
        console.log(e)
    }
}