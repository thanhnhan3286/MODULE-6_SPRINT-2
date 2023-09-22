import * as customerService from "../../service/UserService"
import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";


export function DetailCustomer() {
    const nav = useNavigate();
    const [info, setInfo] = useState([]);
    const token = localStorage.getItem("token");
    const viewInfoCustomer = async () => {
        try {
            const res = await customerService.getUser();
            setInfo(res);
        } catch (e) {
            console.log(e);
            nav("/error");
        }
    }
    const formatDate = (date) => {
        var dateObject = new Date(date);
        var day = dateObject.getDate();
        var month = dateObject.getMonth() + 1; // Tháng trong JavaScript được đánh số từ 0 đến 11
        var year = dateObject.getFullYear();
        // Định dạng lại ngày, tháng, năm
        return (month < 10 ? '0' + month : month) + '/' + (day < 10 ? '0' + day : day) + '/' + year;
    }
    useEffect(() => {
        viewInfoCustomer()
        window.scrollTo(0, 0)
    }, [])
    if (!info) {
        nav("/error")
    }
    return (
        <>
            {token == null ? nav("/error") :
                <div className="popular-product" style={{paddingLeft: "10%", paddingRight: "10%", marginTop: "6%"}}>
                    <div className="container">
                        <div className="mt-5 mb-3 d-flex">
                            <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                                Trang chủ
                            </NavLink>
                            <a href={"/info"} className="mt-3 text-black fs-6">&nbsp; / Thông tin cá nhân</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Thông tin cá nhân</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="row d-flex justify-content-center">
                            {/*<h1 className="text-center text-black fw-bold mt-5 mb-5">THÔNG TIN CÁ NHÂN</h1>*/}
                            <div className="col-md-6 mt-3 mb-5">
                                <div className="card p-2" style={{borderRadius: "10px"}}>
                                    <div className="row">
                                        <div className="col-md-7 border-right no-gutters">
                                            <div className="py-3">
                                                <div className="text-center">
                                                    <img
                                                        src={info.gender === "Nam" ? "https://st.quantrimang.com/photos/image/2017/04/08/anh-dai-dien-FB-200.jpg"
                                                            : "https://datosprotegidos.org/wp-content/uploads/2015/05/21528471-Mujer-avatar-foto-de-perfil-vector-Foto-de-archivo.jpg"}
                                                        width={120}
                                                        className="rounded-circle"
                                                    />
                                                    <h4 className="text-black">{info.name}</h4>
                                                </div>
                                                <div className="stats" style={{
                                                    paddingLeft: "10%"
                                                }}>
                                                    <table className="table table-borderless">
                                                        <tbody>
                                                        <tr>
                                                            <td>
                                                                <div className="d-flex flex-column">
                                                                <span className="text-left head"
                                                                      style={{fontSize: "1em"}}>Ngày sinh:</span>{" "}
                                                                    <span className="text-black bottom"
                                                                          style={{fontSize: "1em"}}>{formatDate(info.birthday)}</span>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="d-flex flex-column">
                                                                <span className="text-left head"
                                                                      style={{fontSize: "1em"}}>Giới tính:</span>{" "}
                                                                    <span className="text-black bottom"
                                                                          style={{fontSize: "1em"}}>{info.gender}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="py-3 fw-bold">
                                                <div>
                                                    <span className="d-block head text-black" style={{fontSize: "1em"}}>Địa chỉ:</span>{" "}
                                                    <span className="bottom text-black"
                                                          style={{fontSize: "1em"}}>{info.address}</span>
                                                </div>
                                                <div className="mt-4">
                                            <span className="d-block head text-black"
                                                  style={{fontSize: "1em"}}>Số điện thoại:</span>{" "}
                                                    <span className="bottom text-black"
                                                          style={{fontSize: "1em"}}>{info.phoneNumber}</span>
                                                </div>

                                                <div className="mt-4">
                                                <span className="d-block head text-black"
                                                      style={{fontSize: "1em"}}>Email:</span>{" "}
                                                    <span className="bottom text-black"
                                                          style={{fontSize: "1em"}}>{info.email}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}