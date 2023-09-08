import thicong from "../../images/thi-cong-noi-that-theo-mau1.png"
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import * as productService from "../../service/ProductService";
import {Carousel} from "react-bootstrap";
import Carousel1 from "react-multi-carousel";
import {Link} from "react-router-dom";
import cross from "../../images/cross.svg";

export function DetailProduct() {
    const param = useParams();
    const [product, setProduct] = useState();
    const [images, setImages] = useState([]);
    const [sameProduct, setSameProduct] = useState([]);
    const getProductAndImages = async (id) => {
        const res = await productService.getProById(id);
        setProduct(res);
        const imgs = await productService.getAllImg(id);
        setImages(imgs);
        const res1 = await productService.getSameProduct(res.productType.id);
        setSameProduct(res1);
        console.log(res1)
        console.log(images)
    }
    // const responsive = {
    //     desktop: {
    //         breakpoint: {max: 3000, min: 1024},
    //         items: 4
    //     },
    //     tablet: {
    //         breakpoint: {max: 1024, min: 464},
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: {max: 464, min: 0},
    //         items: 1
    //     }
    // };
    useEffect(() => {
        getProductAndImages(param.id)
    }, [param.id])


    // const price = product.price; // Giá tiền cần định dạng
    // const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price); // Định dạng giá tiền

    if (!product) {
        return null;
    }
    return (
        <>
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section" style={{marginTop: "6%"}}>
                <div className="container">
                    <div className="row justify-content-between bg-light p-lg-4" style={{borderRadius: "10px"}}>
                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <Carousel>
                                    {images.map((i) => (
                                        <Carousel.Item>
                                            <img
                                                src={i.url}
                                                alt="Image"
                                                className="img-fluid"
                                            />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>

                            </div>
                        </div>
                        <div className="col-lg-7" style={{paddingLeft: "5%"}}>
                            <h2 className="section-title">{product.name}</h2>
                            <div>
                                <ul className="list-unstyled custom-list">
                                    <li>Thương hiệu: <span style={{fontWeight: "bold"}}>Panda Home</span></li>
                                    <li>Mã sản phẩm: <span style={{fontWeight: "bold"}}>{product.productCode}</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p style={{fontWeight: "bold", color: "orange", fontSize: "30px"}}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(product.price)}
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
                                    // backgroundColor: "rgb(69 72 75)",
                                    // borderColor: "rgb(69 72 75)"
                                }}>
                                    Thêm vào giỏ hàng <br/>
                                    <span style={{fontSize: "13px"}}>Cam kết chính hãng / đổi trả 24h</span>
                                </button>
                                {/*<button className=" btn btn-warning" style={{marginLeft: "2%", fontWeight: "bold"}}>*/}
                                {/*    Mua ngay <br/>*/}
                                {/*    <span style={{fontSize: "13px"}}>Thanh toán nhanh chóng</span>*/}
                                {/*</button>*/}
                            </p>
                            <div className="col-lg-12 mt-4">
                                <h2 className="section-title mb-4">
                                    Mô tả sản phẩm
                                </h2>
                                <div>{product.description.split('-').map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                                </div>
                                <li>Trạng thái:&nbsp;
                                    {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
                                </li>
                                {/*<ul className="list-unstyled custom-list my-4" id="1">*/}
                                {/*<li>Donec vitae odio quis nisl dapibus malesuada</li>*/}
                                {/*<li>Donec vitae odio quis nisl dapibus malesuada</li>*/}
                                {/*<li>Donec vitae odio quis nisl dapibus malesuada</li>*/}
                                {/*<li>Donec vitae odio quis nisl dapibus malesuada</li>*/}
                                {/*</ul>*/}
                            </div>
                        </div>
                    </div>
                    <div className="mt-lg-4">
                        <img src={thicong} alt="Image" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}

            {/* Start Popular Product */}
            <div className="popular-product">
                <div className="container">
                    <div className="row">
                        <div className="intro-excerpt">
                            <h2 className="text-black mb-3 ">Sản phẩm liên quan</h2>
                            <h2 className="text-black border-bottom1 mb-5"/>
                        </div>
                        <div className="untree_co-section product-section before-footer-section">
                            <div className="row">
                                {/*<Carousel1  autoPlay*/}
                                {/*            autoPlaySpeed={5000}*/}
                                {/*            infinite  responsive={responsive}>*/}
                                {sameProduct.map((p, index) => (
                                    p.id === product.id ? "" : index >= 5 ? "" :
                                        <div className="col-12 col-md-4 col-lg-3 mb-5" key={index}>
                                            <a className="product-item" href="#">
                                                <Link to={`/detail/${p.id}`} style={{textDecoration: "none"}}>
                                                    <img
                                                        src={p.image}
                                                        className="img-fluid product-thumbnail"
                                                        style={{borderRadius: "10px"}}
                                                    />
                                                    <h3 className="product-title" style={{height: "40px"}}>{p.name}</h3>
                                                    <strong className="product-price">
                                                        {new Intl.NumberFormat('vi-VN',
                                                            {style: 'currency', currency: 'VND'})
                                                            .format(p.price)}
                                                    </strong>
                                                </Link>
                                                <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                            </a>
                                        </div>


                                    // <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                                    //     <div className="product-item-sm d-flex">
                                    //         <div className="thumbnail">
                                    //             <img
                                    //                 src={p.image}
                                    //                 alt="Image"
                                    //                 className="img-fluid"
                                    //                 // width={100}
                                    //             />
                                    //         </div>
                                    //         <div className="pt-3">
                                    //             <div className="row">
                                    //                 <h3 style={{height: "63px"}}>{p.name}</h3>
                                    //             </div>
                                    //
                                    //             {/*<p>*/}
                                    //             {/*    Donec facilisis quam ut purus rutrum lobortis. Donec vitae*/}
                                    //             {/*    odio{" "}*/}
                                    //             {/*</p>*/}
                                    //             <div className="row">
                                    //                 <p style={{marginBottom: "0px"}}>
                                    //                     <Link to={`/detail/${p.id}`} href="#"
                                    //                           className="btn btn-sm btn-warning"
                                    //                           style={{borderRadius: "20px"}}>Chi tiết
                                    //                     </Link>
                                    //                 </p>
                                    //             </div>
                                    //         </div>
                                    //
                                    //     </div>
                                    // </div>
                                ))}
                            </div>
                        </div>
                        {/*</Carousel1>*/}
                        {/*// <a onClick={() => reload(p.id)} title="More Details">*/}
                        {/*//     <div className="col-lg-11 col-md-6 portfolio-item filter-web">*/}
                        {/*//         <div className="portfolio-wrap">*/}
                        {/*//             <img*/}
                        {/*//                 src={p.image}*/}
                        {/*//                 className="img-fluid"*/}
                        {/*//                 alt=""*/}
                        {/*//             />*/}
                        {/*//             <div className="portfolio-info">*/}
                        {/*//                 <h4>{p.name}</h4>*/}
                        {/*//                 <p>{p.productType.name}</p>*/}
                        {/*//                 <div className="portfolio-links">*/}
                        {/*//                     <a*/}
                        {/*//                         href="https://khomohinh.com/wp-content/uploads/2022/09/mo-hinh-nhan-vat-naruto-chibi-7cm-3-400x400.jpg"*/}
                        {/*//                         data-gallery="portfolioGallery"*/}
                        {/*//                         className="portfolio-lightbox"*/}
                        {/*//                         title="Web 3"*/}
                        {/*//                     >*/}
                        {/*//                         <i className="bx bx-plus"/>*/}
                        {/*//                     </a>*/}
                        {/*//*/}
                        {/*//*/}
                        {/*//                 </div>*/}
                        {/*//             </div>*/}
                        {/*//         </div>*/}
                        {/*//     </div>*/}
                        {/*// </a>*/}
                        {/*{top4.map((top, index) => (*/}

                        {/*))}*/}
                    </div>
                </div>
            </div>
            {/* End Popular Product */}
        </>
    )
}