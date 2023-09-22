import {NavLink} from "react-router-dom";
import React, {useEffect} from "react";

export function Return() {
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
                            <a href={"/policy/return"} className="mt-3 text-black fs-6">&nbsp; / Chính sách đổi trả</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Chính sách đổi trả</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="row">
                            <div className="container text-black">
                                <p className="text-black mb-3 fs-6 fw-bold">1. Quy định chung: </p>
                                <p>Nhằm đảm bảo quyền lợi của người tiêu dùng, nâng cao chất lượng dich vụ sau khi bán
                                    hàng. Chúng tôi sẽ hỗ trợ quý khách đổi sang sản phẩm khác cùng moldel hoặc các dòng
                                    khác nếu sản phẩm gặp sự cố lỗi của nhà sản xuất hoặc của cửa hàng.</p>
                                <p className="text-black mb-3 fs-6 fw-bold mt-3">2. Điều kiện đổi trả: </p>
                                <p>- Sản phẩm được đổi trả khi khách hàng kiểm tra hàng không đúng với chủng loại sản
                                    phẩm đặt mua hoặc không đúng như tư vấn, sản phẩn bị vỡ, móp méo, …… </p>
                                <p>– Sản phẩm được kĩ thuật xác định là lỗi do nhà sản xuất hoặc do nhân viên lắp đặt
                                    không thể khắc phục được.</p>
                                <p>– Sản phẩm đổi trả không bị lỗi như trầy xước, vỡ, móp méo.</p>
                                <p>– Sản phẩm thu hồi phải có đầy đủ các chứng từ kèm theo ( hóa đơn, phiếu giao
                                    hàng,…………).</p>
                                <p>– Thời hạn hiệu lực cho việc đổi, trả hàng là 30 ngày kể từ khi khách hàng nhận hàng
                                    từ showroom.</p>
                                <p>– Quý khách hàng còn giữ biên bản xác nhận, bàn giao hàng hóa, hóa đơn mua hàng, sao
                                    kê của ngân hàng hay phiếu thu của công ty để xác nhận rằng quý khách hàng đã mua
                                    sản phẩm tại PANDA HOME.</p>
                                <p>– Sản phẩm phải còn nguyên đai, nguyên kiện ban đầu.</p>
                                <p className="text-black mb-3 fs-6 fw-bold">3. Các trường hợp không chấp nhận đổi
                                    trả: </p>
                                <p>– Khách hàng muốn thay đổi chủng loại, mẫu mã nhưng không thông báo trước.</p>
                                <p>– Quý khách không thực hiện các quy định của chính sách đổi trả hàng ( VD: không có
                                    phiếu bảo hành, không có chứng từ kèm theo,……..).</p>
                                <p>– Quý khách làm ảnh hưởng đến sản phẩm như làm gãy, trầy xước, vỡ,…..</p>
                                <p>– Không nhân đổi trả trong trường hợp khách quan như do thiên nhiên,lũ lụt, mưa, bão
                                    ………….</p>
                                <p>– Sản phẩm đã hết hạn bảo hành.</p>
                                <p>– Khách hàng sử dụng không đúng yếu cầu của sản phẩm, không đọc kỹ hướng dẫn trước
                                    khi sử dụng.</p>
                                <p>– Khách hàng không thực hiện các quy định theo yêu cầu để được hưởng chế độ bảo
                                    hành.</p>
                                <p>– Khách hàng liên hệ trực tiếp với Trung tâm bảo hành của Hãng hoặc thông qua Trung
                                    chăm sóc khách hàng của PANDA HOME.</p>
                                <p>– Sau khi có Giấy xác nhận tình trạng với nội dung hàng hóa hư hỏng do lỗi kỹ thuật
                                    không thể sửa chữa được ngay, việc đổi hàng sẽ được thực hiện theo đúng quy
                                    định.</p>
                                <p>– Quy trình xử lý thủ tục đổi hoặc trả hàng được thực hiện trong vòng 30 (ba mươi)
                                    ngày tính từ ngày Nội Thất Đồ Gỗ Việt nhận đủ thông tin và các giấy tờ theo quy định
                                    từ phía khách hàng.</p>
                                <p> Trong từng trường hợp cụ thể, vui lòng liên lạc cửa hàng PANDA HOME nơi bạn từng mua
                                    hoặc liên lạc qua hotline:
                                    <span className="fw-bold"> 0935.195.966 </span>
                                    để có được hỗ trợ tốt nhất.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}