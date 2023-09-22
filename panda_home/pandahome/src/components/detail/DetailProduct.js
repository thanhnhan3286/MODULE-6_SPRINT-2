import thicong from "../../images/thi-cong-noi-that-theo-mau1.png"
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as productService from "../../service/ProductService";
import {Carousel} from "react-bootstrap";
import Carousel1 from "react-multi-carousel";
import {Link, NavLink} from "react-router-dom";
import cross from "../../images/cross.svg";
import {useDispatch} from "react-redux";
import Swal from "sweetalert2";
import * as cartService from "../../service/CartService"
import {getAllCart} from "../../redux/action/cart";


export function DetailProduct() {
    const nav = useNavigate();
    const param = useParams();
    const [product, setProduct] = useState();
    const [images, setImages] = useState([]);
    const [sameProduct, setSameProduct] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const token = localStorage.getItem("token");


    //Lấy sản phẩm và danh sách hình ảnh
    const getProductAndImages = async (id) => {
        try {
            const res = await productService.getProById(id);
            setProduct(res);
            const imgs = await productService.getAllImg(id);
            setImages(imgs);
            const res1 = await productService.getSameProduct(res.productType.id);
            setSameProduct(res1);
        } catch (e) {
            nav("/error")
        }
    }

    //Thay đổi số lượng
    const setQuantityProduct = async (value) => {
        if (value === 1) {
            if (quantity < product.quantity) {
                setQuantity(quantity + 1)
            } else {
                await Swal.fire({
                    icon: "warning",
                    title: "Số lượng sản phẩm trong kho không đủ.",
                    timer: 2500
                });
            }
        } else {
            if (quantity > 1)
                setQuantity(quantity - 1)
        }
    }

    //Thêm vào giỏ hàng
    const addCart = async () => {
        try {
            if (token == null) {
                await Swal.fire({
                    icon: "warning",
                    title: "Chưa đăng nhập",
                    html: `Vui lòng đăng nhập để mua hàng`,
                    showCancelButton: true,
                    confirmButtonText: 'Đăng nhập',
                    cancelButtonText: 'Không',
                    reverseButtons: true,
                    cancelButtonColor: '#3085d6',
                    confirmButtonColor: '#d33'
                }).then(async (res) => {
                    if (res.isConfirmed) {
                        localStorage.setItem("url", "/detail/" + product.id);
                        nav("/login");
                    }
                })
            } else {
                const res = await cartService.setQuantity(quantity, product.id);
                await dispatch(getAllCart());
                switch (res.data) {
                    case "Bạn chưa đăng nhập.":
                        await Swal.fire({
                            icon: "warning",
                            title: "Chưa đăng nhập",
                            html: `Vui lòng đăng nhập để mua hàng`,
                            showCancelButton: true,
                            confirmButtonText: 'Đăng nhập',
                            cancelButtonText: 'Không',
                            reverseButtons: true,
                            cancelButtonColor: '#3085d6',
                            confirmButtonColor: '#d33'
                        }).then(async (res) => {
                            if (res.isConfirmed) {
                                localStorage.setItem("url", "/detail/" + product.id);
                                nav("/login");
                            }
                        })
                        break;
                    case "Số lượng sản phẩm trong kho không đủ.":
                        await Swal.fire({
                            icon: "warning",
                            title: "Vượt quá số lượng sản phẩm trong kho.",
                            timer: 2500
                        });
                        break;
                    case "Đã chỉnh sửa số lượng":
                        await Swal.fire({
                            icon: "success",
                            title: "Đã tăng số lượng sản phẩm vừa chọn trong giỏ hàng.",
                            timer: 2500
                        });
                        break;
                    case "Đã thêm mới sản phẩm":
                        await Swal.fire({
                            icon: "success",
                            title: "Đã thêm sản phẩm vừa chọn vào giỏ hàng.",
                            timer: 2500
                        });
                        break;
                }
            }
        } catch (e) {
            await nav("/error")
        } finally {
            await dispatch(getAllCart());
        }
    }
    //Thêm sản phẩm vào giỏ hàng
    const addProdutToCart = async (id) => {
        if (token == null) {
            await Swal.fire({
                icon: "warning",
                title: "Chưa đăng nhập",
                html: `Vui lòng đăng nhập để mua hàng`,
                showCancelButton: true,
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Không',
                reverseButtons: true,
                cancelButtonColor: '#3085d6',
                confirmButtonColor: '#d33'
            }).then(async (res) => {
                if (res.isConfirmed) {
                    localStorage.setItem("url", "/detail/" + product.id);
                    nav("/login");
                }
            })
        } else {
            const res = await cartService.setQuantity(1, id);
            await dispatch(getAllCart());
            switch (res.data) {
                case "Bạn chưa đăng nhập.":
                    await Swal.fire({
                        icon: "warning",
                        title: "Chưa đăng nhập",
                        html: `Vui lòng đăng nhập để mua hàng`,
                        showCancelButton: true,
                        confirmButtonText: 'Đăng nhập',
                        cancelButtonText: 'Không',
                        reverseButtons: true,
                        cancelButtonColor: '#3085d6',
                        confirmButtonColor: '#d33'
                    }).then(async (res) => {
                        if (res.isConfirmed) {
                            localStorage.setItem("url", "/detail/" + product.id);
                            nav("/login");
                        }
                    })
                    break;
                case "Số lượng sản phẩm trong kho không đủ.":
                    await Swal.fire({
                        icon: "warning",
                        title: "Vượt quá số lượng sản phẩm trong kho.",
                        timer: 2500
                    });
                    break;
                case "Đã chỉnh sửa số lượng":
                    await Swal.fire({
                        icon: "success",
                        title: "Đã tăng số lượng sản phẩm vừa chọn trong giỏ hàng.",
                        timer: 2500
                    });
                    break;
                case "Đã thêm mới sản phẩm":
                    await Swal.fire({
                        icon: "success",
                        title: "Đã thêm sản phẩm vừa chọn vào giỏ hàng.",
                        timer: 2500
                    });
                    break;
            }
        }
    }

    useEffect(() => {
        getProductAndImages(param.id)
    }, [param.id])

    useEffect(() => {
        dispatch(getAllCart());
        window.scrollTo(0, 0)
    }, [])

    // const price = product.price; // Giá tiền cần định dạng
    // const formattedPrice = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price); // Định dạng giá tiền
    if (!product) {
        return null;
    }
    return (
        <>
            {/* Start Why Choose Us Section */}
            <div className="why-choose-section" style={{marginTop: "5%"}}>
                <div className="container">
                    <div className="mb-3 d-flex">
                        <NavLink to={"/home"} id="tc" className="fw-bolder fs-6">
                            Trang chủ
                        </NavLink>
                        <a href={`/detail/${product.id}`} className="text-black fs-6">&nbsp; / Chi tiết sản phẩm</a>
                    </div>
                    <div className="intro-excerpt ">
                        <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Thông tin sản phẩm</h2>
                        <h2 className="text-black border-bottom1 mb-3"/>
                    </div>
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
                            <div className="d-flex">
                                <p style={{fontWeight: "bold", color: "orange", fontSize: "30px"}}>
                                    {new Intl.NumberFormat('vi-VN', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }).format(product.price)}
                                </p>
                                <span className="product-price text-decoration-line-through fs-4"
                                      style={{marginLeft: "10%"}}>
                                      {new Intl.NumberFormat('vi-VN',
                                          {style: 'currency', currency: 'VND'})
                                          .format(product.price * 1.1)}
                                 </span>
                            </div>
                            {product.quantity < 1 ? "" :
                                <div className="d-block">
                                    <div className="mt-2 mb-3" style={{marginLeft: "5%", marginRight: "5%"}}>
                                        <strong className="fs-6">Kho: {product?.quantity}</strong>
                                    </div>

                                    <div
                                        className="input-group mb-3 d-flex quantity-container"
                                        style={{maxWidth: 120}}
                                    >
                                        <div className="input-group-prepend">
                                            <button
                                                className="btn"
                                                type="button" style={{color: "black"}}
                                                onClick={async () => {
                                                    await setQuantityProduct(0)
                                                }}
                                            >
                                                −
                                            </button>
                                        </div>
                                        <input type="text" style={{height: "40px", width: "40%", borderRadius: "5px"}}
                                               className="input text-center" min={1} value={quantity}
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn"
                                                type="button" style={{color: "black"}}
                                                onClick={() => setQuantityProduct(1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            }
                            <p>
                                {product.quantity < 1 ?

                                    <h2 className="text-danger fw-bold">Hết hàng</h2>

                                    :
                                    <button className="btn btn-warning btn-primary"
                                            style={{
                                                fontWeight: "bold", width: "auto",
                                                // backgroundColor: "rgb(69 72 75)",
                                                borderColor: "rgb(69 72 75)"
                                            }}
                                            onClick={() => addCart()}
                                    >
                                        Thêm vào giỏ hàng <br/>
                                        <span style={{fontSize: "13px"}}>Cam kết chính hãng</span>
                                    </button>
                                }

                                {/*<button className=" btn btn-warning" style={{marginLeft: "2%", fontWeight: "bold"}}>*/}
                                {/*    Mua ngay <br/>*/}
                                {/*    <span style={{fontSize: "13px"}}>Thanh toán nhanh chóng</span>*/}
                                {/*</button>*/}
                            </p>
                            <div className="col-lg-12 mt-4">
                                <h2 className="section-title mb-4">
                                    Mô tả sản phẩm
                                </h2>
                                <div>
                                    <ul className="list-unstyled custom-list my-4">
                                        {product.description.split('-').map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}

                                    </ul>
                                </div>


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
                                            <div className="product-item">
                                                <Link to={`/detail/${p.id}`} style={{textDecoration: "none"}}>
                                                    <img
                                                        src={p.image}
                                                        className="img-fluid product-thumbnail"
                                                        style={{borderRadius: "10px"}}
                                                    />
                                                    <h3 className="product-title" style={{height: "40px"}}>{p.name}</h3>
                                                    {p.quantity < 1 ?
                                                        <div className="text-center d-flex">
                                                            <div className="col-md-6">
                                                                <h3 className="text-danger fw-bolder"
                                                                    style={{fontSize: "20px"}}>Hết Hàng</h3>
                                                            </div>
                                                            <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(p.price)}
                                                        </span>
                                                            </div>
                                                        </div>
                                                        :
                                                        <div className="text-center d-flex">
                                                            <div className="col-md-6">
                                                            <span
                                                                className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(p.price * 1.1)}
                                                            </span>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <strong className="product-price">
                                                                    {new Intl.NumberFormat('vi-VN',
                                                                        {style: 'currency', currency: 'VND'})
                                                                        .format(p.price)}
                                                                </strong>
                                                            </div>
                                                        </div>
                                                    }
                                                </Link>
                                                {p.quantity < 1 ? ''
                                                    :
                                                    <span className="icon-cross btn"
                                                          onClick={async () => {
                                                              await addProdutToCart(p.id)
                                                          }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                                }
                                            </div>
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