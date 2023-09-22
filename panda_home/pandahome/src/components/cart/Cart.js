import {Link, NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as cartService from "../../service/CartService"
import Swal from "sweetalert2";
import {getAllCart} from "../../redux/action/cart";
import {useDispatch} from "react-redux";

export function Cart() {
    const role = localStorage.getItem("role");
    const userName = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const dispatch = useDispatch();

    //Lấy danh sách sản phẩm trong giỏ hàng của khách
    const getAll = async () => {
        if (token !== null) {
            const res = await cartService.getAll();
            setCart(res);
            setTotalPrice(0);
            if (res != null) {
                {
                    await res.map(async (list) => (
                        await setTotalPrice((prevState) => (prevState + list.productId.price * list.quantity))
                    ))
                }
            }
        }
    }
    // Chỉnh sửa quantity
    //Cộng
    const setAddQuantity = async (quantity, id) => {
        const res = await cartService.setQuantity(1, id);
        await dispatch(getAllCart());
        await getAll();

        switch (res.data) {
            case "Số lượng sản phẩm trong kho không đủ.":
                await Swal.fire({
                    icon: "warning",
                    title: "Số lượng sản phẩm trong kho không đủ.",
                    timer: 2500
                });
                break;
        }
    }
    //Trừ
    const setSubQuantity = async (name, quantity, id) => {
        if (quantity - 1 <= 0) {
            await Swal.fire({
                icon: "warning",
                title: "Xóa sản phẩm",
                html: `Xóa sản phẩm <span style="color: red">${name}</span> khỏi giỏ hàng?`,
                showCancelButton: true,
                confirmButtonText: 'Xóa',
                cancelButtonText: 'Không',
                reverseButtons: true,
                cancelButtonColor: '#3085d6',
                confirmButtonColor: '#d33'
            }).then(async (res) => {
                if (res.isConfirmed) {
                    const res = await cartService.setQuantity(-1, id);
                    await getAll();
                    switch (res.data) {
                        case "Đã xóa sản phẩm":
                            await Swal.fire({
                                icon: "success",
                                title: "Đã xóa sản phẩm khỏi giỏ hàng.",
                                timer: 2500
                            });
                            break;
                    }
                }
            })
        } else {
            const res = await cartService.setQuantity(-1, id);
        }
        await getAll();
        await dispatch(getAllCart());
    }


    //Xóa 1 sản phẩm
    const deleteCart = async (id) => {
        const res = await cartService.deleteCart(id);
        await dispatch(getAllCart());
        if (res.status === 200) {
            await Swal.fire({
                icon: "success",
                title: "Đã xóa sản phẩm khỏi giỏi hàng.",
                timer: 2500
            });
            await getAll();
        } else {
            await Swal.fire({
                icon: "error",
                title: "Không xóa được.",
                timer: 2500
            });
            await getAll();
        }

    }
    //Aler xác nhận xóa 1
    const deleteConfirm = async (id, name) => {
        await Swal.fire({
            icon: "warning",
            title: "Xóa sản phẩm",
            html: `Xóa sản phẩm <span style="color: red">${name}</span> khỏi giỏ hàng?`,
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không',
            reverseButtons: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33'
        }).then(async (res) => {
            if (res.isConfirmed) {
                await deleteCart(id);
            }
        })
    }
    //Xóa tất cả sản phẩm
    const deleteAllCart = async () => {
        const res = await cartService.deleteAllCart();
        // console.log(res.status);
        await dispatch(getAllCart());
        await getAll();
        // console.log(cart);
        if (res.status === 200) {
            await Swal.fire({
                icon: "success",
                title: "Đã xóa giỏi hàng.",
                timer: 2500
            })
            // await getAllCart();
        } else {
            await Swal.fire({
                icon: "error",
                title: "Không xóa được.",
                timer: 2500
            })
        }

    }

    //Aler xác nhận xóa tất cả
    const deleteAllConfirm = async () => {
        await Swal.fire({
            icon: "warning",
            title: "Xóa sản phẩm",
            html: `Xóa tất cả sản phẩm khỏi giỏ hàng?`,
            showCancelButton: true,
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Không',
            reverseButtons: true,
            cancelButtonColor: '#3085d6',
            confirmButtonColor: '#d33'
        }).then(async (res) => {
            if (res.isConfirmed) {
                await deleteAllCart();
            }
        })
    }

    useEffect(() => {
        getAll();
        dispatch(getAllCart());
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="untree_co-section before-footer-section" style={{marginTop: "4%"}}>
                <div className="container-fluid" style={{padding: "0 5%"}}>
                    <div className="row mb-5">
                        <div className="col-md-9">
                            <div className=" d-flex" style={{paddingLeft: "5%"}}>
                                <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                                    Trang chủ
                                </NavLink>
                                <a href={"/cart"} className="mt-3 text-black fs-6">&nbsp; / Giỏ hàng</a>
                            </div>
                            <div className="intro-excerpt">
                                <h2 className="text-black mb-3 mt-3 fw-bold text-uppercase fs-5">Giỏ hàng của bạn</h2>
                                <h2 className="text-black border-bottom1"/>
                            </div>
                            {
                                token == null ?
                                    <div className="text-center">
                                        <h2>Bạn chưa đăng nhập</h2>
                                        <NavLink to={"/login"} className="btn btn-warning fw-bold">
                                            => ĐĂNG NHÂP
                                        </NavLink>
                                    </div>
                                    :
                                    <div>
                                        <div className="site-blocks-table">
                                            <table className="table">
                                                <thead>
                                                <tr>
                                                    <th style={{width: "0%"}}>STT</th>
                                                    <th style={{width: "35%"}} className="product-name"
                                                        colSpan={2}>Thông tin sản
                                                        phẩm
                                                    </th>
                                                    <th style={{width: "20%"}} className="product-price">Đơn giá</th>
                                                    <th style={{width: "20%"}} className="product-quantity">Số lượng
                                                    </th>
                                                    <th style={{width: "20%"}} className="product-total">Thành tiền</th>
                                                    <th style={{width: "5%"}} className="product-remove">
                                                        {cart.length == ""
                                                            ?
                                                            <span className="">
                                                        X
                                                        </span>
                                                            :
                                                            <span typeof="button"
                                                                  className="btn btn1 btn-black btn-lg"
                                                                  title="Xóa tất cả sản phẩm trong giỏ hàng"
                                                                  onClick={() => deleteAllConfirm()}>
                                                        X
                                                        </span>
                                                        }

                                                    </th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="table">
                                            <div className="outer-wapper">
                                                <div className="table-wapper">
                                                    <div className="site-blocks-table">
                                                        <table className="table">
                                                            <thead hidden>
                                                            <tr>
                                                                <th className="product-name" colSpan={2}>Thông tin sản
                                                                    phẩm
                                                                </th>
                                                                <th className="product-price">Đơn giá</th>
                                                                <th className="product-quantity">Số lượng</th>
                                                                <th className="product-total">Thành tiền</th>
                                                                <th className="product-remove">
                                                                    {cart.length == ""
                                                                        ?
                                                                        <span className="">
                                                        X
                                                        </span>
                                                                        :
                                                                        <span typeof="button"
                                                                              className="btn btn1 btn-black btn-lg"
                                                                              title="Xóa tất cả sản phẩm trong giỏ hàng"
                                                                              onClick={() => deleteAllConfirm()}>
                                                        X
                                                        </span>
                                                                    }

                                                                </th>
                                                            </tr>
                                                            </thead>
                                                            {
                                                                cart.length == "" ?
                                                                    <tr>
                                                                        <th colSpan={6}>
                                                                            <div className="container-fluid">
                                                                                <h2 className="text-center">
                                                                                    Giỏ hàng đang trống
                                                                                </h2>
                                                                                <div className="text-center mt-4">
                                                                                    <NavLink to={"/list"}
                                                                                             className="btn btn-warning btn-lg fw-bold">
                                                                                        => Quay lại trang mua sắm
                                                                                    </NavLink>
                                                                                </div>

                                                                            </div>
                                                                        </th>
                                                                    </tr>
                                                                    :
                                                                    <tbody>
                                                                    {
                                                                        cart.map((list, index) => (
                                                                            <tr key={index + list.productId.productCode}>
                                                                                <td style={{width: "5%"}}>{index + 1}</td>
                                                                                <td style={{width: "13%"}} className="product-thumbnail">
                                                                                    <Link
                                                                                        to={`/detail/${list.productId.id}`}
                                                                                        style={{textDecoration: "none"}}>
                                                                                        <img
                                                                                            src={list.productId.image}
                                                                                            alt="Image123"
                                                                                            className="img-fluid"
                                                                                        />
                                                                                    </Link>
                                                                                </td>
                                                                                <td style={{width: "22%"}} className="product-name">
                                                                                    <Link
                                                                                        to={`/detail/${list.productId.id}`}
                                                                                        style={{textDecoration: "none"}}>
                                                                                        <h6 className="text-black">{list.productId.name} - {list.productId.productCode}</h6>
                                                                                    </Link>
                                                                                </td>
                                                                                <td style={{width: "20%"}}>
                                                                                    {new Intl.NumberFormat('vi-VN',
                                                                                        {
                                                                                            style: 'currency',
                                                                                            currency: 'VND'
                                                                                        })
                                                                                        .format(list.productId.price)}
                                                                                </td>
                                                                                <td style={{width: "17%"}}>
                                                                                    <div
                                                                                        className="input-group mb-3 d-flex align-items-center quantity-container"
                                                                                        style={{
                                                                                            maxWidth: 120,
                                                                                            margin: "auto"
                                                                                        }}
                                                                                    >
                                                                                        <div
                                                                                            className="input-group-prepend">
                                                                                            <button
                                                                                                className="btn1 btn-outline-black decrease"
                                                                                                type="button"
                                                                                                style={{width: "30px"}}
                                                                                                onClick={async () => {
                                                                                                    await setSubQuantity(list.productId.name, list.quantity, list.productId.id)
                                                                                                }}
                                                                                            >
                                                                                                −
                                                                                            </button>
                                                                                        </div>
                                                                                        <input type="text"
                                                                                               style={{
                                                                                                   height: "40px",
                                                                                                   width: "40%",
                                                                                                   borderRadius: "5px"
                                                                                               }}
                                                                                               className="input text-center"
                                                                                               min={1}
                                                                                               value={list?.quantity}
                                                                                        />
                                                                                        <div
                                                                                            className="input-group-append">
                                                                                            <button
                                                                                                className="btn1 btn-outline-black increase"
                                                                                                type="button"
                                                                                                style={{width: "30px"}}
                                                                                                onClick={async () => {
                                                                                                    await setAddQuantity(list.quantity, list.productId.id)
                                                                                                }}
                                                                                            >
                                                                                                +
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </td>
                                                                                <td style={{width: "25%"}} className="text-danger fs-6 fw-bolder">
                                                                                    {new Intl.NumberFormat('vi-VN',
                                                                                        {
                                                                                            style: 'currency',
                                                                                            currency: 'VND'
                                                                                        })
                                                                                        .format(list.productId.price * list.quantity)}
                                                                                </td>
                                                                                <td style={{width: "5%"}}>
                                                                    <span
                                                                        onClick={() => deleteConfirm(list.id, list.productId.name)}
                                                                        className="btn1 btn btn-black btn-sm"
                                                                        title="Xóa sản phẩm"
                                                                    >
                                                                        X
                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        ))
                                                                    }
                                                                    </tbody>
                                                            }
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        <div className="col-md-3 pl-5 mt-5">
                            <div className="row justify-content-end mt-5 bg-light border"
                                 style={{borderRadius: "10px", height: "300px"}}>
                                <div className="col-md-12 mt-3">
                                    <div className="row mt-2">
                                        <div className="col-md-12 text-right border-bottom mb-5">
                                            <h3 className="text-black h4 fw-bold">
                                                Thanh toán:
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="row mb-5">
                                        <div className="col-md-5 mt-2">
                                            <h5 className="text-black fw-bold">Tổng tiền: </h5>
                                        </div>

                                        <div className="col-md-7 mt-2 text-center">
                                            <span className="fw-bold fs-4" style={{color: "red"}}>
                                                {
                                                    token == null ?
                                                        <strong
                                                            className="product-price">{new Intl.NumberFormat('vi-VN',
                                                            {style: 'currency', currency: 'VND'})
                                                            .format(0)}
                                                        </strong>
                                                        :
                                                        <strong
                                                            className="product-price">{new Intl.NumberFormat('vi-VN',
                                                            {style: 'currency', currency: 'VND'})
                                                            .format(totalPrice)}
                                                        </strong>
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        token == null ?
                                            ""
                                            :
                                            cart.length == "" ? ""
                                                :
                                                <div className="row">
                                                    <div className="col-md-12 text-center">
                                                        <Link to={"/checkout"}>
                                                            <button
                                                                className="btn btn-warning fw-bold btn-lg py-3 btn-block w-75"
                                                            >
                                                                Thanh toán
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}