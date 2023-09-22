import React, {useEffect, useState} from "react";
import * as productService from "../../service/ProductService";
import spall1 from "../../images/spall1.jpg";
import {Link, NavLink, useNavigate, useParams} from "react-router-dom";
import cross from "../../images/cross.svg";
import * as cartService from "../../service/CartService";
import Swal from "sweetalert2";
import {useDispatch} from "react-redux";
import {getAllCart} from "../../redux/action/cart";
import {Field, Form, Formik} from "formik";

export function CategoryList() {
    const param = useParams();
    const nav = useNavigate();
    const [categoryPro, setCategoryPro] = useState('');
    const [listPrduct, setListProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('')
    const [category, setCategory] = useState(param.data);
    const token = localStorage.getItem("token");
    const dispatch = useDispatch();


    //Lấy categoryPro
    const getCategoryPro = async (cate) => {
        switch (cate) {
            case "khach":
                await setCategoryPro("Nội thất phòng khách");
                break;
            case "bep":
                await setCategoryPro("Nội thất phòng bếp");
                break;
            case "ngu":
                await setCategoryPro("Nội thất phòng ngủ");
                break;
            case "van":
                await setCategoryPro("Nội thất văn phòng");
                break;
            case "nghe":
                await setCategoryPro("Đồ gỗ mỹ nghệ");
                break;
        }
    }
    //Lấy danh sách sản phẩm
    const getAllProduct = async (cate, name, price, sort) => {
        try {
            await setName(() => name);
            await setPrice(() => price);
            await setSort(() => sort);
            await setCategory(() => cate);
            await getCategoryPro(cate);
            const res = await productService.getAllProduct(0, name, type, cate, price, sort);
            await setTotalPage(res.data.totalPages);
            const res1 = await productService.getAllProduct(1, name, type, cate, price, sort);
            await setListProduct(() => [...res.data.content, ...res1.data.content]);
            // await setListProduct(res.content);
            await setPage(1);
        } catch (e) {
            console.log(e)
        }
    }
    //Xem thêm
    const loadMore = async (page) => {
        console.log(name);
        const res = await productService.getAllProduct(page + 1, name, type, category, price, sort);
        await setListProduct(() => [...listPrduct, ...res.data.content]);
        await setPage(prevState => prevState + 1);
        setTotalPage(res.data.totalPages);
    }
    //Tìm danh sách sản phẩm
    const getAllProductSearch = async (n, p, o) => {
        await setPage(0);
        await setName(() => n);
        await setPrice(() => p);
        await setSort(() => o);
        const res = await productService.getAllProduct(0, n, type, category, p, o);
        await setListProduct(res.data.content);
        await setPage(0);
        setTotalPage(res.data.totalPages);
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
                    localStorage.setItem("url", "/list/" + param.data);
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
                            localStorage.setItem("url", "/list/" + param.data);
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

    // const sortByPrice = async (list) => {
    //     await list.sort(function (a, b) {
    //         // const nameA = a.name.toUpperCase();
    //         // const nameB = b.name.toUpperCase();
    //         // if (nameA > nameB) {
    //         //     return -1;
    //         // }
    //         // if (nameA < nameB) {
    //         //     return 1;
    //         // }
    //         return a.price - b.price;
    //     })
    //     await setListProduct(list);
    //     console.log(listPrduct);
    //
    // }
    // useEffect(() => {
    //     sortByPrice(listPrduct).then(r => null);
    // }, [sort])
    useEffect(() => {
        try {
            setName(() => '');
            setPrice(() => '');
            setSort(() => '');
        } catch (e) {
            console.log(e)
        } finally {
            window.scrollTo(0, 0);
            setCategory(param.data);
            getAllProduct(param.data, '', '', '').then(r => null);
        }
    }, [param.data]);
    // window.location.reload();
    useEffect(() => {
        dispatch(getAllCart());
        window.scrollTo(0, 0)
    }, [])
    if (!listPrduct) {
        return (
            <>
                {nav("/error")}
            </>
        );
    }
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{backgroundImage: `url(${spall1})`, marginTop: "5%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7">
                            <div>
                                {/*<h1 className="pt-5">Tất cả sản phẩm</h1>*/}
                                <h1 className="mb-1 mt-5 text-yl fw-bolder" style={{height: "65px"}}/>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="hero-img-wrap"/>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Hero Section*/}
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="intro-excerpt mt-lg-5">
                        <div className="d-flex">
                            <h2 className="text-yl fw-bolder" style={{width: "350px"}}>{categoryPro}</h2>
                            <div className="row mb-2" style={{marginLeft: "10%"}}>
                                <div className="col-md-3"/>
                                <div className="col-md-9 text-center">
                                    <div className="row g-4">
                                        <Formik
                                            initialValues={{
                                                name: name,
                                                price: price,
                                                sort: sort
                                            }}
                                            onSubmit={async (values, {resetForm}) => {
                                                try {
                                                    if (values.name === '' && values.price === '' && values.sort === '') {
                                                        // await setName('');
                                                        await getAllProduct(category, '', '', '');
                                                    } else {
                                                        await getAllProductSearch(values.name, values.price, values.sort);
                                                    }
                                                } catch (e) {
                                                    console.log(e)
                                                }
                                                // nav("/search/?nameSearch=" + values.name)
                                            }}>
                                            <Form>
                                                <div className="col-auto d-flex">
                                                    <Field
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Tên sản phẩm"
                                                        width="200px"
                                                        name="name"
                                                        style={{marginRight: "2%"}}
                                                        // value={name}
                                                        defaultValue={name}
                                                    />
                                                    <Field name="price" className="form-control" as="select"

                                                           style={{
                                                               color: "gray",
                                                               fontSize: "15px",
                                                               marginRight: "2%",
                                                               width: "200px"
                                                           }}
                                                    >
                                                        <option selected name="price" value="">Khoảng giá ▾</option>
                                                        <option name="price" value="1">Dưới 10 triệu</option>
                                                        <option name="price" value="2">10 triệu đến 20 triệu
                                                        </option>
                                                        <option name="price" value="3">20 triệu đến 50 triệu
                                                        </option>
                                                        <option name="price" value="4">Trên 50 triệu</option>
                                                    </Field>
                                                    <Field name="sort" className="form-control" as="select"

                                                           style={{color: "gray", fontSize: "15px", width: "300px"}}
                                                    >
                                                        <option selected name="sort" value="">Chọn cách sắp xếp ▾
                                                        </option>
                                                        <option name="sort" value="new">Mới nhất</option>
                                                        <option name="sort" value="a-z">Tên A-Z</option>
                                                        <option name="sort" value="z-a">Tên Z-A</option>
                                                        <option name="sort" value="priceAscending">Giá tăng dần
                                                        </option>
                                                        <option name="sort" value="priceDescending">Giá giảm dần
                                                        </option>

                                                    </Field>
                                                    {/*<input type="text"*/}
                                                    {/*       className="form-control"*/}
                                                    {/*       placeholder="Tìm kiếm sản phẩm"*/}
                                                    {/*       width="200px"*/}
                                                    {/*    value={name}*/}
                                                    {/*       defaultValue={name}*/}
                                                    {/*/>*/}
                                                    <button type="submit" className="btn btn-warning"
                                                            style={{
                                                                height: "38px",
                                                                marginTop: "7.5px",
                                                                marginLeft: "2%"
                                                            }}>
                                                        <span className="fa fa-search"/>
                                                    </button>
                                                </div>
                                            </Form>
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    {/*<div >*/}
                    {/* Start Column 1 */}
                    {
                        listPrduct.length < 1 ?
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="m-lg-5">Không có sản phẩm</h2>
                                </div>
                            </div>
                            :
                            <div className="row">
                                {listPrduct?.map((product, index) => (
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
                                                    style={{height: "50px"}}>{product.name} - {product.productCode}</h3>
                                                {product.quantity < 1 ?
                                                    <div className="text-center d-flex">
                                                        <div className="col-md-6">
                                                            <h3 className="text-danger fw-bolder"
                                                                style={{fontSize: "20px"}}>Hết Hàng</h3>
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
                                                            <span
                                                                className="product-price text-decoration-line-through">
                                                                {new Intl.NumberFormat('vi-VN',
                                                                    {style: 'currency', currency: 'VND'})
                                                                    .format(product.price * 1.1)}
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
                                                <span className="icon-cross btn"
                                                      onClick={async () => {
                                                          await addProdutToCart(product.id)
                                                      }}>
                                                    <img src={cross} className="img-fluid" alt={cross}/>
                                                </span>
                                            }
                                        </div>
                                    </div>
                                ))}
                                {page === totalPage - 1 ? ('') :
                                    (
                                        <button className="btn btn-secondary"
                                                style={{
                                                    borderRadius: "10px",
                                                    width: "10%",
                                                    marginLeft: "45%"
                                                }} onClick={() => loadMore(page)}>
                            <span className="">Xem thêm &nbsp;
                                <i className="fa-solid fa-angle-up fa-rotate-180"/>
                            </span>
                                        </button>
                                    )
                                }
                            </div>
                    }

                    {/* End Column 1 */}
                    {/*</div>*/}
                </div>
            </div>
        </>
    )
}