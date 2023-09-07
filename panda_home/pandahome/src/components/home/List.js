import ghe1 from "../../images/product-1.png"
import ghe2 from "../../images/product-2.png"
import ghe3 from "../../images/product-3.png"
import cross from "../../images/cross.svg"
import React, {useEffect, useState} from "react";
import count from "../../images/couch.png";
import * as productService from "../../service/ProductService";
import {Link} from "react-router-dom";


export function List() {
    const [listPrduct, setListProduct] = useState([]);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState();
    const [name, setName] = useState('');
    //Lấy danh sách sản phẩm
    const getAllProduct = async () => {
        const res = await productService.getAllProduct(page, name);
        setListProduct(res.content);
        setTotalPage(res.totalPages);
        console.log(listPrduct);
        console.log(totalPage);
    }
    //Load more
    const loadMore = async (page) => {
        const res = await productService.getAllProduct(page, name);
        setListProduct(() => [...listPrduct, ...res.content]);
        setPage(prevState => prevState + 1);
    }

    useEffect(() => {
        getAllProduct();
    }, [])
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero">
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
            {/*<div className="container">*/}
            {/*    <div>*/}
            {/*        <h2>*/}
            {/*            /!*<span className="gb-icon">*!/*/}
            {/*            /!*  <svg viewBox="0 0 96.7 3" xmlns="https://www.w3.org/2000/svg">*!/*/}
            {/*            /!*    /!*<path d="M0 0h96.7v3H0z" />*!/*!/*/}
            {/*            /!*  </svg>*!/*/}
            {/*            /!*</span>*!/*/}
            {/*            <span>*/}
            {/*                <a href="">NỘI THẤT VĂN PHÒNG</a>*/}
            {/*            </span>*/}
            {/*        </h2>*/}

            {/*    </div>*/}
            {/*</div>*/}
            <div className="untree_co-section product-section before-footer-section">
                <div className="container">
                    <div className="row">
                        {/* Start Column 1 */}
                        {listPrduct.map((product, index) => (
                            <div className="col-12 col-md-4 col-lg-3 mb-5">
                                <a className="product-item" href="#">
                                    <Link to={`/detail/${product.id}`} style={{textDecoration: "none"}}>
                                        <img
                                            src={product.image}
                                            className="img-fluid product-thumbnail"
                                            style={{borderRadius: "10px"}}
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
                        {page === totalPage - 1 ? ('') :
                            (
                                <div className="btn btn-secondary"
                                     style={{
                                         borderRadius: "10px",
                                         width: "10%",
                                         marginLeft: "45%"
                                     }}>
                                        <span className="" onClick={() => loadMore(page + 1)}>Xem thêm &nbsp;
                                            <i className="fa-solid fa-angle-up fa-rotate-180"/>
                                        </span>
                                </div>
                            )
                        }
                        {/* End Column 1 */}
                        {/*          /!* Start Column 2 *!/*/}
                        {/*          <div className="col-12 col-md-4 col-lg-3 mb-5">*/}
                        {/*              <a className="product-item" href="#">*/}
                        {/*                  <img*/}
                        {/*                      src={ghe1}*/}
                        {/*                      className="img-fluid product-thumbnail"*/}
                        {/*                  />*/}
                        {/*                  <h3 className="product-title">Nordic Chair</h3>*/}
                        {/*                  <strong className="product-price">$50.00</strong>*/}
                        {/*                  <span className="icon-cross">*/}
                        {/*  <img src={cross} className="img-fluid" alt={cross}/>*/}
                        {/*</span>*/}
                        {/*              </a>*/}
                        {/*          </div>*/}
                        {/*          /!* End Column 2 *!/*/}

                    </div>
                </div>
            </div>
            {/*/!* Start Popular Product *!/*/}
            {/*<div className="popular-product">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="intro-excerpt">*/}
            {/*                <h2 className="text-black mb-3 ">Sản phẩm liên quan</h2>*/}
            {/*                <h2 className="text-black border-bottom1 mb-5"/>*/}
            {/*            </div>*/}
            {/*            /!*{top4.map((top, index) => (*!/*/}
            {/*                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">*/}
            {/*                    <div className="product-item-sm d-flex">*/}
            {/*                        <div className="thumbnail">*/}
            {/*                            <img*/}
            {/*                                src={top.image}*/}
            {/*                                alt="Image"*/}
            {/*                                className="img-fluid img-cricle"*/}
            {/*                                // width={100}*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                        <div className="pt-3">*/}
            {/*                            <div className="row" >*/}
            {/*                                <h3 style={{height:"63px"}}>"{top.name}"</h3>*/}
            {/*                            </div>*/}

            {/*                            /!*<p>*!/*/}
            {/*                            /!*    Donec facilisis quam ut purus rutrum lobortis. Donec vitae*!/*/}
            {/*                            /!*    odio{" "}*!/*/}
            {/*                            /!*</p>*!/*/}
            {/*                            <div className="row">*/}
            {/*                                <p style={{marginBottom: "0px"}}>*/}
            {/*                                    <Link to={`/detail/${top.id}`} href="#" className="btn btn-sm btn-warning"*/}
            {/*                                          style={{borderRadius: "20px"}}>Chi*/}
            {/*                                        tiết</Link>*/}
            {/*                                </p>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}

            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            /!*))}*!/*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*/!* End Popular Product *!/*/}
        </>
    )
}