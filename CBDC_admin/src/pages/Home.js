import React, {useState, useEffect} from 'react'
import { dbService } from '../fbase';
import Base from '../components/Layout/Base';

import ContentWrapper from '../components/Layout/ContentWrapper'

// const tableData = [
//     {
//         issue_day: '2021-01-05',
//         issued_amount: 100000,
//         issue_purpose: '재난지원',
//         validity: '2021-12-30',
//         account_setting: '소멸형',
//         set_rate: '20',
//         restriction_use: '소상공인한정',
//         processing_status: '발행완료',
//         allotment_bank: '하나은행'
//     }
// ];

const Home = ({history}) => {
    //console.log(history)
    const [data, setData] = useState([]);
    const [state, setState] = useState([]);
    const [selected, setSelected] = useState(0);
    const [edit, setEdit] = useState(false);
    
    //DB에서 data값 가져오기
    useEffect(() => {
        getIssueData();
    }, [state]);

    const getIssueData = async()=>{
        try{
            const issueQuerySnapshot = await dbService
                .collection(`IssueInfo`)
                .orderBy('issue_day','desc')
                .get()
            const dataArray = issueQuerySnapshot.docs.map((doc)=>({
                ...doc.data()
            }))
            setData(dataArray)
        }catch(error){
            console.log(error)
        }
    }
    const handleChange = (event) => {
        console.log(event.target.name, event.target.value)
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    //발행 값 state에 저장완료
    const onClickIssue = async() => {
        var randomNum = (Math.floor(Math.random()*(10000-1)) + 1)+'';
        while(randomNum.length < 5){
            randomNum = '0'+randomNum
        }
        await dbService
            .collection(`IssueInfo`)
            .add({
                ...state,
                ["issue_number"]: "DC2021-"+randomNum

            })
        window.location.reload();
    }

    const onClickIssuePopup = () => {
        setEdit(false);
    }

    const onClickEditPopup = () => {
        setEdit(true);
    }

    //수정 값 state에 저장 완료
    const onClickEdit = async() => {
        
        let _temp = data.filter((el, i) => i == selected);
        try{
            const deleteSnapshot = await dbService
            .collection(`IssueInfo`)
            .where('issue_number','==',_temp[0].issue_number)
            .get()
            console.log(state)
            await dbService.collection(`IssueInfo`).doc(deleteSnapshot.docs[0].id).update(
                {...state})
            window.location.reload();
        }catch(error){
            console.log(error)
        }
        // let _temp = data.map((item, i) => {
        //     if(i == selected) return state;
        //     else return item;
        // });
        // setData(_temp);
    }

    const onChangeItem = (event) => {
        const _temp = data[event.target.value];
        setState(_temp);
        setSelected(event.target.value);
    }

    const onDelete = async() => {
        let _temp = data.filter((el, i) => i == selected);
        try{

            const deleteSnapshot = await dbService
            .collection(`IssueInfo`)
            .where('issue_number','==',_temp[0].issue_number)
            .get()

            await dbService.collection(`IssueInfo`).doc(deleteSnapshot.docs[0].id).delete()
            window.location.reload();
        }catch(error){
            console.log(error)
        }
    }

    const onClickAssign = async() => {
        let _temp = data.filter((el, i) => i == selected);
        try{
            const deleteSnapshot = await dbService
            .collection(`IssueInfo`)
            .where('issue_number','==',_temp[0].issue_number)
            .get()
            console.log(state)
            await dbService.collection(`IssueInfo`).doc(deleteSnapshot.docs[0].id).update(
                {processing_status : "배정완료"})
            window.location.reload();
        }catch(error){
            console.log(error)
        }
        //history.push('/distribution');
    }

    return (
        <Base bankName={"한국은행"} history={history}>
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
                            <h3 className="page-title">CBDC 발행 및 배정 관리</h3>
                        </li>
                    </ul>

                    <div className="clearfix"></div>
                </nav>
            </div>
            <div className="card m-b-20">
                <div className="card-block">
                    <div className="d-flex justify-content-between">
                        <div className="">
                            <div className="form-check form-check-inline">
                                <input className="" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                <label className="mx-2" htmlFor="inlineRadio1">요청일자</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                <label className="mx-2" htmlFor="inlineRadio2">발행일자</label>
                            </div>
                            <div className="form-group form-check-inline">
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
                                    <label className="">배정은행</label>
                                    <div className="mx-2">
                                        <select className="form-control">
                                            <option>하나은행</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mr-3">
                                    <label className="">발행목적</label>
                                    <div className="mx-2">
                                        <select className="form-control">
                                            <option>전체</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label className="">처리상태</label>
                                    <div className="mx-2">
                                        <select className="form-control">
                                            <option>전체</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-flex flex-column justify-content-between">
                            <div>
                                <button type="button" className="btn btn-outline-info waves-effect waves-light" 
                                        data-toggle="modal" 
                                        data-target=".bs-example-modal-lg" 
                                        onClick={onClickIssuePopup}
                                >발행</button>
                            </div>
                            <div>
                                <button type="button" className="btn btn-outline-info waves-effect waves-light">조회</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-between mb-2">
                <div>총{data.length}건</div>
                <div>(단위: D-KRW)</div>
            </div>
            <table id="datatable" className="table table-bordered">
                <thead>
                    <tr>
                        <th>선택</th>
                        <th>발행일</th>
                        <th>발행금액</th>
                        <th>발행목적</th>
                        <th>유효기간</th>
                        <th>계정설정</th>
                        <th>설정비율</th>
                        <th>사용처제한</th>
                        <th>처리상태</th>
                        <th>배정은행</th>
                        <th>발행번호</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i) => (
                            <tr key={i}>
                                <td>
                                    <input type="radio" name="checkbox" defaultChecked={i==0 ? true : false} value={i} onChange={onChangeItem} />
                                </td>
                                <td> {el.issue_day} </td>
                                <td> ${el.issued_amount} </td>
                                <td> {el.issue_purpose} </td>
                                <td> {el.validity} </td>
                                <td> {el.account_setting} </td>
                                <td> {el.set_rate} </td>
                                <td> {el.restriction_use} </td>
                                <td> {el.processing_status} </td>
                                <td> {el.allotment_bank} </td>
                                <td> {el.issue_number} </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <div>
                    <button type="button" className="btn btn-outline-info waves-effect mr-2" onClick={onClickAssign}>배정</button>
                    <button type="button" className="btn btn-outline-info waves-effect mr-2"
                        data-toggle="modal" 
                        data-target=".bs-example-modal-lg" 
                        onClick={onClickEditPopup}
                    >수정</button>
                    <button type="button" className="btn btn-outline-info waves-effect" onClick={onDelete}>삭제</button>
                </div>
            </div>
            <div className="d-flex justify-content-end">
                <div className="mt-3">
                    ※ 배정완료 후에는 수정, 삭제 불가능합니다.
                </div>
            </div>
            
            
            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header border-0">
                            <h5 className="modal-title mt-0" id="myLargeModalLabel"></h5>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                        </div>
                        <div className="modal-body">
                            <div className="row mr-3">
                                <div className="col-4 d-flex align-items-center">
                                    <label className="">배정은행</label>
                                    <div className="mx-2">
                                        <select className="form-control" name="allotment_bank" value={state.allotment_bank} onChange={handleChange}>
                                            <option value="하나은행">하나은행</option>
                                            <option value="포스텍은행">포스텍은행</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <label className="">발행목적</label>
                                    <div className="mx-2">
                                        <select className="form-control" name="issue_purpose" value={state.issue_purpose} onChange={handleChange}>
                                            <option value="재난지원">재난지원</option>
                                            <option value="일반자금">일반자금</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <label style={{whiteSpace: 'nowrap'}}>발행일자</label>
                                    <div className="mx-2">
                                        <input className="form-control" 
                                            type="date" 
                                            name="issue_day"
                                            value={state.issue_day} 
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row mr-3">
                                <div className="col-4 d-flex align-items-center">
                                    <label className="">설정비율</label>
                                    <div className="mx-2">
                                        <select className="form-control" style={{width: 110}} name="set_rate" value={state.set_rate} onChange={handleChange}>
                                            <option value="0">0.0 %</option>
                                            <option value="20">20.0 %</option>
                                            <option value="40">40.0 %</option>
                                            <option value="60">60.0 %</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <label className="">발행금액</label>
                                    <div className="mx-2">
                                        <input type="text" 
                                            style={{width: 110}} 
                                            className="form-control" 
                                            name="issued_amount"
                                            value={state.issued_amount} 
                                            onChange={handleChange} />
                                    </div>
                                    <label className="">D-KRW</label>
                                </div>
                                <div className="col-3 d-flex align-items-center">
                                    <label style={{whiteSpace: 'nowrap'}}>유효기간</label>
                                    <div className="mx-2">
                                        <input className="form-control" 
                                            type="date" 
                                            id="example-date-input"
                                            name="validity"
                                            value={state.validity} 
                                            onChange={handleChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row mr-3">
                                <div className="col-4 d-flex align-items-center">
                                    <label className="">계정설정</label>
                                    <div className="mx-2">
                                        <select className="form-control" style={{width: 110}} name="account_setting" value={state.account_setting} onChange={handleChange}>
                                            <option value="소멸형">소멸형</option>
                                            <option value="감소형">감소형</option>
                                            <option value="일반형">일반형</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-6 d-flex align-items-center">
                                    <label className="">사용처&nbsp;&nbsp;&nbsp;<br/>제한</label>
                                    <div className="mx-2">
                                        <select className="form-control" name="restriction_use" value={state.restriction_use} onChange={handleChange}>
                                            <option value="소상공인한정">소상공인한정</option>
                                            <option value="제한없음">제한없음</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer border-0">
                            {
                                edit && <button className="btn btn-outline-info waves-effect mr-2" 
                                            data-dismiss="modal" aria-hidden="true"
                                            onClick={onClickEdit} >확인</button>
                            }
                            {
                                !edit && <button className="btn btn-outline-info waves-effect mr-2" 
                                            data-dismiss="modal" aria-hidden="true"
                                            onClick={onClickIssue} >발행</button>
                            }
                            <button className="btn btn-outline-info waves-effect mr-2" 
                                    data-dismiss="modal" aria-hidden="true">취소</button>
                        </div>
                    </div>
                </div>
            </div>
        </ContentWrapper>
        </Base>
    );
}

export default Home;
