import "../../css/bootstrap.min.css";
import "../../css/tiny-slider.css";
import "../../css/style.css";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import logo from "../../images/pandahome3-2.png";
import React from "react";
import {Link, NavLink} from "react-router-dom";

export function Header() {
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
                        <ul className="custom-navbar-nav navbar-nav ms-auto  mb-2 mb-md-0">
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
                                        <a className="nav-link bg-black" href="#">Nội thất phòng khách</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Nội thất phòng bếp</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Nội thất phòng ngủ</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Nội thất phòng thờ</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Nội thất văn phòng</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Đồ gỗ mỹ nghệ</a>
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
                                <NavLink to="/service" className="nav-link" href="#">
                                    Dịch vụ ▾
                                </NavLink>
                                <ul className="dropdown">
                                    <li>
                                        <a className="nav-link bg-black" href="#">Thi công</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Vận chuyển</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Bảo hành</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Sửa chữa</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Thanh toán</a>
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
                        <ul className="custom-navbar-nav navbar-nav mb-2 mb-md-0">
                            <li>
                                {/*<p className="fw-bold mt-lg-3 text-white">*/}
                                {/*    ADMIN*/}
                                {/*</p>*/}
                                <NavLink to={"login"} className="nav-link">
                                    <img src={user}/>
                                </NavLink>
                                <ul className="dropdown">
                                    <li>
                                        <a className="nav-link bg-black" href="#">Thông tin cá nhân</a>
                                    </li>
                                    <li>
                                        <a className="nav-link bg-black" href="#">Đăng Xuất</a>
                                    </li>
                                </ul>

                            </li>
                            <li>
                                <NavLink className="nav-link" to={"/cart"}>
                                    <img src={cart} alt="#"/>
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