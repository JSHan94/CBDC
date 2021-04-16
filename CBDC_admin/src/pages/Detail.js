//Commercial Bank Tab Two

import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Base from '../components/Layout/Base';

import ContentWrapper from '../components/Layout/ContentWrapper'
import { dbService } from '../fbase';

// const data = [
//     {
//         number: '123436',
//         name: '강하나',
//         account_nm: '111-333-5553',
//         wallet: '0xDndyf9nbhdjskrdnjUh',
//         kind: '교환',
//         location: '하나은행 444-444-4444',
//         price: 10000,
//         date: '2021-01-20 09:30:00'
//     },
//     {
//         number: '123436',
//         name: '강하나',
//         account_nm: '111-333-5553',
//         wallet: '0xDndyf9nbhdjskrdnjUh',
//         kind: '교환',
//         location: '하나은행 444-444-4444',
//         price: 10000,
//         date: '2021-01-20 09:30:00'
//     },
//     {
//         number: '123436',
//         name: '강하나',
//         account_nm: '111-333-5553',
//         wallet: '0xDndyf9nbhdjskrdnjUh',
//         kind: '교환',
//         location: '하나은행 444-444-4444',
//         price: 10000,
//         date: '2021-01-20 09:30:00'
//     },
//     {
//         number: '123436',
//         name: '강하나',
//         account_nm: '111-333-5553',
//         wallet: '0xDndyf9nbhdjskrdnjUh',
//         kind: '교환',
//         location: '하나은행 444-444-4444',
//         price: 10000,
//         date: '2021-01-20 09:30:00'
//     }
// ];

const Detail = ({history}) => {

    const [data, setData] = useState([]);

    //DB에서 data값 가져오기
    useEffect(() => {
        getIssueData();
    }, []);

    const getIssueData = async()=>{
        try{
            const issueQuerySnapshot = await dbService
                .collection(`TxInfo`)
                .orderBy('transaction_date','desc')
                .get()
            const dataArray = issueQuerySnapshot.docs.map((doc)=>({
                ...doc.data(),
            }))
            setData(dataArray)
        }catch(error){
            console.log(error)
        }
    }


    const onClickView = () => {
        //history.push('/distribution');
    }

    

    return (
        <Base bankName={"하나은행"} history={history}>
        
        <ContentWrapper>
            <div className="topbar">
                <nav className="navbar-custom">
                    <ul className="list-inline menu-left mb-0">
                        <li className="list-inline-item">
                            <button type="button" className="button-menu-mobile open-left waves-effect">
                                <i className="ion-navicon"></i>
                            </button>
                        </li>
                        <li className="hide-phone list-inline-item app-search">
                            <h3 className="page-title">CBDC 배정 및 유통관리</h3>
                        </li>
                    </ul>

                    <div className="clearfix"></div>
                </nav>
            </div>

            <div className="card m-b-20">
                <div className="card-block">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <div className="form-group">
                                <label className="mr-2" htmlFor="inlineRadio1">조회은행</label>
                                <label className="mx-2" htmlFor="inlineRadio1">하나은행</label>
                            </div>
                            <div className="form-group">
                                <label className="mr-2">거래일자</label>
                                <div className="form-check-inline">
                                    <input className="form-control" type="date" defaultValue="2011-08-19" id="example-date-input"></input>
                                </div>
                                <span className="mx-3">-</span>
                                <div className="form-check-inline">
                                    <input className="form-control" type="date" defaultValue="2011-08-19" id="example-date-input"></input>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-end">
                            <div>
                                <button type="button" className="btn btn-outline-info waves-effect waves-light" onClick={onClickView}>조회</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
                <div>총 {data.length}건</div>
                <div>(단위: D-KRW)</div>
            </div>
            <table id="datatable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>순서</th>
                        <th>고객번호</th>
                        <th>고객명</th>
                        <th>계좌번호</th>
                        <th>지갑주소</th>
                        <th>거래종류</th>
                        <th>사용처</th>
                        <th>거래금액</th>
                        <th>거래일시</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i) => (
                            <Item key={i}>
                                <td> {i+1} </td>
                                <td> {123456} </td>
                                <td> {el.sender_name} </td>
                                <td> {el.sender_account} </td>
                                <td> {el.sender_wallet} </td>
                                <td> {el.transaction_type} </td>
                                <td> {el.receiver_name} </td>
                                <td> {el.amount} </td>
                                <td> {el.transaction_date} </td>
                            </Item>
                        ))
                    }
                </tbody>
            </table>
        </ContentWrapper>
        </Base>
    );
}

export default Detail;

const Item = styled.tr`
    cursor: pointer;
`