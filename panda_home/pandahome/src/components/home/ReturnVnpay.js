import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import * as orderService from "../../service/OrderService";
import Swal from "sweetalert2";
import {getAllCart} from "../../redux/action/cart";
import {useDispatch} from "react-redux";
import {ThreeDots, RotatingLines} from "react-loader-spinner"


export function ReturnVnpay() {
    const navigate = useNavigate()
    const [responseCode, setResponseCode] = useState()
    // const [idSeats,setIdSeats]= useState()
    const dispatch = useDispatch();


    const getURL = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const responseCode = urlParams.get('vnp_ResponseCode');
        console.log(responseCode);
        setResponseCode(responseCode)
    }
    // const getListSeat = () => {
    //     const listSeat = localStorage.getItem("listIdSeat")
    //     console.log(listSeat);
    //     setIdSeats(listSeat)
    // }


    const display = async () => {
        const order = (JSON.parse(localStorage.getItem("order")));
        if (order != null) {
            if (responseCode === "00") {
                Swal.fire({
                    icon: "warning",
                    timer: 2000,
                    title: "Đang kiểm tra thanh toán",
                }).then(async () => {
                    await orderService.createOrderAndOrderDetail(order);
                    await dispatch(getAllCart());
                    localStorage.removeItem("order")
                    await Swal.fire({
                        icon: "success",
                        timer: 3000,
                        title: "Thanh toán thành công",
                        showConfirmButton: false
                    });
                    navigate("/history")
                })
            } else {
                Swal.fire({
                    icon: "error",
                    timer: 5000,
                    title: "Thanh toán thất bại",
                    showConfirmButton: false
                }).then(() => {
                    localStorage.removeItem("order")
                    navigate("/")
                })
            }
        } else {
            navigate("/error")

        }

    }

    useEffect(() => {
        getURL()
    }, [])
    useEffect(() => {
        display()
    }, [responseCode])
    return (
        <>
            <div className="text-center" style={{margin: "25%"}}>
                <div>
                    <RotatingLines style={{width: "800px"}}/>
                </div>
            </div>
        </>
    )
}