import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import {ThreeDots, RotatingLines} from "react-loader-spinner";

export function CheckCode() {
    const param = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate("/")
        }
    });
    const [count, setCount] = useState(1);
    const [userName, setUserName] = useState(param.data);
    const getUserName = async (data) => {
        try {
            setUserName(() => data);
        } catch (e) {
            navigate("/error")
        }

    }
    const setCount1 = () => {
        setCount(prevState => count + 1);
    }
    useEffect(() => {
        getUserName(param.data).then(r => null);
    }, [param.data])
    const [role, setRole] = useState(localStorage.getItem("role"));
    useEffect(() => {
        setRole(localStorage.getItem("role"));
        window.scrollTo(0, 0)
    }, []);

    if (!userName) {
        navigate("/error")
    }

    return (
        <>{
            param.data === '' ? navigate("/error") :
                <div className="untree_co-section bglogin" style={{marginTop: "6%", padding: "7rem 0"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 mb-5 mb-md-0"/>
                            <div className="col-md-6 mb-5 mb-md-0">
                                <div className="text-center" style={{
                                    width: "500px", borderRadius: "10px",
                                    backgroundColor: "rgba(255, 255, 255, 0.84)", margin: "8% auto"
                                    , padding: "5% 0"
                                }}>
                                    <h1 className="fw-bold" style={{color: "rgb(6, 133, 170)", parddingTop: "5%"}}>Xác
                                        nhận đăng ký</h1>
                                    <p style={{margin: "0 9%", fontSize: "15px"}} className="text-black">Chúng tôi đã
                                        gửi mã xác nhận đến Email đăng ký của bạn.
                                        Nhập mã xác nhận để kích hoạt tài khoản.
                                    </p>
                                    {/*(**Lưu ý: Mã xác nhận chỉ được nhập tối đa 3 lần. Lần thứ 3 nhập sai, mã xác nhận và tài khoản sẽ bị hủy)*/}
                                    <Formik
                                        initialValues={{
                                            verificationCode: ''
                                        }}
                                        validationSchema={yup.object({
                                            verificationCode: yup.number()
                                                .required('Chưa nhập mã xác nhận')
                                                .min(100000, 'Mã xác nhận là 6 số')
                                                .max(999999, 'Mã xác nhận là 6 số'),
                                        })}
                                        onSubmit={async (values, {setSubmitting, resetForm}) => {
                                            try {
                                                if (count < 4) {
                                                    values = {
                                                        email: userName,
                                                        verificationCode: +values.verificationCode,
                                                        count: count,
                                                    }
                                                    const response = await axios.post('http://localhost:8080/api/user/checkCode', values)

                                                    if (response.data.username === userName) {
                                                        await Swal.fire({
                                                            title: "Đăng ký thành công",
                                                            icon: "success",
                                                            timer: 2000
                                                        })
                                                        resetForm();
                                                        navigate(`/login`);
                                                    }
                                                }
                                            } catch (error) {
                                                console.log(error);
                                                setCount1();
                                                if (count >= 3) {
                                                    await Swal.fire({
                                                        title: "Đã nhập sai 3 lần, mã xác nhận và tài khoản sẽ bị hủy",
                                                        icon: "warning",
                                                        timer: 4000
                                                    });
                                                    navigate('/signup');
                                                } else {
                                                    await Swal.fire({
                                                        title: 'Sai mã xác nhận lần ' + count + '.',
                                                        text: '(Lưu ý: sai 3 lần mã xác nhận và tài khoản sẽ bị hủy)',
                                                        icon: "warning",
                                                        timer: 5000
                                                    });
                                                }
                                                console.log("count3: " + count);
                                            } finally {
                                                setSubmitting(false);
                                            }
                                        }}
                                    >
                                        {({isSubmitting}) => (
                                            <Form>
                                                <div className="row mt-lg-3">
                                                    <div className="col-3"/>
                                                    <div className="col-6">
                                                        <fieldset
                                                            className="form-group position-relative has-icon-left">
                                                            <Field
                                                                name="verificationCode"
                                                                type="text"
                                                                id="txtUserName"
                                                                className="form-control text-center"
                                                                placeholder="Mã"
                                                            />
                                                            <div className="text-center">
                                                                <ErrorMessage name="verificationCode" component="span"
                                                                              style={{color: "red"}}/>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                    <div className="col-3"/>
                                                </div>
                                                <div className="text-center" style={{marginBottom: "10px"}}>
                                                    {
                                                        isSubmitting ?
                                                            <div>
                                                                <div>
                                                                    <RotatingLines/>
                                                                </div>
                                                            </div>
                                                            :
                                                            <button type="submit" className="btn"
                                                                    style={{
                                                                        margin: "3%",
                                                                        // paddingLeft: "15%",
                                                                        backgroundColor: "rgb(2 81 104)",
                                                                        color: "white",
                                                                        // fontWeight: "bold",
                                                                        fontSize: "18px"
                                                                    }}>
                                                                Xác Nhận
                                                            </button>
                                                    }
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
        }
        </>
    )
}