import {Link, NavLink, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import * as cartService from "../../service/CartService";
import * as userService from "../../service/UserService";
import * as orderService from "../../service/OrderService";
import {getAllCart} from "../../redux/action/cart";
import * as yup from "yup";
import Swal from "sweetalert2";
import {ThreeDots, RotatingLines} from "react-loader-spinner"
import vnpay from "../../images/logo-VNPAY.png";

function checkWordInString(str, word) {
    return str.toUpperCase().includes(word.toUpperCase());
}

export function Checkout() {
    const nav = useNavigate();
    const role = localStorage.getItem("role");
    const userName = localStorage.getItem("username");
    const token = localStorage.getItem("token");
    const [cart, setCart] = useState([]);
    const [customer, setCustomer] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const [cost, setCost] = useState('');
    const [address, setAddress] = useState('');
    // const [order, setOrder] = useState({});
    //Lấy danh sách sản phẩm  trong giỏ hàng của khách và thông tin khách hàng
    const getAll = async () => {
        if (role === "ROLE_CUSTOMER" || role === "ROLE_ADMIN") {
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
            const resCus = await userService.getUser();
            setCustomer(resCus);
            setAddress(resCus?.address)

        }
    }
    //Lấy phí vận chuyển
    const getCost = async (totalPrice, address) => {
        setAddress(address);
        if (totalPrice <= 15000000 && checkWordInString(address, "Đà Nẵng")) {
            await setCost(() => totalPrice * 0.07);
        } else {
            await setCost( 0);
        }
    }
    //Thanh toan VNPAY
    const payment = async (total) => {
        Swal.fire({
            icon: "warning",
            title: "Xác nhận thanh toán",
            // text: "Bạ",
            showCancelButton: true,
            cancelButtonText: "Hủy",
            confirmButtonText: "Xác nhận",
        }).then(async (res) => {
            if (res.isConfirmed) {
                const data = await orderService.payWithVNpay(total);
                window.location.href = data;
            } else if (res.dismiss === Swal.DismissReason.cancel) {
            }
        })
    }
    useEffect(() => {
        getCost(totalPrice, address);
    }, [totalPrice, address])
    useEffect(() => {
        getAll();
        dispatch(getAllCart());
        window.scrollTo(0, 0)
    }, [])

    if (!customer) {
        return null;
    }
    return (
        <>
            <div className="untree_co-section" style={{marginTop: "3%"}}>
                <div className="container">
                    <div className="mt-4 mb-3 d-flex">
                        <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                            Trang chủ
                        </NavLink>
                        <Link to={"/checkout"} className="mt-3 text-black fs-6">&nbsp; / Thanh toán</Link>
                    </div>
                    <div className="intro-excerpt ">
                        <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Thanh toán</h2>
                        <h2 className="text-black border-bottom1 mb-3"/>
                    </div>
                    <Formik
                        initialValues={{
                            consigneeName: customer?.name,
                            phoneNumber: customer?.phoneNumber,
                            deliveryAddress: customer?.address,
                            note: '',
                            shippingCost: 0,
                            totalPrice: totalPrice,

                        }}
                        validationSchema={yup.object({
                            consigneeName: yup.string().trim()
                                .required('Chưa nhập tên người nhận hàng.')
                                .min(2, 'Ít nhất 6 ký tự.')
                                .max(100, 'Tối đa 50 ký tự.'),
                            // .matches(/^\\w+@\\w+(.\\w+)$/, 'Chưa đúng định dạng email (xxx@xxx.xxx) với x không phải là ký tự đặc biệt '),
                            phoneNumber: yup.string().trim().required("Chưa nhập số điện thoại người nhận.")
                                .matches(/^(\+84|0)[1-9][0-9]{8}$/, "Nhập theo định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx với x là ký tự số.")
                                .max(12, "Không được quá 12 ký tự."),
                            deliveryAddress: yup.string().trim().required("Chưa nhập địa chỉ nhận hàng.")
                                .min(2, "Ít nhất 2 ký tự.")
                                .max(200, "Không được quá 200 ký tự."),
                            note: yup.string().trim()
                                .min(2, "Ít nhất 2 ký tự.")
                                .max(200, "Không được quá 200 ký tự."),
                            // deposit: yup.number()
                            //     .min(0, "Chưa chọn loại thanh toán")
                            //     .max(1, "Chưa chọn loại thanh toán"),
                        })}
                        onSubmit={async (values, {setSubmitting, resetForm}) => {
                            setSubmitting(false);
                            values = {
                                ...values,
                                shippingCost: cost
                            }
                            console.log(values);

                            //Gửi yêu cầu thanh toán
                            try {
                                localStorage.setItem("order", JSON.stringify(values));
                                resetForm();
                                await payment(totalPrice + cost);
                                // await orderService.createOrderAndOrderDetail(values);

                            } catch (e) {
                                await Swal.fire({
                                    title: "Thanh toán thất bại",
                                    text: 'Đã có lỗi hệ thống, làm phiền khách hàng thanh toán lại.',
                                    icon: "error",
                                    timer: 2500
                                })
                                nav("/cart")
                            } finally {
                                setSubmitting(false);
                            }
                        }}
                    >
                        {({isSubmitting}) => (
                            <Form>
                                <div className="row">
                                    <div className="col-md-6 mb-5 mb-md-0">
                                        <h2 className="h3 mb-3 text-black">Thông tin nhận hàng</h2>
                                        <div className="p-3 p-lg-5 border bg-white" style={{borderRadius: "10px"}}>
                                            <div className="form-group row">
                                                <div className="col-md-6">
                                                    <label htmlFor="c_fname" className="text-black">
                                                        Tên người nhận <span className="text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="c_fname"
                                                        name="consigneeName"
                                                    />
                                                    <ErrorMessage name="consigneeName" component="span"
                                                                  className="text-danger"
                                                                  style={{marginTop: "-5px", marginBottom: "5%"}}/>
                                                </div>
                                                <div className="col-md-6">
                                                    <label htmlFor="c_lname" className="text-black">
                                                        Số điện thoại <span className="text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="c_lname"
                                                        name="phoneNumber"
                                                    />
                                                    <ErrorMessage name="phoneNumber" component="span"
                                                                  className="text-danger"
                                                                  style={{marginTop: "-5px", marginBottom: "5%"}}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <label htmlFor="c_companyname" className="text-black mt-2">
                                                        Địa chỉ nhận <span className="text-danger">*</span>
                                                    </label>
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="c_companyname"
                                                        name="deliveryAddress"
                                                        onKeyUp={async (e) => {
                                                            await setAddress(e.target.value);
                                                            await getCost(totalPrice, e.target.value.toString());
                                                        }}
                                                    />

                                                    <ErrorMessage name="deliveryAddress" component="span"
                                                                  className="text-danger"
                                                                  style={{marginTop: "-5px", marginBottom: "5%"}}/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="c_order_notes" className="text-black mt-2">
                                                    Ghi chú
                                                </label>
                                                <Field
                                                    as="textarea"
                                                    name="note"
                                                    id="c_order_notes"
                                                    cols={30}
                                                    rows={3}
                                                    className="form-control"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div className="mt-2">
                                                <Field hidden name="shippingCost" type="number" value={cost}/>
                                                <Field hidden name="totalPrice" type="number" value={totalPrice}/>
                                                <p>**Lưu ý: <br/>
                                                    - Sau khi đặt hàng, nhận viên cửa hàng sẽ liên hệ với bạn để
                                                    xác nhận đơn hàng. <br/>
                                                    - Đối với các đơn hàng có địa chỉ nhận hàng không thuộc phạm vi
                                                    thành phố Đà Nẵng, nhân viên sẽ liên hệ báo giá vận chuyển, khách
                                                    hàng sẽ thanh toán phí vận chuyển trực tiếp cho bên vận chuyển khi
                                                    nhận hàng.
                                                    <br/>- Bạn vui lòng giữ liên lạc để cửa hàng có thể liên
                                                    hệ sớm nhất.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="row mb-5">
                                            <div className="col-md-12">
                                                <h2 className="h3 mb-3 text-black">Đơn hàng</h2>
                                                <div className="p-3 p-lg-3 border bg-white"
                                                     style={{borderRadius: "10px"}}>
                                                    <table className="table table-responsive">
                                                        <thead style={{fontSize: "15px", marginRight: "5%"}}>
                                                        <tr>
                                                            <th>STT</th>
                                                            <th width={100}/>
                                                            <th style={{width: "35%"}}>Sản phẩm</th>
                                                            <th>Số lượng</th>
                                                            <th>Thành tiền</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                    <div className="table">
                                                        <div className="outer-wapper">
                                                            <div className="table-wapper">
                                                                <table className="table table-responsive">
                                                                    <thead hidden style={{fontSize: "15px"}}>
                                                                    <tr>
                                                                        <th width={100}/>
                                                                        <th style={{width: "40%"}}>Sản phẩm</th>
                                                                        <th className="text-center">Số lượng</th>
                                                                        <th>Thành tiền</th>
                                                                    </tr>
                                                                    </thead>
                                                                    {cart.length < 1 ? <tr>
                                                                            <th colSpan={6}>
                                                                                <div className="container-fluid">
                                                                                    <h2 className="text-center">
                                                                                        Chưa có sản phẩm trong giỏ hàng
                                                                                    </h2>
                                                                                    <div className="text-center mt-4">
                                                                                        <NavLink to={"/list"}
                                                                                                 className="btn btn-warning btn-lg fw-bold">
                                                                                            => Quay lại trang mua sắm
                                                                                        </NavLink>
                                                                                    </div>

                                                                                </div>
                                                                            </th>
                                                                        </tr> :
                                                                        <tbody style={{verticalAlign: "middle"}}>
                                                                        {cart.map((list, index) => (
                                                                            <tr key={index + list.productId.productCode}>
                                                                                <td style={{width: "5%"}}
                                                                                    className="text-center">{index + 1}</td>
                                                                                <td width={100}
                                                                                    className="product-thumbnail">
                                                                                    {/*<Link to={`/detail/${list.productId.id}`}*/}
                                                                                    {/*      style={{textDecoration: "none"}}>*/}
                                                                                    <Link
                                                                                        to={`/detail/${list.productId.id}`}>
                                                                                        <img
                                                                                            src={list.productId.image}
                                                                                            alt="Image123"
                                                                                            className="img-fluid"
                                                                                            width={75}
                                                                                        />
                                                                                    </Link>

                                                                                    {/*</Link>*/}
                                                                                </td>
                                                                                <td style={{width: "40%"}}>
                                                                                    <Link
                                                                                        to={`/detail/${list.productId.id}`}>
                                                                                        {list.productId.name} -
                                                                                        ({list.productId.productCode})
                                                                                    </Link>
                                                                                </td>
                                                                                <td className="text-center"
                                                                                    style={{paddingLeft: "7%"}}>{list.quantity}</td>
                                                                                <td style={{paddingLeft: "15%"}}>{new Intl.NumberFormat('vi-VN',
                                                                                    {
                                                                                        style: 'currency',
                                                                                        currency: 'VND'
                                                                                    })
                                                                                    .format(list.productId.price * list.quantity)}
                                                                                </td>
                                                                            </tr>
                                                                        ))}
                                                                        </tbody>
                                                                    }
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <table className="table table-responsive">
                                                        <thead>
                                                        <tr>
                                                            <th width={50}/>
                                                            <th style={{width: "40%"}}></th>
                                                            <th className="text-center"></th>
                                                            <th></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td></td>
                                                            <td className="text-black">
                                                                Tạm tính:
                                                            </td>
                                                            <td className="text-black font-weight-bold">
                                                            </td>
                                                            <td></td>
                                                            <td className="text-black">
                                                                <strong className="product-price">
                                                                    {new Intl.NumberFormat('vi-VN',
                                                                        {
                                                                            style: 'currency',
                                                                            currency: 'VND'
                                                                        })
                                                                        .format(totalPrice)}
                                                                </strong>

                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td className="text-black">
                                                                Phí vận chuyển:
                                                            </td>
                                                            <td className="text-black font-weight-bold">
                                                            </td>
                                                            <td></td>
                                                            <td className="text-black">
                                                                <strong className="product-price">
                                                                    {new Intl.NumberFormat('vi-VN',
                                                                        {
                                                                            style: 'currency',
                                                                            currency: 'VND'
                                                                        })
                                                                        .format(cost)}
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td></td>
                                                            <td className="text-black font-weight-bold">
                                                                <strong>Tổng tiền: </strong>
                                                            </td>
                                                            <td className="text-black font-weight-bold">
                                                            </td>
                                                            <td></td>
                                                            <td className="font-weight-bold text-danger">
                                                                {
                                                                    token == null ? "0đ"
                                                                        :
                                                                        <strong
                                                                            className="product-price">{new Intl.NumberFormat('vi-VN',
                                                                            {
                                                                                style: 'currency',
                                                                                currency: 'VND'
                                                                            })
                                                                            .format(totalPrice + cost)}
                                                                        </strong>
                                                                }
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    <div className="row">{cart.length < 1 ? "" :
                                                        <div className="col-md-12 text-center">
                                                            {isSubmitting ?
                                                                <div>
                                                                    <div>
                                                                        <RotatingLines/>
                                                                    </div>
                                                                </div>
                                                                :
                                                                <button type="submit"
                                                                        className="btn fw-bold btn-lg py-3"
                                                                        style={{
                                                                            borderColor: "gray",
                                                                            border: "2px solid gray"
                                                                        }}
                                                                >
                                                                    <img src={vnpay} alt="Thanh toán qua VNPAY"
                                                                         height={55}/>
                                                                </button>
                                                            }
                                                        </div>
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
            {/*<div className="row mb-3 d-flex">*/}
            {/*    <div className="col-md-4">*/}
            {/*        <p className="fs-5 text-black">Chọn cách đặt hàng: </p>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-8">*/}
            {/*        <div className="form-check">*/}
            {/*            <Field*/}
            {/*                className="form-check-input"*/}
            {/*                type="radio"*/}
            {/*                name="deposit"*/}
            {/*                id="flexRadioDefault1"*/}
            {/*                style={{marginTop: "2%"}}*/}
            {/*                value={0}*/}
            {/*            />*/}
            {/*            <label className="form-check-label myCheckbox"*/}
            {/*                   htmlFor="flexRadioDefault1"*/}
            {/*                   style={{fontSize: "17px"}}*/}
            {/*            >*/}
            {/*                Đặt cọc 30% tổng tiền sản phẩm*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*        <div className="form-check">*/}
            {/*            <Field*/}
            {/*                className="form-check-input"*/}
            {/*                type="radio"*/}
            {/*                name="deposit"*/}
            {/*                id="flexRadioDefault2"*/}
            {/*                defaultChecked="true"*/}
            {/*                style={{marginTop: "2%"}}*/}
            {/*                value={1}*/}
            {/*            />*/}
            {/*            <label className="form-check-label myCheckbox"*/}
            {/*                   htmlFor="flexRadioDefault2"*/}
            {/*                   style={{fontSize: "17px"}}*/}
            {/*            >*/}
            {/*                Thanh toán toàn bộ*/}
            {/*            </label>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}