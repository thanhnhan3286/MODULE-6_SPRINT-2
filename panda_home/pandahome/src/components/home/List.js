import cross from "../../images/cross.svg"
import spall1 from "../../images/spall1.jpg"
import React, {useEffect, useState} from "react";
import * as productService from "../../service/ProductService";
import {Link} from "react-router-dom";


export function List() {
    const [listPrduct1, setListProduct1] = useState([]);
    const [listPrduct2, setListProduct2] = useState([]);
    const [listPrduct3, setListProduct3] = useState([]);
    const [listPrduct4, setListProduct4] = useState([]);
    const [listPrduct5, setListProduct5] = useState([]);
    const [page, setPage] = useState(0);
    // const [totalPage, setTotalPage] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    // const [category, setCategory] = useState('');

    //Lấy danh sách sản phẩm phòng khách
    const getAllProduct1 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'khach');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'khach');
        await setListProduct1(() => [...res.content, ...res1.content]);
        // await setPage(1);
        // const res1 = await productService.getAllProduct(page, name);
        // setTotalPage(res.totalPages);
        // console.log(listPrduct);
        // console.log(totalPage);
    }
    //Lấy danh sách sản phẩm phòng bếp
    const getAllProduct2 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'bep');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'bep');
        await setListProduct2(() => [...res.content, ...res1.content]);
    }
    //Lấy danh sách sản phẩm phòng ngủ
    const getAllProduct3 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'ngu');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'ngu');
        await setListProduct3(() => [...res.content, ...res1.content]);
    }
    //Lấy danh sách sản phẩm văn phòng
    const getAllProduct4 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'van');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'van');
        await setListProduct4(() => [...res.content, ...res1.content]);
    }
    //Lấy danh sách sản phẩm đồ gỗ mỹ nghệ
    const getAllProduct5 = async (page) => {
        const res = await productService.getAllProduct(page, name, type, 'nghe');
        const res1 = await productService.getAllProduct(page + 1, name, type, 'nghe');
        await setListProduct5(() => [...res.content, ...res1.content]);
    }

    // //Xem thêm
    // const loadMore = async (page) => {
    //     const res = await productService.getAllProduct(page, name, type, category);
    //     await setListProduct(() => [...listPrduct, ...res.content]);
    //     await setPage(prevState => prevState + 1);
    // }

    useEffect(() => {
        getAllProduct1(page);
        getAllProduct2(page);
        getAllProduct3(page);
        // getAllProduct4(page);
        // getAllProduct5(page);
    }, []);
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{backgroundImage:`url(${spall1})`, marginTop:"5%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div>
                                <h1 className="pt-5">Tất cả sản phẩm</h1>
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
                    <div className="intro-excerpt mt-lg-5">
                        <h2 className="mb-1 mt-5 text-yl fw-bolder">Nội thất phòng khách</h2>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct1.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
                                            title={product.name}
                                        />
                                        <h3 className="product-title" style={{height: "55px"}}>{product.name}</h3>
                                        <strong className="product-price">
                                            {new Intl.NumberFormat('vi-VN',
                                                {style: 'currency', currency: 'VND'})
                                                .format(product.price)}
                                        </strong>
                                    </Link>
                                    <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                </a>
                            </div>
                        ))}
                        {/* End Column 1 */}
                    </div>
                    <div className="intro-excerpt mt-lg-3">
                        <h2 className="mb-1 text-yl fw-bolder">Nội thất phòng bếp</h2>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct2.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
                                            title={product.name}
                                        />
                                        <h3 className="product-title" style={{height: "55px"}}>{product.name}</h3>
                                        <strong className="product-price">
                                            {new Intl.NumberFormat('vi-VN',
                                                {style: 'currency', currency: 'VND'})
                                                .format(product.price)}
                                        </strong>
                                    </Link>
                                    <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                </a>
                            </div>
                        ))}

                        {/* End Column 1 */}
                    </div>
                    <div className="intro-excerpt mt-lg-3">
                        <h2 className="mb-1 text-yl fw-bolder">Nội thất phòng ngủ</h2>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct3.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
                                            title={product.name}
                                        />
                                        <h3 className="product-title" style={{height: "55px"}}>{product.name}</h3>
                                        <strong className="product-price">
                                            {new Intl.NumberFormat('vi-VN',
                                                {style: 'currency', currency: 'VND'})
                                                .format(product.price)}
                                        </strong>
                                    </Link>
                                    <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                </a>
                            </div>
                        ))}

                        {/* End Column 1 */}
                    </div>
                    <div className="intro-excerpt mt-lg-3">
                        <h2 className="mb-1 text-yl fw-bolder">Nội thất văn phòng</h2>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct1.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
                                            title={product.name}
                                        />
                                        <h3 className="product-title" style={{height: "55px"}}>{product.name}</h3>
                                        <strong className="product-price">
                                            {new Intl.NumberFormat('vi-VN',
                                                {style: 'currency', currency: 'VND'})
                                                .format(product.price)}
                                        </strong>
                                    </Link>
                                    <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                </a>
                            </div>
                        ))}
                        {/* End Column 1 */}
                    </div>
                    <div className="intro-excerpt mt-lg-3">
                        <h2 className="mb-1 text-yl fw-bolder">Đồ gỗ mỹ nghệ</h2>
                        <h2 className="text-black mb-5 border-bottom5"/>
                    </div>
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct1.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-4" key={"pr-" + index}>
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
                                            title={product.name}
                                        />
                                        <h3 className="product-title" style={{height: "55px"}}>{product.name}</h3>
                                        <strong className="product-price">
                                            {new Intl.NumberFormat('vi-VN',
                                                {style: 'currency', currency: 'VND'})
                                                .format(product.price)}
                                        </strong>
                                    </Link>
                                    <span className="icon-cross">
                                        <img src={cross} className="img-fluid" alt={cross}/>
                                    </span>
                                </a>
                            </div>
                        ))}
                        {/* End Column 1 */}
                    </div>
                </div>
            </div>
        </>
    )
}