import count from "../../images/couch.png";
import React from "react";
import cross from "../../images/cross.svg";
import ghe1 from "../../images/product-1.png"
import ghe2 from "../../images/product-2.png"
import ghe3 from "../../images/product-3.png"

export function Home() {
    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{marginTop: "5%"}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    Modern Interior <span className="d-block">Design Studio</span>
                                </h1>
                                <p className="mb-4">
                                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                                </p>
                                <p>
                                    <a href="" className="btn btn-secondary me-2">
                                        Shop Now
                                    </a>
                                    <a href="#" className="btn btn-white-outline">
                                        Explore
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src={count} className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Hero Section */}

            {/* Start Product Section */}
            <div className="product-section">
                <div className="container">
                    <div className="row">
                        {/* Start Column 1 */}
                        <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
                            <h2 className="mb-4 section-title">
                                Crafted with excellent material.
                            </h2>
                            <p className="mb-4">
                                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
                            </p>
                            <p>
                                <a href="shop.html" className="btn">
                                    Explore
                                </a>
                            </p>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={ghe1}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Nordic Chair</h3>
                                <strong className="product-price">$50.00</strong>
                                <span className="icon-cross">
                <img src={cross} className="img-fluid" alt={cross}/>
              </span>
                            </a>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={ghe2}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Kruzo Aero Chair</h3>
                                <strong className="product-price">$78.00</strong>
                                <span className="icon-cross">
                <img src={cross} className="img-fluid" alt={cross}/>
              </span>
                            </a>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={ghe3}
                                    className="img-fluid product-thumbnail"
                                />
                                <h3 className="product-title">Ergonomic Chair</h3>
                                <strong className="product-price">$43.00</strong>
                                <span className="icon-cross">
                <img src={cross} className="img-fluid" alt={cross}/>
              </span>
                            </a>
                        </div>
                        {/* End Column 4 */}
                    </div>
                </div>
            </div>
            {/* End Product Section */}
        </>
    )
}