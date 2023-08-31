import why from "../../images/why-choose-us-img.jpg"
import thicong from "../../images/thi-cong-noi-that-theo-mau.png"

export function DetailProduct() {
    return (
        <>

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section" style={{marginTop: "6%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img
                                    src={why}
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7" style={{paddingLeft: "5%"}}>
                            <h2 className="section-title">TÊN SẢN PHẨM TÊN SẢN PHẨM TÊN SẢN PHẨM</h2>
                            <div>
                                <ul className="list-unstyled custom-list">
                                    <li>Thương hiệu: <span style={{fontWeight: "bold"}}>Panda Home</span></li>
                                    <li>Mã sản phẩm: <span style={{fontWeight: "bold"}}>MA-123456</span></li>
                                </ul>
                            </div>
                            <div>
                                <p style={{fontWeight: "bold", color: "orange", fontSize: "30px"}}>
                                    9.000.000đ
                                </p>
                            </div>
                            <div
                                className="input-group mb-3 d-flex quantity-container"
                                style={{maxWidth: 120}}
                            >
                                <div className="input-group-prepend">
                                    <button
                                        className="btn"
                                        type="button" style={{color: "black"}}
                                    >
                                        −
                                    </button>
                                </div>
                                <input
                                    type="text"
                                    className="form-control text-center quantity-amount"
                                    defaultValue={1}
                                    placeholder=""
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn"
                                        type="button" style={{color: "black"}}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <p>
                                <button className="btn btn-warning btn-primary" style={{
                                    fontWeight: "bold",
                                    width: "auto",
                                    backgroundColor: "rgb(69 72 75)",
                                    borderColor: "rgb(69 72 75)"
                                }}>
                                    Thêm vào giỏ hàng <br/>
                                    <span style={{fontSize: "13px"}}>Cam kết chính hãng / đổi trả 24h</span>
                                </button>
                                <button className=" btn btn-warning" style={{marginLeft: "2%", fontWeight: "bold"}}>
                                    Mua ngay <br/>
                                    <span style={{fontSize: "13px"}}>Thanh toán nhanh chóng</span>
                                </button>
                            </p>
                            <div className="col-lg-12 mt-4">
                                <h2 className="section-title mb-4">
                                    Mô tả sản phẩm
                                </h2>
                                <p>
                                    Ghế Ventura mang phong cách đặc trưng Châu Âu với kiểu dáng mềm mại, gợi cảm sẽ mang
                                    đến một sự thoải mái khó cưỡng cho người ngồi. Thiết kế hiện đại, trang nhã phù hợp
                                    với nhiều phong cách nội thất khác nhau.
                                </p>
                                <ul className="list-unstyled custom-list my-4" id="1">
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mt-lg-5">
                        <img src={thicong} alt="Image" className="img-fluid"/>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
        </>
    )
}