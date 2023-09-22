import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";
import {ThreeDots, RotatingLines} from "react-loader-spinner"
import {useDispatch} from "react-redux";
import {getAllCart} from "../../redux/action/cart";


export function Login() {
    const nav = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            nav("/")
        }
    });
    const [userName, setUserName] = useState(localStorage.getItem("user_name"));
    const [password, setPassword] = useState(localStorage.getItem("password"));
    const setPwUs = async (u, p) => {
        setUserName(u);
        setPassword(p);
        // console.log(userName, password);
    };
    useEffect(() => {
        setPwUs(localStorage.getItem("user_name"), localStorage.getItem("password"))
            .then(r => null);
    }, [localStorage.getItem("user_name"), localStorage.getItem("password")])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="untree_co-section bglogin" style={{marginTop: "6%", padding: "7rem 0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-5 mb-md-0"/>
                        <div className="col-md-6 mb-5 mb-md-0">
                            <Formik
                                initialValues={{
                                    username: userName,
                                    password: password,
                                    check: '',
                                }}
                                validationSchema={yup.object({
                                    username: yup.string().trim()
                                        .required('Chưa nhập email đăng nhập.')
                                        .email('Chưa đúng định dạng email: xxx@xxx.xxx')
                                        .min(6, 'Ít nhất 6 ký tự.')
                                        .max(50, 'Tối đa 50 ký tự.'),
                                    // .matches(/^\\w+@\\w+(.\\w+)$/, 'Chưa đúng định dạng email (xxx@xxx.xxx) với x không phải là ký tự đặc biệt '),
                                    password: yup.string().trim()
                                        .required('Chưa nhập mật khẩu.')
                                    // .matches(/^(?=.*[A-Z])(?=.*[0-9]).{6,20}$/, 'Mật khẩu phải từ 6 ký tự và ít hơn 20 ký tự, có chứa ký tự in hoa và ký tự số'),

                                })}
                                onSubmit={async (values, {setSubmitting, resetForm}) => {
                                    // console.log(values);
                                    if (values.check.length === 1) {
                                        localStorage.setItem("user_name", values.username);
                                        localStorage.setItem("password", values.password);
                                    } else {
                                        localStorage.setItem("user_name", '');
                                        localStorage.setItem("password", '');
                                    }
                                    values = {
                                        username: values.username,
                                        password: values.password,
                                    }
                                    try {
                                        //Gửi yêu cầu đăng nhập
                                        const res = await axios.post("http://localhost:8080/api/user/login", values);
                                        // Kiểm tra nếu response có chứa token
                                        if (res.data.token) {
                                            localStorage.setItem("token", res.data.token);
                                            localStorage.setItem("username", res.data.username);
                                            localStorage.setItem("role", res.data.role);
                                            await dispatch(getAllCart());
                                        }
                                        //Đăng nhập thành công, chuyển hướng hoặc thực hiện hành động khác
                                        await dispatch(getAllCart());
                                        resetForm();
                                        const url = localStorage.getItem("url");
                                        url == null ? await nav("/") : nav("" + url);
                                        localStorage.removeItem("url")
                                    } catch (e) {
                                        // console.log(e)
                                        await Swal.fire({
                                            title: e.response.data,
                                            text: 'Sai mật khẩu hoặc email !',
                                            icon: "warning",
                                            timer: 2000
                                        })
                                    } finally {
                                        setSubmitting(false);
                                        await dispatch(getAllCart());
                                    }
                                }}
                            >
                                {({isSubmitting}) => (
                                    <Form>
                                        <div className="p-3 p-lg-5 border bg-white" style={{borderRadius: "1rem"}}>
                                            <h2 className="h3 text-center mb-4 fw-bold text-black"
                                                style={{marginTop: "-20px"}}>Đăng
                                                nhập tài khoản</h2>
                                            <div className="form-group row">
                                                <div className="col-md-1"/>
                                                <div className="col-md-3">
                                                    <label htmlFor="c_companyname" className=" fw-bold fs-5 mt-2">
                                                        Email{" "}<span className="text-danger">*</span>
                                                    </label>
                                                </div>
                                                <div className="col-md-7 mb-3">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        id="c_companyname"
                                                        name="username"
                                                    />
                                                    <ErrorMessage name="username" component="span"
                                                                  className="text-danger"
                                                                  style={{marginTop: "-5px"}}/>
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
                                                <div className="col-md-7 mb-3">
                                                    <Field
                                                        type="password"
                                                        className="form-control"
                                                        id="c_address"
                                                        name="password"
                                                    />
                                                    <ErrorMessage name="password" component="span"
                                                                  className="text-danger"/>
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
                                                    <Field type="checkbox" name="check" value="1" id="myCheckbox"
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
                                                {
                                                    isSubmitting ?

                                                        <div>
                                                            <RotatingLines/>
                                                        </div>

                                                        :
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
                                                }
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div className="col-md-3 mb-5 mb-md-0"/>
                    </div>
                </div>
            </div>
        </>
    )
}