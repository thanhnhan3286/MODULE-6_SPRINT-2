import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";

export function WarrantyAndRepair() {
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
                            <a href={"/warranty-repair"} className="mt-3 text-black fs-6">&nbsp; / Bảo hành và sửa
                                chữa</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Chính sách bảo hành và sửa
                                chữa</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="row">
                            <div className="container text-black">
                                <p className="text-black mb-3 fs-5 fw-bold">A. Chính sách bảo hành</p>
                                <p className="text-black mb-3 fs-6 fw-bold">1. Thời gian bảo hành</p>
                                <p>
                                    PANDA HOME cung cấp chính sách bảo hành chung sản phầm là 12 tháng đến 60 tháng tùy
                                    vào từng loại sản phẩm.</p>
                                <p> Trong từng trường hợp cụ thể, vui lòng liên lạc cửa hàng PANDA HOME nơi bạn từng mua
                                    hoặc liên lạc qua hotline:
                                    <span className="fw-bold"> 0935.195.966</span>
                                    để có được hỗ trợ tốt nhất.</p>

                                <p className="text-black mb-3 fs-6 fw-bold mt-3">2. Điều kiện bảo hành</p>
                                <p>
                                    Chính sách bảo hành chỉ được áp dụng với sản phẩm bị hư hỏng do lỗi của nhà sản
                                    xuất.</p>
                                <p>Không bao gồm bất kỳ thiệt hại sau khi mua, hoặc khiếm khuyết và hư hỏng do
                                    sản phẩm không được sử dụng và bảo quản đúng cách.
                                </p>
                                <p>
                                    Không bao gồm hao mòn thông thường, các vết cắt hoặc vết trầy xước do tác động hoặc
                                    tai nạn.</p>
                                <p>Sản phẩm thuộc cửa hàng giảm giá sẽ không được áp dụng chính sách bảo hành.
                                </p>
                                <p>
                                    Chính sách bảo hành có hiệu lực từ ngày mua hàng và chỉ chấp nhận hóa đơn gốc.
                                </p>
                                <p className="text-black mb-3 fs-5 fw-bold mt-3">B. Dịch vụ sữa chữa</p>
                                <p className="text-black mb-3 fs-6 fw-bold">Quy định chung: </p>
                                <p>
                                    Khách hàng báo lại tình trạng chi tiết hư hại của sản phẩm cho cửa hàng biết, có thể
                                    gửi ảnh, video sản phẩm qua nhân viên tư vấn.
                                </p>
                                <p>Tùy vào tình trạng, mức độ hư hại của sản phẩm, nhân viên sẽ báo giá và đặt lịch sửa
                                    chữa.
                                </p>
                                <p>
                                    Khách hàng vui lòng liên hệ với cửa hàng PANDA HOME hoặc thông qua hotline:
                                    <span className="fw-bold"> 0935.195.966</span> để nhân viên tư vấn thêm về dịch vụ
                                    sửa chữa.
                                </p>
                                <p className="text-black fs-6 fw-bold">Lưu ý:</p>
                                <div className="mb-lg-3" style={{margin: "0 50px"}}>
                                    <p>
                                        PANDA HOME sẽ căn cứ theo quy định để áp dụng hình thức bảo hành và sửa
                                        chữa, thay thế hoặc hoàn trả lại sản phẩm.
                                    </p>
                                    <p>
                                        >> Vui lòng liên hệ cửa hàng PANDA HOME hoặc liên hệ với nhân viên
                                        bán hàng của PANDA HOME thông qua hotline:
                                        <span className="fw-bold"> 0935.195.966</span> để biết thêm
                                        thông tin về bảo hành của chúng tôi.
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