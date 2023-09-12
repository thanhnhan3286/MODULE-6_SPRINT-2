import count from "../../images/couch.png";
import React, {useEffect, useState} from "react";
import cross from "../../images/cross.svg";
import pkhach from "../../images/pkhach.jpg";
import pngu from "../../images/pngu.png";
import pbep from "../../images/pbep.jpg";
import ghe1 from "../../images/product-1.png";
import ghe2 from "../../images/product-2.png";
import ghe3 from "../../images/product-3.png";
import sofa from "../../images/sofa.png";
import enve from "../../images/envelope-outline.svg";
import grid1 from "../../images/img-grid-1.jpg";
import grid2 from "../../images/img-grid-2.jpg";
import grid3 from "../../images/img-grid-3.jpg";
import why from "../../images/why-choose-us-img.jpg"
import truck from "../../images/truck.svg"
import bag from "../../images/bag.svg"
import support from "../../images/support.svg"
import returns from "../../images/return.svg"
import tragop from "../../images/tra-gop.png";
import thicong from "../../images/thi-cong-noi-that-theo-mau1.png";
import * as productService from "../../service/ProductService";
import {Link} from "react-router-dom";
import spall1 from "../../images/spall1.jpg";


export function Home() {
    const [top4, setTop4] = useState([]);
    const getTop4 = async () => {
        const res = await productService.getTop4New();
        setTop4(res);
        // console.log(res)
    }
    useEffect(() => {
        getTop4();
    }, [])
    useEffect(()=>{
      window.scrollTo(0,0)
    },[])

    return (
        <>
            {/* Start Hero Section */}
            <div className="hero" style={{marginTop: "4%", backgroundImage:`url(${spall1})`}}>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt mt-4">
                                <h1>
                                    Thiết kế hiện đại <span className="d-block">Sang trọng</span>
                                </h1>
                                <p className="mb-4 fs-4 text-white">
                                    Panda Home cung cấp nội thất phù hợp với mọi gia đình
                                </p>
                                {/*<p>*/}
                                {/*    <a href="" className="btn btn-warning me-2 fw-bold" style={{color:"black"}}>*/}
                                {/*        Sản phẩm*/}
                                {/*    </a>*/}
                                {/*</p>*/}
                            </div>
                        </div>
                        {/*<div className="col-lg-7">*/}
                        {/*    <div className="hero-img-wrap">*/}
                        {/*        <img src={count} className="img-fluid"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
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
                                <span className=" bg-warning" > Panda Home </span> <br/>
                                <span className="fs-3" style={{color: "#000000a8"}}>Cửa hàng nội thất</span>
                            </h2>
                            <p className="mb-4">
                                <span className="fw-bold">Panda Home</span> bán <span className="fw-bold">Đồ nội thất chất lượng </span> tại
                                Đà Nẵng. Chúng tôi có xưởng thi công nội thất
                                theo mẫu của bạn.{" "}
                            </p>
                            <div>
                                <Link to={"/list"} className="btn btn-warning me-2 fw-bold" style={{color: "black"}}>
                                    Gian hàng
                                </Link>
                            </div>
                        </div>
                        {/* End Column 1 */}
                        {/* Start Column 2 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={pkhach}
                                    className="img-fluid product-thumbnail rounded-circle"
                                />
                                <h3 className="product-title text-uppercase">Nội thất phòng khách</h3>
                            </a>
                        </div>
                        {/* End Column 2 */}
                        {/* Start Column 3 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={pngu}
                                    className="img-fluid product-thumbnail rounded-circle"
                                />
                                <h3 className="product-title text-uppercase">Nội thất phòng ngủ</h3>
                            </a>
                        </div>
                        {/* End Column 3 */}
                        {/* Start Column 4 */}
                        <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href="cart.html">
                                <img
                                    src={pbep}
                                    className="img-fluid product-thumbnail  rounded-circle"
                                />
                                <h3 className="product-title text-uppercase">Nội thất phòng bếp</h3>
                            </a>
                        </div>
                        {/* End Column 4 */}
                    </div>

                </div>
            </div>
            {/* End Product Section */}

            {/* Start Why Choose Us Section */}
            <div className="why-choose-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-6">
                            <h2 className="section-title">Tại sao chọn Panda Home</h2>
                            <div className="row my-5">
                                <div className="col-6 col-md-6">
                                    <Link to={"/transport"}>
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src={truck}
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3 className="fw-bold">Giao hàng hỏa tốc &amp; Miễn phí vận chuyển</h3>
                                        <p>
                                            Sản phẩm sẽ được giao hàng miễn phí trong phạm vi nội thành
                                            Đà Nẵng.
                                        </p>
                                    </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-6">
                                    <div className="feature">
                                        <div className="icon">
                                            <img
                                                src={bag}
                                                alt="Image"
                                                className="imf-fluid"
                                            />
                                        </div>
                                        <h3 className="fw-bold">Dễ dàng mua sắm</h3>
                                        <p>
                                            Nhân viên tư vấn nhiệt tình, lựa chọn theo sở thích và yêu cầu từ khách
                                            hàng.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-6 col-md-6">
                                    <Link to={"/payment"}>
                                        <div className="feature">
                                            <div className="icon">
                                                <img
                                                    src={support}
                                                    alt="Image"
                                                    className="imf-fluid"
                                                />
                                            </div>
                                            <h3 className="fw-bold">Hỗ trợ thanh toán</h3>
                                            <p>
                                                Hỗ trợ thanh toán trực tiếp sau khi giao hàng, thanh toán online và trả góp
                                                0% lãi xuất qua nhiều hệ thống ngân hàng số.
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-6 col-md-6">
                                    <Link to={"/return"}>
                                        <div className="feature">
                                            <div className="icon">
                                                <img
                                                    src={returns}
                                                    alt="Image"
                                                    className="imf-fluid"
                                                />
                                            </div>
                                            <h3 className="fw-bold">Hoàn trả miễn phí</h3>
                                            <p>
                                                Sản phẩm sẽ được đổi trả nếu sản phẩm có lỗi của <span className="fw-bold"
                                                                                                       style={{color: "rgb(255 167 0)"}}>Panda Home</span> trong
                                                vòng 30 ngày kế từ ngày giao hàng.
                                            </p>
                                        </div>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="img-wrap">
                                <img
                                    src={why}
                                    alt="Image"
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-lg-5 mt-3">
                        <img src={tragop} alt="Image" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
            {/* End Why Choose Us Section */}

            {/* Start We Help Section */}
            <div className="we-help-section">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="imgs-grid">
                                <div className="grid grid-1">
                                    <img src={grid1} alt="Untree.co"/>
                                </div>
                                <div className="grid grid-2">
                                    <img src={grid2} alt="Untree.co"/>
                                </div>
                                <div className="grid grid-3">
                                    <img src={grid3} alt="Untree.co"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 ps-lg-5">
                            <h2 className="section-title mb-4">
                                Chúng tôi sẽ giúp bạn sở hữu không gian sống hiện đại.
                            </h2>
                            <p>
                                Đam mê của chúng tôi không chỉ giúp bạn hoàn thành ngôi nhà trong mơ, mà còn cung cấp
                                sản phẩm nội thất đẹp mắt đáp ứng nhu cầu cá nhân và tài chính của bạn. <br/>
                                <span
                                    className="fw-bold">Dịch vụ thi công nội thất tại Đà Nẵng của chúng tôi bao gồm:</span>
                            </p>
                            <ul className="list-unstyled custom-list my-4">
                                <li>Nội thất phòng khách</li>
                                <li>Nội thất phòng bếp</li>
                                <li>Nội thất phòng ngủ</li>
                                <li>Nội thất văn phòng</li>
                            </ul>
                            <p>
                                Chúng tôi biết rằng việc thực hiện các dự án sáng tạo đòi hỏi sự kết hợp giữa động lực,
                                tham vọng, kỹ năng và bí quyết kỹ thuật, vì vậy tại PANDA HOME, chúng tôi chỉ tập hợp
                                những người giỏi nhất để đảm bảo cung cấp giải pháp cho khách hàng vừa thực tế vừa phi
                                thường!
                                <br/>
                                Nhóm của chúng tôi sẽ hoàn thiện không gian nội thất bạn mong muốn, bằng tất cả nhãn
                                quang thẩm mỹ được tôi luyện và thực tiễn kinh doanh đáng tin cậy đã được chứng
                                minh.

                            </p>
                        </div>
                    </div>
                    <div className="mt-lg-5">
                        <img src={thicong} alt="Image" className="img-fluid" style={{borderRadius: "20px"}}/>
                    </div>
                </div>
            </div>
            {/* End We Help Section */}

            {/* Start Popular Product */}
            <div className="popular-product">
                <div className="container">
                    <div className="row">
                        <div className="intro-excerpt">
                            <h2 className="text-black mb-3 ">Sản phẩm mới</h2>
                            <h2 className="text-black border-bottom1 mb-5"/>
                        </div>
                        {top4.map((top, index) => (
                            <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0" key={index}>
                                <div className="product-item-sm d-flex">
                                    <div className="thumbnail">
                                        <img
                                            src={top.image}
                                            alt="Image"
                                            className="img-fluid img-cricle"
                                            // width={100}
                                        />
                                    </div>
                                    <div className="pt-3">
                                        <div className="row" >
                                            <h3 style={{height:"63px"}}>{top.name}</h3>
                                        </div>
                                        <div className="row">
                                            <p style={{marginBottom: "0px"}}>
                                                <Link to={`/detail/${top.id}`} href="#" className="btn btn-sm btn-warning"
                                                   style={{borderRadius: "20px"}}>Chi
                                                    tiết</Link>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Popular Product */}

            <footer className="footer-section">
                <div className="container relative">
                    <div className="sofa-img">
                        <img src={sofa} alt="Image" className="img-fluid" style={{paddingTop:"25%"}}/>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="subscription-form">
                                <h3 className="d-flex align-items-center">
            <span className="me-1">
              <img
                  src={enve}
                  alt="Image"
                  className="img-fluid"
              />
            </span>
                                    <span>Đăng ký nhận thông tin ưu đãi</span>
                                </h3>
                                <form action="#" className="row g-3">
                                    <div className="col-auto">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Nhập tên"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Nhập địa chỉ email"
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <button className="btn btn-primary"
                                                style={{width: "120%", height: "80%", marginTop: "25%"}}>
                                            <span className="fa fa-paper-plane"/>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}