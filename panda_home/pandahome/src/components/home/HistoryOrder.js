import {FormattedNumber} from "react-intl";
import React, {useEffect, useState} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {Button, Modal} from "react-bootstrap";
import moment from "moment";
import * as orderService from "../../service/OrderService"


export function HistoryOrder() {
    const [historyList, setHistory] = useState([])
    const [historyDetail, setHistoryDetail] = useState([])
    const [showModal, setShowModal] = useState(false);
    const token = localStorage.getItem("token");
    const nav = useNavigate()
    const getAllHistory = async () => {
        try {
            const res = await orderService.getAllByIdCustomer();
            setHistory(res)
        }catch (e) {
            nav("/error")
        }

    }
    const handleModalClose = () => {
        setShowModal(false);
    };
    const handleModalOpen = async (id) => {
        // const order = await orderService.getOrderById()
        const res = await orderService.getAllByIdOrder(id)
        setHistoryDetail(res)
        console.log("detail: ")
        console.log(historyDetail)
        setShowModal(true);
    };
    useEffect(() => {
        getAllHistory()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    if (!historyDetail) {
        return null;
    }
    if (!historyList) {
        nav("/error");
    }
    return (
        <>
            {token == null ? nav("/error") :
                <>
                    <div className="container" style={{marginTop: "6%"}}>
                        <div className="mt-4 mb-3 d-flex">
                            <NavLink to={"/home"} id="tc" className="mt-3 fw-bolder fs-6">
                                Trang chủ
                            </NavLink>
                            <a href={"/history"} className="mt-3 text-black fs-6">&nbsp; / Lịch sử mua hàng</a>
                        </div>
                        <div className="intro-excerpt ">
                            <h2 className="text-black mb-3 text-uppercase fw-bolder fs-5">Lịch sử mua hàng</h2>
                            <h2 className="text-black border-bottom1 mb-3"/>
                        </div>
                        <div className="table-responsive mt-4"
                             style={{width: '100%', border: "1px solid black ", borderRadius: "5px"}}>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th className="text-center" style={{paddingLeft: "1%", width:"4%"}}>STT</th>
                                    <th style={{width: "10%"}}>Mã đơn hàng</th>
                                    <th style={{width: "14%"}}>Tên người nhận hàng</th>
                                    <th style={{width: "10%"}}>Số điện thoại</th>
                                    <th style={{width: "11%"}}>Ngày mua hàng</th>
                                    <th style={{width: "19%"}}>Địa chỉ nhận hàng</th>
                                    <th style={{width: "10%"}}>Tổng tiền</th>
                                    <th style={{width: "13%"}}>Trạng thái</th>
                                    <th style={{width: "5%"}}>&nbsp;</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="table">
                            <div className="outer-wapper">
                                <div className="table-wapper">
                                    <div className="table-responsive"
                                         style={{width: '100%', border: "1px solid black ", borderRadius: "5px"}}>
                                        <table className="table table-striped">
                                            <thead hidden>
                                            <tr>
                                                <th className="text-center">STT</th>
                                                <th>Mã đơn hàng</th>
                                                <th>Tên người nhận hàng</th>
                                                <th>Số điện thoại</th>
                                                <th>Ngày mua hàng</th>
                                                <th>Địa chỉ nhận hàng</th>
                                                <th>Tổng tiền</th>
                                                <th>Trạng thái</th>
                                                <th>&nbsp;</th>
                                            </tr>
                                            </thead>
                                            {historyList.length < 1 ?
                                                <tr>
                                                    <td colSpan={4} className="text-center">
                                                        <h4 className="text-danger mt-4">Bạn chưa có đơn hàng nào</h4>
                                                    </td>
                                                </tr>
                                                :
                                                <tbody>
                                                {historyList.map((list, index) => (
                                                    <tr key={index}>
                                                        <td className="text-center" style={{width:"3.5%"}}>{index + 1}</td>
                                                        <td style={{width:"10%"}}>{list?.orderCode}</td>
                                                        <td style={{width:"14%"}}>{list?.consigneeName == null ? list?.customer?.name : list?.consigneeName}</td>
                                                        <td style={{width:"10%"}}>{list?.phoneNumber == null ? list?.customer?.phoneNumber : list?.phoneNumber}</td>
                                                        <td style={{width:"9%"}}>{list?.createDate === null ? "" :
                                                            moment(list?.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')
                                                        }
                                                        </td>
                                                        <td style={{width:"19%"}}>{list?.deliveryAddress}</td>
                                                        <td style={{width:"10%"}}>
                                                            {/*<FormattedNumber*/}
                                                            {/*    value={list.totalPrice}>*/}
                                                            {/*    thousandSeparator={true} currency="VND"*/}
                                                            {/*    minimumFractionDigits={0}*/}
                                                            {/*</FormattedNumber> đ*/}
                                                            {new Intl.NumberFormat('vi-VN',
                                                                {style: 'currency', currency: 'VND'})
                                                                .format(list?.totalPrice)}
                                                        </td>
                                                        {
                                                            list?.status === 0 ?
                                                                <td style={{width:"13%"}} className="text-uppercase fw-bold">Đang giao
                                                                    hàng</td> :
                                                                <td style={{width:"13%"}} className="text-uppercase">Đã nhận hàng</td>
                                                        }

                                                        <td  style={{width:"3%"}}>
                                                            <i style={{color: "orange", cursor: "pointer"}}
                                                               className="text-black fa-solid fa-circle-info"
                                                               data-bs-target="#static"
                                                               onClick={() => (handleModalOpen(list.id))}
                                                            />
                                                        </td>

                                                    </tr>
                                                ))}
                                                </tbody>
                                            }
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="text-center mt-4 btn-group p-3 m-l-2">
                            <div className="text-center m-auto">
                                <Modal
                                    className="modal-xl"
                                    show={showModal}
                                    onHide={handleModalClose}
                                    keyboard={false}
                                    centered
                                >

                                    <Modal.Body>
                                        <div className="d-flex justify-content-between">
                                            <h2>Chi tiết đơn hàng</h2>
                                            <a onClick={() => handleModalClose()}>
                                                <span className="btn btn-warning fw-bold">X
                                                </span>
                                            </a>
                                        </div>
                                        <table className="table table-striped">
                                            <thead>
                                            <tr style={{textAlign: "start"}}>
                                                <th style={{width: "5%"}} className="">STT</th>
                                                <th style={{width: "15%"}} className=""></th>
                                                <th style={{width: "35%"}} className="">Tên sản phẩm</th>
                                                <th style={{width: "13%"}} className="">Giá tiền</th>
                                                <th className="text-center" style={{width: "15%"}}>Số
                                                    lượng
                                                </th>
                                                <th style={{width: "18%"}} className="">Ngày Mua</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            </tbody>
                                        </table>
                                        <div className="table">
                                            <div className="outer-wapper">
                                                <div className="table-wapper">
                                                    <table className="table table-striped">
                                                        <thead hidden>
                                                        <tr style={{textAlign: "start"}}>
                                                            <th className="">STT</th>
                                                            <th className=""></th>
                                                            <th className="">Tên sản phẩm</th>
                                                            <th className="">Giá tiền</th>
                                                            <th className="text-center" style={{width: "15%"}}>Số
                                                                lượng
                                                            </th>
                                                            <th className="">Ngày Mua</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody style={{verticalAlign: "middle"}}>
                                                        {historyDetail.map((list, index) => (
                                                            <tr key={index}>
                                                                <td style={{width: "5%"}}
                                                                    className="text-center">{index + 1}</td>
                                                                <td style={{width: "15%"}}>
                                                                    <Link to={`/detail/${list.productId.id}`}>
                                                                        <img className="pic"
                                                                             src={list.productId?.image}
                                                                             width={100}
                                                                             height={80}
                                                                             alt=""/>
                                                                    </Link>
                                                                </td>
                                                                <td style={{width: "35%"}}>
                                                                    <Link to={`/detail/${list.productId.id}`}>
                                                                        {list?.productId?.name}
                                                                    </Link>
                                                                </td>
                                                                <td style={{width: "15%"}}>
                                                                    {new Intl.NumberFormat('vi-VN',
                                                                        {style: 'currency', currency: 'VND'})
                                                                        .format(list.price)}
                                                                    {/*<FormattedNumber*/}
                                                                    {/*    value={list?.orders?.totalPrice}>*/}
                                                                    {/*    thousandSeparator={true} currency="VND"*/}
                                                                    {/*    minimumFractionDigits={0}*/}
                                                                    {/*</FormattedNumber> đ*/}

                                                                </td>
                                                                <td style={{width: "15%"}}
                                                                    className="text-center">{list?.quantity}</td>
                                                                <td style={{width: "18%"}}>{list?.createDate === null ? "" :
                                                                    moment(list?.createDate, 'YYYY/MM/DD').format('DD/MM/YYYY')}
                                                                </td>
                                                            </tr>
                                                        ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                </>
            }
        </>
    )
}