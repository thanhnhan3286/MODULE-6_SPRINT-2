import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";

export function Payment() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="popular-product mt-lg-5" style={{paddingLeft: "10%", paddingRight: "10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 mb-3 d-flex">
                            <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                                Trang chủ
                            </NavLink>
                            <a href={"/payment"} className="mt-3 text-black fs-6">&nbsp; / Chính sách thanh toán</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Chính sách thanh toán</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="row">
                            <div className="container text-black">
                                <p className="text-black mb-3 fs-6 fw-bold">1. Phương thức thanh toán: </p>
                                <p>- Chuyển khoản.</p>
                                <p>- Khách hàng thanh toán ngay khi mua hàng với quy định: </p>
                                <p>+ Đơn hàng có tổng tiền hàng  nhỏ hơn 15.000.000đ, phí vận chuyển sẽ là 7% tổng tiền hàng đối với toàn thành phố Đà Nẵng.</p>
                                <p>+ Đơn hàng có tổng tiền hàng  lớn hơn 15.000.000đ thì sẽ được miễn phí vận chuyển toàn thành phố Đà Nẵng.</p>
                                <p>+ Đơn hàng có địa chỉ nhận hàng ngoài thành phố Đà Nẵng thì nhân viên của PANDA HOME sẽ liên hệ báo phí vận chuyển, khách hàng sẽ thanh toán phí vận chuyển cho bên giao hàng khi nhận được hàng.</p>
                                <p>+ Thanh toán 100% tổng giá trị đơn hàng.</p>
                                <p> Trong từng trường hợp cụ thể, vui lòng liên lạc cửa hàng PANDA HOME nơi bạn từng mua
                                    hoặc liên lạc qua hotline:
                                    <span className="fw-bold"> 0935.195.966 </span>
                                     để có được hỗ trợ tốt nhất.</p>

                                <p className="text-black mb-3 fs-6 fw-bold mt-3">2. Thông tin thanh toán: </p>
                                <p>
                                    Tên tài khoản: <span className="fw-bold"> Công ty TNHH Panda Home</span>.</p>
                                <p>Số tài khoản: <span className="fw-bold">8888888888888</span>
                                </p>
                                <p className="text-black fs-6 fw-bold">
                                    Ngân Hàng Thương Mại Cổ Phần Quân Đội (MB Bank) - Chi Nhánh 120 Trần Hưng Đạo, Đà Nẵng.</p>
                                <p>Gía niêm yết lại website đã bao gồm 10% VAT - Qúy khách lưu ý.
                                </p>
                                <p>
                                    Nếu có sự thay đổi về tài khoản thanh toán, công ty sẽ báo cho khách hàng bằng văn bản chính thức.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}