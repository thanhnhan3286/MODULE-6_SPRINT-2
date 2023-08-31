import React from "react";
import {Link} from "react-router-dom";
import {Field} from "formik";

export function Login() {
    return (
        <>
            <div className="untree_co-section bglogin" style={{marginTop:"6%"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-5 mb-md-0"/>
                        <div className="col-md-6 mb-5 mb-md-0">

                            <div className="p-3 p-lg-5 border bg-white" style={{borderRadius: "1rem"}}>
                                <h2 className="h3 text-center mb-4 fw-bold text-black" style={{marginTop: "-20px"}}>Đăng nhập tài khoản</h2>
                                <div className="form-group row">
                                    <div className="col-md-1"/>
                                    <div className="col-md-3">
                                        <label htmlFor="c_companyname" className=" fw-bold fs-5 mt-2">
                                            Email{" "}<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-7">
                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            id="c_companyname"
                                            name="c_companyname"
                                        />
                                    </div>
                                    <div className="col-md-1"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-1"/>
                                    <div className="col-md-3">
                                        <label htmlFor="c_address" className="fw-bold fs-5 mt-2">
                                            Mật khẩu <span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-7 d-flex">
                                        <input
                                            type="password"
                                            className="form-control mb-3"
                                            id="c_address"
                                            name="c_address"
                                        />
                                    </div>
                                    <div className="col-md-1"/>
                                </div>
                                <div className="row">
                                    <div
                                        className="col-md-5"
                                        style={{
                                            marginTop: "3%",
                                            paddingLeft: "8%",
                                            // color: "rgb(6, 133, 170)",
                                            fontWeight: "revert"
                                        }}
                                    >
                                        <input type="checkbox" name="check" value="1" id="myCheckbox"
                                               className="myCheckbox"/>
                                        <label id="dn" htmlFor="myCheckbox" className="myCheckbox">
                                            Lưu mật khẩu
                                        </label>
                                    </div>
                                    <div
                                        className="col-md-7"
                                        style={{
                                            marginTop: "3%",
                                            paddingLeft: "15%",
                                            color: "rgb(6, 133, 170)",
                                            fontWeight: "revert",
                                            display: "flex"
                                        }}
                                    >
                                        <Link to='/signup' style={{
                                            textDecoration: "underline",
                                            color: "rgb(6, 133, 170)",

                                            fontSize: "16px",
                                            paddingRight: "2px"
                                        }}>Đăng
                                            ký
                                        </Link>
                                        <span style={{fontSize: "18px"}}>&nbsp; / &nbsp;</span>
                                        <Link href="#" to={''}>
                                            <p style={{
                                                textDecoration: "underline",
                                                fontSize: "16px",
                                                color: "rgb(6, 133, 170)",

                                            }}>Quên
                                                mật
                                                khẩu?</p>
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center" style={{marginBottom: "10px"}}>
                                    {/*{*/}
                                    {/*    isSubmitting ?*/}
                                    {/*        <div style={{marginLeft:"17vw"}} >*/}
                                    {/*            <div>*/}
                                    {/*                <ThreeDots/>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        :*/}
                                            <button type="submit" className="btn fw-bold"
                                                    style={{
                                                        marginTop: "2%",
                                                        // paddingLeft: "15%",
                                                        backgroundColor: "rgb(2 81 104)",
                                                        color: "white",
                                                        // fontWeight: "bold",
                                                        fontSize: "18px"
                                                    }}>
                                                Đăng Nhập
                                            </button>
                                    {/*}*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 mb-5 mb-md-0"/>
                    </div>
                </div>
            </div>
        </>
    )
}