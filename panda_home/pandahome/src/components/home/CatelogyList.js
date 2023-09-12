import React, {useEffect, useState} from "react";
import * as productService from "../../service/ProductService";
import spall1 from "../../images/spall1.jpg";
import {Link, useParams} from "react-router-dom";
import cross from "../../images/cross.svg";

export function CatelogyList() {
    const param = useParams();
    const [listPrduct, setListProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [category, setCategory] = useState(param.data);
    //Lấy danh sách sản phẩm
    const getAllProduct = async (cate) => {
        await setCategory(cate);
        const res = await productService.getAllProduct(page, name, type, cate);
        const res1 = await productService.getAllProduct(page + 1, name, type, cate);
        await setListProduct(() => [...res.content, ...res1.content]);
        // await setListProduct(res.content);
        await setPage(prevState => prevState + 1);
        setTotalPage(res.totalPages);
        // console.log(listPrduct);
        // console.log(totalPage);
    }
    //Xem thêm
    const loadMore = async (page) => {
        const res = await productService.getAllProduct(page + 1, name, type, category);
        await setListProduct(() => [...listPrduct, ...res.content]);
        await setPage(prevState => prevState + 1);
    }

    useEffect(() => {
        setPage(prevState => prevState - prevState - 1);
        setCategory(param.data);
        getAllProduct(param.data).then(r => null);
    }, [param.data]);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    if (!listPrduct) {
        return (
            <>
                <h1>Không có san phẩm</h1>
            </>
        );
    }
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{backgroundImage: `url(${spall1})`, marginTop: "5%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div>
                                {/*<h1 className="pt-5">Tất cả sản phẩm</h1>*/}
                                <h1 className="mb-1 mt-5 text-yl fw-bolder">Nội thất phòng khách</h1>
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
                        {listPrduct.map((product, index) => (
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
                        {page === totalPage - 2 ? ('') :
                            (
                                <button className="btn btn-secondary"
                                        style={{
                                            borderRadius: "10px",
                                            width: "10%",
                                            marginLeft: "45%"
                                        }}>
                                        <span className="" onClick={() => loadMore(page + 1)}>Xem thêm &nbsp;
                                            <i className="fa-solid fa-angle-up fa-rotate-180"/>
                                        </span>
                                </button>
                            )
                        }
                        {/* End Column 1 */}
                    </div>
                </div>
            </div>
        </>
    )
}