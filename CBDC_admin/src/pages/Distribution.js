import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Base from '../components/Layout/Base';

import ContentWrapper from '../components/Layout/ContentWrapper'
import { dbService } from '../fbase';

const tableData = [
    {
        issue_day: '2021-01-15',
        issued_amount: 100000,
        balance: 10000000,
        issue_purpose: '재난지원',
        validity: '2021-12-30',
        account_setting: '소멸형',
        set_rate: 20,
        restriction_use: '소상공인한정',
        issue_number: 'DC2021-002'
    },
    {
        issue_day: '2021-01-15',
        issued_amount: 100000,
        balance: 10000000,
        issue_purpose: '재난지원',
        validity: '2021-12-30',
        account_setting: '소멸형',
        set_rate: 20,
        restriction_use: '소상공인한정',
        issue_number: 'DC2021-002'
    }
];

const Distribution = ({history}) => {

    const [data, setData] = useState([]);
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState(0);
    const [edit, setEdit] = useState(false);

    //DB에서 data값 가져오기
    useEffect(() => {
        getIssueData();
    }, []);

    const getIssueData = async()=>{
        try{
            const issueQuerySnapshot = await dbService
                .collection(`IssueInfo`)
                .orderBy('issue_day','desc')
                .get()
            const dataArray = issueQuerySnapshot.docs.map((doc)=>({
                ...doc.data(),
            }))
            setData(dataArray)
        }catch(error){
            console.log(error)
        }
    }

    const onClickDetail = (issue_number) => {
        console.log(issue_number)
        history.push('/detail')
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

                            <div className="d-flex">
                                <div className="d-flex align-items-center mr-3">
                                    <label className="">발행목적</label>
                                    <div className="mx-2">
                                        <select className="form-control">
                                            <option>전체</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-end">
                            <div>
                                <button type="button" className="btn btn-outline-info waves-effect waves-light">조회</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
                <div>총2건</div>
                <div>(단위: D-KRW)</div>
            </div>
            <table id="datatable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>순서</th>
                        <th>배정일</th>
                        <th>배정금액</th>
                        <th>잔액</th>
                        <th>발행목적</th>
                        <th>유효기간</th>
                        <th>계정설정</th>
                        <th>설정비율</th>
                        <th>사용처제한</th>
                        <th>거래번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i) => (
                            <Item key={i} >
                                <td> {i+1} </td>
                                <td> {el.issue_day} </td>
                                <td> {el.issued_amount} </td>
                                <td> {el.issued_amount} </td>
                                <td> {el.issue_purpose} </td>
                                <td> {el.validity} </td>
                                <td> {el.account_setting} </td>
                                <td> {el.set_rate} </td>
                                <td> {el.restriction_use} </td>
                                <td onClick={()=>onClickDetail(el.issue_number)}> {el.issue_number} </td>
                            </Item>
                        ))
                    }
                </tbody>
            </table>
        </ContentWrapper>
        </Base>
    );
}

export default Distribution;

const Item = styled.tr`
    cursor: pointer;
`