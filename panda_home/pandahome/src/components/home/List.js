import cross from "../../images/cross.svg"
import spall1 from "../../images/spall1.jpg"
import React, {useEffect, useState} from "react";
import * as productService from "../../service/ProductService";
import {Link, useNavigate} from "react-router-dom";
import * as cartService from "../../service/CartService";
import Swal from "sweetalert2";
import {getAllCart} from "../../redux/action/cart";
import {useDispatch} from "react-redux";


export function List() {
    const nav = useNavigate();
    const token = localStorage.getItem("token");
    const [listPrduct1, setListProduct1] = useState([]);
    const [listPrduct2, setListProduct2] = useState([]);
    const [listPrduct3, setListProduct3] = useState([]);
    const [listPrduct4, setListProduct4] = useState([]);
    const [listPrduct5, setListProduct5] = useState([]);
    const [page, setPage] = useState(0);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();

    //Lấy danh sách sản phẩm phòng khách
    const getAllProduct1 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'khach', '');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'khach', '');
        await setListProduct1(() => [...res.data.content, ...res1.data.content]);
        // await setPage(1);
        // const res1 = await productService.getAllProduct(page, name);
        // setTotalPage(res.totalPages);
        // console.log(listPrduct);
        // console.log(totalPage);
    }
    //Lấy danh sách sản phẩm phòng bếp
    const getAllProduct2 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'bep', '');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'bep', ',');
        await setListProduct2(() => [...res.data.content, ...res1.data.content]);
    }
    //Lấy danh sách sản phẩm phòng ngủ
    const getAllProduct3 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'ngu', '');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'ngu', '');
        await setListProduct3(() => [...res.data.content, ...res1.data.content]);
    }
    //Lấy danh sách sản phẩm văn phòng
    const getAllProduct4 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'van');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'van');
        await setListProduct4(() => [...res.data.content, ...res1.data.content]);
    }
    //Lấy danh sách sản phẩm đồ gỗ mỹ nghệ
    const getAllProduct5 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'nghe', '');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'nghe', '');
        await setListProduct5(() => [...res.data.content, ...res1.data.content]);
    }

    //Thêm sản phẩm vào giỏ hàng
    const addProdutToCart = async (id) => {
        if (!token) {
            await Swal.fire({
                icon: "warning",
                title: "Chưa đăng nhập",
                html: `Vui lòng đăng nhập để mua hàng`,
                showCancelButton: true,
                confirmButtonText: 'Đăng nhập',
                cancelButtonText: 'Không',
                reverseButtons: true,
                cancelButtonColor: '#3085d6',
                confirmButtonColor: '#d33',
            }).then(async (res) => {
                if (res.isConfirmed) {
                    localStorage.setItem("url", "/list");
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
                            localStorage.setItem("url", "/list");
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
        getAllProduct1(page);
        getAllProduct2(page);
        getAllProduct3(page);
        getAllProduct4(page);
        getAllProduct5(page);
    }, []);
    useEffect(() => {
        dispatch(getAllCart());
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{backgroundImage: `url(${spall1})`, marginTop: "5%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div>
                                <h1 className="mb-1 mt-5 text-yl fw-bolder">Tất cả sản phẩm</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Hero Section*/}
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    {listPrduct1.length < 1 ? "" :
                        <div>
                            <div className="intro-excerpt mt-lg-5">
                                <h2 className="mb-1 mt-5 text-yl fw-bolder">Nội thất phòng khách</h2>
                                <h2 className="text-black mb-5 border-bottom5"/>
                            </div>
                            <div className="row">
                                {/* Start Column 1 */}
                                {listPrduct1.map((product, index) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                        <div className="product-item">
                                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid product-thumbnail"
                                                    style={{borderRadius: "10px"}}
                                                    title={product.name}
                                                />
                                                <h3 className="product-title"
                                                    style={{height: "55px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                            style={{fontSize:"20px"}}>Hết Hàng</h3>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(product.price)}
                                                        </span>
                                                        </div>

                                                    </div>
                                                    :
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <span className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price *1.1)}
                                                            </span>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <strong className="product-price">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price)}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                }
                                            </Link>
                                            {product.quantity < 1 ? ''
                                                :
                                                <span className="icon-cross btn" onClick={async () => {
                                                    await addProdutToCart(product.id)
                                                }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}
                                {/* End Column 1 */}
                            </div>
                        </div>
                    }
                    {listPrduct2.length < 1 ? "" :
                        <div>
                            <div className="intro-excerpt mt-lg-3">
                                <h2 className="mb-1 text-yl fw-bolder">Nội thất phòng bếp</h2>
                                <h2 className="text-black mb-5 border-bottom5"/>
                            </div>
                            <div className="row">
                                {/* Start Column 1 */}
                                {listPrduct2.map((product, index) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                        <div className="product-item">
                                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid product-thumbnail"
                                                    style={{borderRadius: "10px"}}
                                                    title={product.name}
                                                />
                                                <h3 className="product-title"
                                                    style={{height: "55px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                                style={{fontSize:"20px"}}>Hết Hàng</h3>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(product.price)}
                                                        </span>
                                                        </div>

                                                    </div>
                                                    :
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <span className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price *1.1)}
                                                            </span>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <strong className="product-price">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price)}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                }
                                            </Link>
                                            {product.quantity < 1 ? ''
                                                :
                                                <span className="icon-cross btn" onClick={async () => {
                                                    await addProdutToCart(product.id)
                                                }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* End Column 1 */}
                        </div>}
                    {listPrduct3.length < 1 ? "" :
                        <div>
                            <div className="intro-excerpt mt-lg-3">
                                <h2 className="mb-1 text-yl fw-bolder">Nội thất phòng ngủ</h2>
                                <h2 className="text-black mb-5 border-bottom5"/>
                            </div>
                            <div className="row">
                                {/* Start Column 1 */}
                                {listPrduct3.map((product, index) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                        <div className="product-item">
                                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid product-thumbnail"
                                                    style={{borderRadius: "10px"}}
                                                    title={product.name}
                                                />
                                                <h3 className="product-title"
                                                    style={{height: "55px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                                style={{fontSize:"20px"}}>Hết Hàng</h3>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(product.price)}
                                                        </span>
                                                        </div>

                                                    </div>
                                                    :
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <span className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price *1.1)}
                                                            </span>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <strong className="product-price">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price)}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                }
                                            </Link>
                                            {product.quantity < 1 ? ''
                                                :
                                                <span className="icon-cross btn" onClick={async () => {
                                                    await addProdutToCart(product.id)
                                                }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}

                                {/* End Column 1 */}
                            </div>
                        </div>
                    }
                    {listPrduct4.length < 1 ? "" :
                        <div>
                            <div className="intro-excerpt mt-lg-3">
                                <h2 className="mb-1 text-yl fw-bolder">Nội thất văn phòng</h2>
                                <h2 className="text-black mb-5 border-bottom5"/>
                            </div>
                            <div className="row">
                                {/* Start Column 1 */}
                                {listPrduct4.map((product, index) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                        <div className="product-item">
                                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                                <img
                                                    src={product.image}
                                                    className="img-fluid product-thumbnail"
                                                    style={{borderRadius: "10px"}}
                                                    title={product.name}
                                                />
                                                <h3 className="product-title"
                                                    style={{height: "55px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                                style={{fontSize:"20px"}}>Hết Hàng</h3>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(product.price)}
                                                        </span>
                                                        </div>

                                                    </div>
                                                    :
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <span className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price *1.1)}
                                                            </span>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <strong className="product-price">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price)}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                }
                                            </Link>
                                            {product.quantity < 1 ? ''
                                                :
                                                <span className="icon-cross btn" onClick={async () => {
                                                    await addProdutToCart(product.id)
                                                }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}
                                {/* End Column 1 */}
                            </div>
                        </div>
                    }
                    {listPrduct5.length < 1 ? "" :
                        <div>
                            <div className="intro-excerpt mt-lg-3">
                                <h2 className="mb-1 text-yl fw-bolder">Đồ gỗ mỹ nghệ</h2>
                                <h2 className="text-black mb-5 border-bottom5"/>
                            </div>
                            <div className="row">
                                {/* Start Column 1 */}
                                {listPrduct5.map((product, index) => (
                                    <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                        <div className="product-item">
                                            <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                                <img
                                                    src={product.image}
                                                    className=" product-thumbnail"
                                                    style={{borderRadius: "10px", width:"100%"}}
                                                    title={product.name}
                                                />
                                                <h3 className="product-title"
                                                    style={{height: "55px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                                style={{fontSize:"20px"}}>Hết Hàng</h3>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <span className="product-price">
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(product.price)}
                                                        </span>
                                                        </div>

                                                    </div>
                                                    :
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <span className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price *1.1)}
                                                            </span>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <strong className="product-price">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price)}
                                                            </strong>
                                                        </div>
                                                    </div>
                                                }
                                            </Link>
                                            {product.quantity < 1 ? ''
                                                :
                                                <span className="icon-cross btn" onClick={async () => {
                                                    await addProdutToCart(product.id)
                                                }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}
                                {/* End Column 1 */}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}