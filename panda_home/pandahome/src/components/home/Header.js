import "../../css/bootstrap.min.css";
import "../../css/tiny-slider.css";
import "../../css/style.css";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import logo from "../../images/pandahome3-2.png";
import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import * as cartService from "../../service/CartService";
import * as userService from "../../service/UserService";
import {useDispatch, useSelector} from "react-redux";
import {getAllCart} from "../../redux/action/cart";

export function Header() {
    const nav = useNavigate();
    const iconQuantity = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const role = localStorage.getItem("role");
    const token = localStorage.getItem("token");
    const [userName, setUserName] = useState(localStorage.getItem("username"));


    const handleLogout = () => {
        localStorage.setItem("token", '');
        localStorage.removeItem("token");
        localStorage.setItem("username", '');
        localStorage.setItem("role", '');
        nav("/login");
        dispatch(getAllCart());
    }

    //Lấy tên khách hàng
    const getUserName = async () => {
        if (role === "ROLE_CUSTOMER") {
            const res = await userService.getUser();
            setUserName(res.name);
        } else {
            setUserName('');
        }
    }

    useEffect(() => {
        getUserName()
    }, [localStorage.getItem("role")])
    useEffect(() => {
        if (token !== "null") {
            dispatch(getAllCart());
        }
    }, [localStorage.getItem("token")])
    return (
        <>
            {/* Start Header/Navigation */}
            <nav
                className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
                arial-label="Furni navigation bar"
            >
                <div className="container ">
                    <Link to="home" className="navbar-brand" href="">
                        <img src={logo} alt={"logo"} width="100px" style={{borderRadius: "10px"}}/>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsFurni"
                        aria-controls="navbarsFurni"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="row">
                        <div className="col-md-1"/>
                        <div className="col-md-10 text-center">
                            <div className="row g-4">
                                {/*<Formik*/}
                                {/*    initialValues={{*/}
                                {/*        name: name,*/}
                                {/*    }}*/}
                                {/*    onSubmit={async (values, {setSubmitting}) => {*/}
                                {/*        await setName(values.name);*/}
                                {/*        console.log(values.name);*/}
                                {/*        nav("/search/?nameSearch=" + values.name)*/}
                                {/*    }}>*/}
                                {/*    {({isSubmitting}) => (*/}
                                {/*        <Form>*/}
                                {/*            <div className="col-auto d-flex">*/}
                                {/*                <Field*/}
                                {/*                    type="text"*/}
                                {/*                    className="form-control"*/}
                                {/*                    placeholder="Tìm kiếm sản phẩm"*/}
                                {/*                    width="200px"*/}
                                {/*                    name="name"*/}
                                {/*                />*/}
                                {/*                <button type="submit" className="btn btn-warning"*/}
                                {/*                        style={{height: "38px", marginTop: "9px", marginLeft: "2%"}}>*/}
                                {/*                    <span className="fa fa-search"/>*/}
                                {/*                </button>*/}
                                {/*            </div>*/}
                                {/*        </Form>*/}
                                {/*    )}*/}
                                {/*</Formik>*/}
                            </div>
                        </div>
                        <div className="col-md-1"/>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0 fw-bold">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link fw-bold">
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li>
                                {/*<a className="nav-link">*/}
                                <NavLink to="/list" className="nav-link fw-bold">
                                    Sản phẩm ▾
                                </NavLink>
                                {/*</a>*/}
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to={"/list/khach"} className="nav-link bg-black">Nội thất phòng
                                            khách</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/bep"} className="nav-link bg-black">Nội thất phòng
                                            bếp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/ngu"} className="nav-link bg-black">Nội thất phòng
                                            ngủ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/van"} className="nav-link bg-black">Nội thất văn
                                            phòng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/nghe"} className="nav-link bg-black">Đồ gỗ mỹ nghệ</NavLink>
                                    </li>
                                </ul>
                            </li>
                            {/*<li>*/}
                            {/*    <a className="nav-link">Locations ▾</a>*/}
                            {/*    <ul className="dropdown">*/}
                            {/*        <li>*/}
                            {/*            <a className="nav-link bg-black">Germany</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="nav-link bg-black">Australia</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="nav-link bg-black">Switzerland</a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a className="nav-link bg-black">Japan</a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</li>*/}
                            <li>
                                <NavLink to="/policy" className="nav-link fw-bold" href="#">
                                    Chính sách ▾
                                </NavLink>
                                <ul className="dropdown">

                                    <li>
                                        <NavLink to={"/policy/transport"} className="nav-link bg-black">Vận
                                            chuyển</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/policy/warranty-repair"} className="nav-link bg-black">Bảo hành -
                                            Sửa
                                            chữa</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/policy/return"} className="nav-link bg-black">Chính sách đổi
                                            trả</NavLink>
                                    </li>
                                    {/*<li>*/}
                                    {/*    <a className="nav-link bg-black" href="#"></a>*/}
                                    {/*</li>*/}
                                    <li>
                                        <NavLink to={"/policy/payment"} className="nav-link bg-black">Chính sách thanh
                                            toán</NavLink>
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <NavLink to={"/contact"} className="nav-link fw-bold" >
                                    Liên hệ
                                </NavLink>
                            </li>
                        </ul>
                        {/*<ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0">*/}
                        <ul className="custom-navbar-nav navbar-nav mb-0 mb-md-0">
                            <li>
                                {role === "ROLE_ADMIN" ?
                                    <div>
                                        <p className="text-white nav-link"
                                           style={{marginBottom: "0px", fontSize: "15px"}}>
                                            ADMIN&nbsp;
                                        </p>
                                        <ul className="dropdown">
                                            <li>
                                                <a className="nav-link bg-black" href="#" onClick={() => {
                                                    handleLogout()
                                                }}><i className="fa-solid fa-right-from-bracket"
                                                      style={{color: "#ffffff"}}/>
                                                    &nbsp;Đăng Xuất
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    :
                                    role === "ROLE_CUSTOMER"
                                        ?
                                        <div>
                                            <p className="fw-bold text-white nav-link"
                                               style={{marginBottom: "0px", fontSize: "15px"}}>
                                                {userName} ▾&nbsp;
                                            </p>
                                            <ul className="dropdown">
                                                <li>
                                                    <NavLink to={"/info"} className="nav-link bg-black" href="#">Thông tin cá nhân</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={"/history"} className="nav-link bg-black" href="#">Lịch sử mua hàng</NavLink>
                                                </li>
                                                <li>
                                                    <a className="nav-link bg-black" href="#" onClick={() => {
                                                        handleLogout()
                                                    }}>
                                                        <i className="fa-solid fa-right-from-bracket"
                                                           style={{color: "#ffffff", marginRight: "0px"}}/>
                                                        &nbsp;Đăng Xuất
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        :
                                        <NavLink to={"/login"} className="nav-link fw-bold">
                                            Đăng nhập &nbsp; <img src={user}/>
                                        </NavLink>
                                }


                            </li>
                            <li>
                                <NavLink className="nav-link" to={"/cart"}>
                                    <img src={cart} alt="#"/>
                                    {
                                        token != null ?
                                            <sup className="fw-bold text-light"
                                                 style={{fontSize: "15px"}}>&nbsp;{iconQuantity.length}</sup>
                                            :
                                            <sup className="" style={{fontSize: "15px"}}>&nbsp;0</sup>
                                    }

                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End Header/Navigation */}


        </>
    )
}