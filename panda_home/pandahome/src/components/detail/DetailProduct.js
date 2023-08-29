import why from "../../images/why-choose-us-img.jpg"
import truck from "../../images/truck.svg"

export function DetailProduct() {
    return (
        <>

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section" style={{marginTop: "2%"}}>
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
                        <div className="col-lg-6">
                            <h2 className="section-title">TÊN SẢN PHẨM TÊN SẢN PHẨM TÊN SẢN PHẨM</h2>
                            <div>
                                <ul className="list-unstyled custom-list">
                                    <li>Thương hiệu: <span style={{fontWeight: "bold"}}>Panda Home</span></li>
                                    <li>Mã sản phẩm: <span style={{fontWeight: "bold"}}>MA-123456</span></li>
                                </ul>
                            </div>
                            <div>
                                <p>
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                            </div>
                            <div
                                className="input-group mb-3 d-flex quantity-container"
                                style={{ maxWidth: 120 }}
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
                                <button className="btn btn-warning btn-primary" style={{fontWeight: "bold", width: "auto", backgroundColor: "rgb(69 72 75)", borderColor:"rgb(69 72 75)"}}>
                                    Thêm vào giỏ hàng <br/>
                                    <span style={{fontSize: "13px"}}>Cam kết chính hãng / đổi trả 24h</span>
                                </button>
                                <button className=" btn btn-warning" style={{marginLeft: "2%", fontWeight: "bold"}}>
                                    Mua ngay <br/>
                                    <span style={{fontSize: "13px"}}>Thanh toán nhanh chóng</span>
                                </button>
                            </p>
                            <div className="col-lg-12">
                                <h2 className="section-title mb-4">
                                    We Help You Make Modern Interior Design
                                </h2>
                                <p>
                                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl
                                    dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                                    imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique
                                    senectus et netus et malesuada
                                </p>
                                <ul className="list-unstyled custom-list my-4">
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                    <li>Donec vitae odio quis nisl dapibus malesuada</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}
        </>
    )
}