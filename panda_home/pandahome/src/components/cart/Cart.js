export function Cart() {
    return (
        <>
            {/*/!* Start Hero Section *!/*/}
            {/*<div className="hero">*/}
            {/*    <div className="container">*/}
            {/*        /!*<div className="row justify-content-between">*!/*/}

            {/*        /!*    <div className="intro-excerpt">*!/*/}
            {/*        /!*        <h2 className="text-black">Giỏ hàng của bạn</h2>*!/*/}
            {/*        /!*    </div>*!/*/}

            {/*        /!*</div>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!* End Hero Section *!/*/}
            <div className="untree_co-section before-footer-section">
                <div className="container">
                    <div className="row mb-5">
                        <form className="col-md-12" method="post">
                            <div className="intro-excerpt mt-lg-5">
                                <h2 className="text-black mb-3 ">Giỏ hàng của bạn</h2>
                                <h2 className="text-black border-bottom1"/>
                            </div>
                            <div className="site-blocks-table">
                                <table className="table">
                                    <thead>
                                    <tr>
                                        <th className="product-name" colSpan={2}>Thông tin sản phẩm</th>
                                        <th className="product-price">Đơn giá</th>
                                        <th className="product-quantity">Số lượng</th>
                                        <th className="product-total">Thành tiền</th>
                                        <th className="product-remove"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <img
                                                src="images/product-1.png"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </td>
                                        <td className="product-name">
                                            <h2 className="h5 text-black">Product 1</h2>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                            <div
                                                className="input-group mb-3 d-flex align-items-center quantity-container"
                                                style={{maxWidth: 120, margin: "auto"}}
                                            >
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-black decrease"
                                                        type="button"
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
                                                        className="btn btn-outline-black increase"
                                                        type="button"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                            <a href="#" className="btn btn-black btn-sm">
                                                X
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <img
                                                src="images/product-2.png"
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </td>
                                        <td className="product-name">
                                            <h2 className="h5 text-black">Product 2</h2>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                            <div
                                                className="input-group mb-3 d-flex align-items-center quantity-container"
                                                style={{maxWidth: 120, margin: "auto"}}
                                            >
                                                <div className="input-group-prepend">
                                                    <button
                                                        className="btn btn-outline-black decrease"
                                                        type="button"
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
                                                        className="btn btn-outline-black increase"
                                                        type="button"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td>$49.00</td>
                                        <td>
                                            <a href="#" className="btn btn-black btn-sm">
                                                X
                                            </a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                        </div>
                        <div className="col-md-6 pl-5">
                            <div className="row justify-content-end">
                                <div className="col-md-7">
                                    <div className="row">
                                        <div className="col-md-12 text-right border-bottom mb-5">
                                            <h3 className="text-black h4 text-uppercase">
                                                Cart Totals
                                            </h3>
                                        </div>
                                    </div>
                                    {/*<div className="row mb-3">*/}
                                    {/*    <div className="col-md-6">*/}
                                    {/*        <span className="text-black">Subtotal</span>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="col-md-6 text-right">*/}
                                    {/*        <strong className="text-black">$230.00</strong>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                    <div className="row mb-5">
                                        <div className="col-md-6">
                                            <span className="text-black">Tổng tiền: </span>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <span className="fw-bold" style={{color: "red"}}>2.330.000đ</span>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <button
                                                className="btn btn-secondary fw-bold btn-lg py-3 btn-block w-100"
                                                onclick="window.location='checkout.html'"
                                            >
                                                Thanh toán
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}