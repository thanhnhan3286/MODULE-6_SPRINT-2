import React, {useEffect} from "react";
import {Link,NavLink} from "react-router-dom";

export function Transport() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div className="popular-product mt-lg-5" style={{paddingLeft:"10%", paddingRight:"10%"}}>
                <div className="container">
                    <div className="row">
                        <div className="mt-5 mb-3 d-flex">
                            <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                                Trang chủ
                            </NavLink>
                            <a href={"/transport"} className="mt-3 text-black fs-6">&nbsp; / Chính sách vận chuyển</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Chính sách vận
                                chuyển</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="row">
                            <div className="container text-black">

                                <p className="text-black mb-3 fs-6 fw-bold">1. Thời gian giao hàng</p>

                                <p>
                                    Thời gian giao hàng từ <span className="fw-bold">7-10 ngày</span> làm việc (từ <span
                                    className="fw-bold">08h30</span> đến <span className="fw-bold">17h30</span> từ <span
                                    className="fw-bold">thứ Hai</span> đến <span className="fw-bold">thứ
                                Bảy</span>)
                                    đối với các đơn hàng trong nội tỉnh <span className="fw-bold">Đà Nẵng</span>.
                                </p>

                                <p>
                                    Các đơn hàng liên tinh được giao hàng từ <span
                                    className="fw-bold">10-15 ngày</span> làm việc (từ <span
                                    className="fw-bold">08h</span> đến <span className="fw-bold">17h30</span> từ
                                    <span className="fw-bold">thứ Hai</span> đến <span
                                    className="fw-bold">thứ Bảy</span>) cho các huyện/thành phố trung tâm, các đơn giao
                                    xuống huyện xã sẽ
                                    cộng
                                    thêm <span className="fw-bold">1 ngày</span> làm việc.
                                </p>
                                <p>
                                    Thời gian giao hàng được bắt đầu tinh sau khi đơn hàng của quý khách được <span
                                    className="fw-bold">xác nhận</span>
                                    thành
                                    công bằng cuộc gọi của nhân viên chăm sóc khách hàng của chúng tôi.
                                </p>

                                <p className="text-black mb-3 fs-6 fw-bold mt-3">2. Phí giao hàng</p>

                                <p>
                                    Đơn hàng có giá trị thanh toàn <span className="fw-bold">lớn hơn hoặc bằng 8.000.000 VNĐ</span> sẽ
                                    được miễn phí giao hàng khu vực
                                    <span className="fw-bold"> Đà Nẵng</span>.
                                </p>

                                <p>
                                    Đơn hàng có giá trị thanh toán <span
                                    className="fw-bold">ít hơn 8.000.000 VNĐ</span> công ty sẽ báo phí trực tiếp khi
                                    đặt hàng.
                                </p>

                                <p>
                                    Mỗi đơn hàng chỉ giao đến <span className="fw-bold">01 địa chỉ</span> của
                                    Quý khách.
                                </p>
                                <p className="text-black mb-3 fs-6 fw-bold">3. Kiểm tra nhận hàng</p>

                                <p>
                                    Trường hợp sản phẩm bị lỗi, hư hỏng, trầy
                                    xước, không đúng số lượng, chất lượng...
                                    quý khách có thể từ chối nhận hàng và
                                    liên hệ với nhân viên bán hàng của <span className="fw-bold">PANDA HOME</span> để được hỗ trợ thông qua
                                    hotline: <span className="fw-bold">0935.195.966</span>
                                </p>

                                <p className="text-black mb-3 fs-6 fw-bold">4. Hủy đơn hàng</p>

                                <p>
                                    Đơn hàng sẽ bị hủy sau <span className="fw-bold">02</span> lần nhân viên
                                    giao nhận không thể liên lạc hoặc không
                                    thể giao hàng được cho Quý khách.
                                </p>
                                <p>
                                    Quý Khách hàng vui lòng liên hệ
                                    hotline: <span className="fw-bold">0935.195.966</span> để được hướng dẫn
                                    và chăm sóc.
                                </p>

                                <p className="text-black fs-6 fw-bold">Lưu ý:</p>
                                <div className="mb-lg-3" style={{margin:"0 50px"}}>
                                    <p>
                                        Chúng tôi chỉ vận chuyển hàng đến đùng
                                        điểm cuối cùng mà khách đã yêu cầu trước
                                        khi xuất phát.
                                    </p>

                                    <p>
                                        Khi nhận hàng hóa khách hàng cần kiểm tra
                                        kỹ sản phẩm trước khi ký vào biên bản
                                        giao nhận hàng hóa.
                                    </p>

                                    <p>
                                        Trường hợp quý khách hàng cho sai địa chỉ
                                        giao nhận thì khi xác nhận lại địa chỉ và
                                        giao lại sẽ tinh mức giá giao nhận theo
                                        mức tính hiện hành.
                                    </p>
                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}