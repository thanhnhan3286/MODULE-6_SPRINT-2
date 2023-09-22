import logo from "../../images/pandahome3-2.png";
import {Link, NavLink} from "react-router-dom";

export function Footer() {
    return (
        <>
            {/* Start Footer Section */}
            <footer className="footer-section" style={{
                backgroundImage: "url('https://www.noithatanhbinh.com.vn/Thumb.ashx?s=1920&file=/UploadImages/bg_footer.jpg')"
            }}>
                <div className="container relative">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap">
                                <NavLink to={"/home"} href="#" className="footer-logo">
                                    <img src={logo} alt="#" width="100px" style={{borderRadius: "10px"}}/>
                                </NavLink>
                            </div>
                            <p className="mb-4" style={{color: "#ffffffa6"}}>
                                Địa chỉ: Tổng công ty nội thất Panda Home. Số 280 Trần Hưng Đạo, Sơn Trà, Đà Nẵng <br/>
                                Điện thoại: (+84) 0935 195 966. <br/>
                                Email: pandahome@gmail.com
                                <br/> Fax: (+84) 900 0001
                            </p>
                            <ul className="list-unstyled custom-social">
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-facebook-f"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-twitter"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-instagram"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="fa fa-brands fa-linkedin"/>
                                    </a>
                                </li>
                            </ul>
                            <img style={{width: '300px', marginBottom: '20px'}}
                                 src="https://lh5.googleusercontent.com/uTXS6njyzcaMFqdidF7rRUJHGGua1PUQ2AICQxawjLs5fpJTAPjSaVF36C0cjhAJxOMqI1Tn8YMMgUt3mPmHrW9Sqb7pMok6d7DnUPMT0kXubvbQHMENGgKZqN8n7UkghqENdtjs"/>
                        </div>
                        <div className="col-lg-8">
                            <div className="row links-wrap">
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                <h5>Giới thiệu</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to={"/home"} href="#" style={{color: "#dee2e6"}}>
                                                Trang chủ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list"} href="#" style={{color: "#dee2e6"}}>
                                                Sản phẩm
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/policy"} style={{color: "#dee2e6"}}>
                                                Chính sách
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/contact"} style={{color: "#dee2e6"}}>
                                                Liên hệ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                <h5>Hỗ trợ</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Tìm kiếm
                                            </a>
                                        </li>
                                        <li>
                                            <Link to={"/login"} href="#" style={{color: "#dee2e6"}}>
                                                Đăng nhập
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/signup"} href="#" style={{color: "#dee2e6"}}>
                                                Đăng ký
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/cart"} href="#" style={{color: "#dee2e6"}}>
                                                Giỏ hàng
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <Link to={"/list"} style={{color: "#dee2e6"}}>
                                                <h5>Sản phẩm</h5>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/khach"} href="#" style={{color: "#dee2e6"}}>
                                                Nội thất phòng khách
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/bep"} style={{color: "#dee2e6"}}>
                                                Nội thất phòng bếp
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/ngu"} style={{color: "#dee2e6"}}>
                                                Nội thất phòng ngủ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/van"} style={{color: "#dee2e6"}}>
                                                Nội thất văn phòng
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/list/nghe"} style={{color: "#dee2e6"}}>
                                                Đồ gỗ mỹ nghệ
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">

                                        <li>
                                            <Link to={"/policy"} href="#" style={{color: "#dee2e6"}}>
                                                <h5>Chính sách</h5>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/policy/transport"} href="#" style={{color: "#dee2e6"}}>
                                                Vận chuyển
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/policy/warranty-repair"} style={{color: "#dee2e6"}}>
                                                Bảo hành - Sửa chữa
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/policy/return"} style={{color: "#dee2e6"}}>
                                                Đổi trả
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to={"/policy/payment"} style={{color: "#dee2e6"}}>
                                                Thanh toán
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* End Footer Section */}
        </>
    )
}