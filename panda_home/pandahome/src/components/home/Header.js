
import "../../css/bootstrap.min.css";
import "../../css/tiny-slider.css";
import "../../css/style.css";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";
import logo from "../../images/pandahome3-2.png";
import React from "react";

export function Header() {
    return (
        <>
            {/* Start Header/Navigation */}
            <nav
                className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
                arial-label="Furni navigation bar"
            >
                <div className="container ">
                    <a className="navbar-brand" href="">
                            <img  src={logo} alt={"logo"} width="100px" style={{borderRadius:"10px"}} />
                    </a>
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
                                    <button className="btn btn-warning" style={{height: "38px", marginTop:"9px", marginLeft:"2%"}}>
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
                            <li className="nav-item active">
                                <a className="nav-link" href="index.html">
                                    Trang chủ
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="shop.html">
                                    Sản phẩm
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="about.html">
                                    Dịch vụ
                                </a>
                            </li>
                            {/*<li>*/}
                            {/*    <a className="nav-link" href="services.html">*/}
                            {/*        Services*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <a className="nav-link" href="blog.html">*/}
                            {/*        Blog*/}
                            {/*    </a>*/}
                            {/*</li>*/}
                            <li>
                                <a className="nav-link" href="contact.html">
                                    Liên hệ
                                </a>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0">
                            <li>
                                <a className="nav-link" href="#">
                                    <img src={user} alt="#"/>
                                </a>
                            </li>
                            <li>
                                <a className="nav-link" href="cart.html">
                                    <img src={cart} alt="#"/>
                                </a>
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