import "../../css/bootstrap.min.css";
import "../../css/tiny-slider.css";
import "../../css/style.css";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import logo from "../../images/pandahome3-2.png";
import React, {useEffect} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";

export function Header() {
    const nav = useNavigate();
    const role = localStorage.getItem("role");
    const handleLogout = () => {
        localStorage.setItem("token", '');
        localStorage.removeItem("token");
        localStorage.setItem("username", '');
        localStorage.setItem("role", '');
        // setUser(null);
        nav("/login");
    }
    // useEffect(()=> {
    //     role = localStorage.getItem("role");
    // })
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
                            <form action="#" className="row g-4">
                                <div className="col-auto d-flex">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Tìm kiếm sản phẩm"
                                        width="200px"
                                    />
                                    <button className="btn btn-warning"
                                            style={{height: "38px", marginTop: "9px", marginLeft: "2%"}}>
                                        <span className="fa fa-search"/>
                                    </button>
                                </div>
                                {/*<div className="col-auto">*/}
                                {/*    */}
                                {/*</div>*/}
                            </form>
                        </div>
                        <div className="col-md-1"/>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarsFurni">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link">
                                    Trang chủ
                                </NavLink>
                            </li>
                            <li>
                                {/*<a className="nav-link">*/}
                                <NavLink to="/list" className="nav-link">
                                    Sản phẩm ▾
                                </NavLink>
                                {/*</a>*/}
                                <ul className="dropdown">
                                    <li>
                                        <NavLink to={"/list/khach"} className="nav-link bg-black">Nội thất phòng khách</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/bep"} className="nav-link bg-black">Nội thất phòng bếp</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/ngu"} className="nav-link bg-black">Nội thất phòng ngủ</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/list/van"} className="nav-link bg-black">Nội thất văn phòng</NavLink>
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
                                <NavLink to="/policy" className="nav-link" href="#">
                                    Chính sách ▾
                                </NavLink>
                                <ul className="dropdown">

                                    <li>
                                        <NavLink to={"/policy/transport"} className="nav-link bg-black">Vận chuyển</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/policy/warranty-repair"} className="nav-link bg-black">Bảo hành - Sửa
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
                                <a className="nav-link" href="contact.html">
                                    Liên hệ
                                </a>
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
                                                CUSTOMER&nbsp;
                                            </p>
                                            <ul className="dropdown">
                                                <li>
                                                    <a className="nav-link bg-black" href="#">Thông tin cá nhân</a>
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
                                        <NavLink to={"/login"} className="nav-link">
                                            Đăng nhập &nbsp; <img src={user}/>
                                        </NavLink>
                                }


                            </li>
                            <li>
                                <NavLink className="nav-link" to={"/cart"}>
                                    <img src={cart} alt="#"/>
                                    <sup className="">&nbsp;0</sup>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/*<nav*/}
            {/*    className="custom-navbar-2 navbar navbar-expand-md"*/}
            {/*    arial-label="Furni navigation bar"*/}

            {/*>*/}
            {/*    <div className="container" style={{justifyContent: "right"}}>*/}
            {/*        <form action="#" className="row g-3">*/}
            {/*            <div className="col-auto">*/}
            {/*                <input*/}
            {/*                    type="text"*/}
            {/*                    className="form-control"*/}
            {/*                    placeholder="Enter your name"*/}
            {/*                    width="200px"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <div className="col-auto">*/}
            {/*                <button className="btn">*/}
            {/*                    <span className="fa fa-search"/>*/}
            {/*                </button>*/}
            {/*            </div>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</nav>*/}
            {/* End Header/Navigation */}


        </>
    )
}