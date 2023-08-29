import logo from "../../images/pandahome3-2.png";

export function Footer() {
    return (
        <>
            {/* Start Footer Section */}
            <footer className="footer-section">
                <div className="container relative">
                    <div className="row g-5 mb-5">
                        <div className="col-lg-4">
                            <div className="mb-4 footer-logo-wrap">
                                <a href="#" className="footer-logo">
                                    <img src={logo} alt="#" width="100px" style={{borderRadius:"10px"}}/>
                                </a>
                            </div>
                            <p className="mb-4" style={{color: "#ffffffa6"}}>
                                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                                habitant
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
                            <img style={{ width: '300px', marginBottom: '20px' }} src="https://lh5.googleusercontent.com/uTXS6njyzcaMFqdidF7rRUJHGGua1PUQ2AICQxawjLs5fpJTAPjSaVF36C0cjhAJxOMqI1Tn8YMMgUt3mPmHrW9Sqb7pMok6d7DnUPMT0kXubvbQHMENGgKZqN8n7UkghqENdtjs" />
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
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Trang chủ
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Blog
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Contact us
                                            </a>
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
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Đăng nhập
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Đăng ký
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Giỏ hàng
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                <h5>Giới thiệu</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Jobs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Our team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Leadership
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-sm-6 col-md-3">
                                    <ul className="list-unstyled">

                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                <h5>Chính sách</h5>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Chính sách bảo mật
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Chính sách vận chuyển
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Chính sách bảo hành
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Chính sách đổi trả
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" style={{color: "#dee2e6"}}>
                                                Chính sách thanh toán
                                            </a>
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