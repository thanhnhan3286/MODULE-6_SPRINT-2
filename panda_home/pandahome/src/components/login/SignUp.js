import React, {useEffect, useState} from "react";
import {ThreeDots, RotatingLines} from "react-loader-spinner";
import {Link, useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import axios from "axios";


export function SignUp() {
    const nav = useNavigate();
    const [userName, setUserName] = useState('');
    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate());
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            nav("/")
        }
    });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="untree_co-section bgsignup" style={{marginTop: "6%", padding: "3rem 0"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 mb-5 mb-md-0"/>
                        <div className="col-md-8 mb-5 mb-md-0">
                            <Formik
                                initialValues={{
                                    name: '',
                                    phoneNumber: '',
                                    email: '',
                                    gender: '',
                                    birthday: '',
                                    password: '',
                                    passwordConfirm: '',
                                    address: ''
                                }}
                                validationSchema={yup.object({
                                    name: yup.string().trim().required("Chưa nhập tên khách hàng.")
                                        .max(100, 'Không được quá 100 ký tự.')
                                        .min(2, 'Ít nhất 2 ký tự.')
                                    // .matches(/^$/,'Phải viết hoa ký tự đầu của mỗi từ.')
                                    ,
                                    phoneNumber: yup.string().trim().required("Chưa nhập số điện thoại.")
                                        .matches(/^(\+84|0)[1-9][0-9]{8}$/, "Nhập theo định dạng +84xxxxxxxxx hoặc 0xxxxxxxxx với x là ký tự số.")
                                        .max(12, "Không được quá 12 ký tự."),
                                    email: yup.string().trim().required("Chưa nhập email.")
                                        .email("Chưa đúng định dạng email (xxx@xxx.xxx).")
                                        .min(6, "Ít nhất 6 ký tự.")
                                        .max(50, "Không được quá 5 ký tự."),
                                    gender: yup.string().required("Chưa chọn giới tính.")
                                        .min(2, "Chưa chọn giới tính.")
                                        .max(5, "Chưa chọn giới tính."),
                                    birthday: yup.date().required("Chưa chọn ngày sinh.")
                                        .min(minDate, 'Khách hàng phải trên 18 tuổi và dưới 100 tuổi.')
                                        .max(maxDate, 'Khách hàng phải trên 18 tuổi.'),
                                    password: yup.string().trim().required("Chưa nhập mật khẩu.")
                                        .matches(/^(?=.*[A-Z])(?=.*[0-9]).{6,20}$/, "Mật khẩu phải từ 6 ký tự và ít hơn 20 ký tự, có chứa ký tự in hoa và ký tự số."),
                                    passwordConfirm: yup.string().trim().required("Chưa nhập lại mật khẩu.")
                                        .oneOf([yup.ref('password'), null], 'Mật khẩu nhập lại không đúng.'),
                                    address: yup.string().trim().required("Chưa nhập địa chỉ khách hàng.")
                                        .min(2, "Ít nhất 2 ký tự.")
                                        .max(200, "Không được quá 200 ký tự."),

                                })}
                                onSubmit={async (values, {setSubmitting, resetForm}) => {
                                    console.log(values);
                                    try {
                                        //Gửi yêu cầu đăng ký
                                        const response = await axios.post("http://localhost:8080/api/user/signup",
                                            values);
                                        console.log(response.data.username)
                                        // Kiểm tra response
                                        if (response.data.username != null) {
                                            setUserName(response.data.username.toString());
                                        }
                                        console.log(userName);
                                        resetForm();
                                        // Đăng ký thành công, chuyển hướng hoặc thực hiện hành động khác
                                        nav(`/checkCode/${response.data.username}`);
                                    } catch (e) {
                                        await Swal.fire({
                                            title: "Đăng ký thất bại",
                                            text: 'Email đăng ký đã tồn tại !',
                                            icon: "error",
                                            timer: 2000
                                        })
                                    } finally {
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                {({isSubmitting}) => (
                                    <div className="p-3 p-lg-5 border bg-white" style={{borderRadius: "1rem"}}>
                                        <div className="row">
                                            <div className="col-md-8">
                                                <Form>
                                                    <h2 className="h3 mb-4 fw-bold text-black"
                                                        style={{marginTop: "-20px"}}>
                                                        Đăng ký tài khoản
                                                    </h2>
                                                    <div className="form-group">
                                                        <label htmlFor="name" className="text-black">
                                                            Họ tên: <span className="text-danger">*</span>
                                                        </label>
                                                        <Field
                                                            type="text"
                                                            className="form-control"
                                                            id="name"
                                                            name="name"
                                                        />
                                                        <ErrorMessage name="name" component="span"
                                                                      className="text-danger"
                                                                      style={{marginTop: "-5px", marginBottom: "5%"}}/>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-6">
                                                            <label htmlFor="phone" className="text-black">
                                                                Số điện thoại: <span className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                className="form-control"
                                                                id="phone"
                                                                name="phoneNumber"
                                                                // placeholder="Phone Number"
                                                            />
                                                            <ErrorMessage name="phoneNumber" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="c_email_address" className="text-black">
                                                                Email: <span className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                className="form-control"
                                                                id="c_email_address"
                                                                name="email"
                                                            />
                                                            <ErrorMessage name="email" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>

                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-6">
                                                            <label htmlFor="gender" className="text-black">
                                                                Giới tính: <span className="text-danger">*</span>
                                                            </label>
                                                            <Field as="select" id="gender" name="gender"
                                                                   className="form-control">
                                                                <option>Chọn giới tính</option>
                                                                <option value={"Nam"}>Nam</option>
                                                                <option value={"Nữ"}>Nữ</option>
                                                                <option value={"Khác"}>Khác</option>
                                                            </Field>
                                                            <ErrorMessage name="gender" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <label htmlFor="birthday" className="text-black">
                                                                Ngày sinh: <span className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="date"
                                                                className="form-control"
                                                                id="birthday"
                                                                name="birthday"
                                                            />
                                                            <ErrorMessage name="birthday" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <label htmlFor="password" className="text-black">
                                                                Mật khẩu{" "}<span className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="password"
                                                                className="form-control"
                                                                id="password"
                                                                name="password"
                                                            />
                                                            <ErrorMessage name="password" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <label htmlFor="passwordConfirm" className="text-black">
                                                                Nhập lại mật khẩu{" "}<span
                                                                className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="password"
                                                                className="form-control"
                                                                id="passwordConfirm"
                                                                name="passwordConfirm"
                                                            />
                                                            <ErrorMessage name="passwordConfirm" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                    </div>
                                                    <div className="form-group row">
                                                        <div className="col-md-12">
                                                            <label htmlFor="address" className="text-black">
                                                                Địa chỉ <span className="text-danger">*</span>
                                                            </label>
                                                            <Field
                                                                type="text"
                                                                className="form-control"
                                                                id="address"
                                                                name="address"
                                                                placeholder="Địa chỉ nhận hàng mặc định"
                                                            />
                                                            <ErrorMessage name="address" component="span"
                                                                          className="text-danger mb-5"
                                                                          style={{
                                                                              marginTop: "-5px",
                                                                              marginBottom: "10%"
                                                                          }}/>
                                                        </div>
                                                    </div>
                                                    <div className="text-center mt-3" style={{marginBottom: "10px"}}>
                                                        {
                                                            isSubmitting ?
                                                                <div>
                                                                    <div>
                                                                        <RotatingLines/>
                                                                    </div>
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
                                                                    Đăng Ký
                                                                </button>
                                                        }
                                                    </div>
                                                </Form>
                                            </div>
                                            <div className="col-md-4"
                                                 style={{borderRadius: "10px", backgroundColor: "rgb(2 81 104)",}}>
                                                <h2 className="h5 mb-4 text-center fw-bold text-light"
                                                    style={{marginTop: "20px"}}>
                                                    Quyền lợi thành viên
                                                </h2>
                                                <div className="mt-lg-3 text-light fs-6"
                                                     style={{marginLeft: "10%"}}>
                                                    <p>Vận chuyển siêu tốc</p>
                                                    <p>Sản phẩm đa dạng</p>
                                                    <p>Đổi trả dễ dàng</p>
                                                    <p>Được giảm giá trong lần mua tiếp theo lên đến 10%</p>
                                                    <p>(Đã có tài khoản)</p>
                                                </div>

                                                <div className="text-center">
                                                    <Link to='/login' className="btn text-light border-2"
                                                          style={{
                                                              marginTop: "2%",
                                                              // paddingLeft: "15%",
                                                              backgroundColor: "rgb(2 81 104)",
                                                              color: "white",
                                                              // fontWeight: "bold",
                                                              fontSize: "15px",
                                                              borderColor: "white"
                                                          }}
                                                    >
                                                        Đăng nhập
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )}
                            </Formik>

                        </div>
                        <div className="col-md-2 mb-5 mb-md-0"/>
                    </div>
                </div>
            </div>
        </>
    )
}