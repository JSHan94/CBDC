import React, { useState } from "react"
import styled from "styled-components"
import { faChevronLeft, faTimes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { history } from '../../_helpers';

const ExchangePage = () => {
    const [state, setState] = useState(true)
    return (
        <div>
            <Header>
                <FontAwesomeIcon 
                    icon={faChevronLeft} 
                    style={{color: "#000", fontSize: '4vw', marginLeft: '5vw'}}
                    onClick={() => history.push('/personal/CBDC')}
                />
                <HeaderText>교환하기</HeaderText>
                <div>
                    <FontAwesomeIcon icon={faTimes} style={{color: "#000", fontSize: '4vw', marginRight: '5vw'}}/>
                </div>
            </Header>
            <Body>
                <CardChild>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <div style={{marginTop: '2vw', color: '#00b2a7', fontSize:'3.73vw'}}>교환할 금액을 입력하세요.</div>
                        <div style={{marginTop: '6vw', display: 'flex', alignItems: 'center', position: 'relative'}}>
                            <div style={{fontSize: '4vw'}}>1,000,000 원</div>
                            <FontAwesomeIcon icon={faExchangeAlt} style={{color: "#00b2a7", fontSize: '4vw', margin: '0 4vw'}}/>
                            <div style={{fontSize: '4vw'}}>1,000,000 D-KRW</div>
                        </div>
                    </div>
                </CardChild>

                <div style={{marginTop: "6.76vh", display: 'flex', alignItems: 'center', borderBottom: '1px solid #000', width: '90vw', height: 40}}>
                    <div style={{color: '#000', fontSize: '3.5vw'}}>출금지갑주소</div>
                    <select className="select"
                        style={{
                            width: 170, 
                            height: 40,
                            fontSize: '3.5vw', 
                            textAlign: "right", 
                            border: 'none', 
                            outline: 'none',
                            marginLeft: 'auto',
                            marginRight: 0
                        }}>
                        <option>111-11111-11111</option>
                        <option>222-22222-22222</option>
                    </select>
                </div>
                <div style={{marginTop: '1.5vh', display: 'flex', alignItems: 'center', width: '90vw', height: 30}}>
                    <div style={{color: '#414141', 
                                fontSize: '2.5vw', 
                                color: '#8d8e8e',
                                padding: 8,
                                marginLeft: 'auto', 
                                border: '1px solid #8d8e8e', 
                                borderRadius: 10}}>adDE$FGG5f#%TG]F</div>
                </div>
                <div style={{marginTop: '4vh', borderBottom: '1px solid #000', display: 'flex', alignItems: 'center', width: '90vw', height: 40}}>
                    <div style={{color: '#000', fontSize: '3.5vw'}}>잔액</div>
                    <div style={{color: '#000', marginLeft: 'auto', fontSize: '3.5vw'}}>500,000 {state ? "D-KRW" : "원"}</div>
                </div>
                <div style={{marginTop: "6.76vh", display: 'flex', alignItems: 'center', borderBottom: '1px solid #888888', width: '90vw', height: 40}}>
                    <div style={{color: '#000', fontSize: '3.5vw'}}>입금계좌번호</div>
                    <select className="select"
                        style={{
                            width: 170, 
                            height: 40,
                            fontSize: '3.5vw', 
                            textAlign: "right", 
                            border: 'none', 
                            outline: 'none',
                            marginLeft: 'auto',
                            marginRight: 0
                        }}>
                        <option>123-12345-12345</option>
                        <option>234-56789-54321</option>
                    </select>
                </div>
                <div style={{marginTop: '4vh', borderBottom: '1px solid #000', display: 'flex', alignItems: 'center', width: '90vw', height: 40}}>
                    <div style={{color: '#000', fontSize: '3.5vw'}}>잔액</div>
                    <div style={{color: '#000', marginLeft: 'auto', fontSize: '3.5vw'}}>500,000 {state ? "D-KRW" : "원"}</div>
                </div>
            </Body>
            <div style={{position: 'fixed', bottom: '8.45vh', left: 0, width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTop: '1.35vh solid #eae9e9'}}>
                <Amount>
                    <div style={{fontSize: '3.8vw'}}>금액입력</div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <PriceInput defaultValue="200,000" />
                        <div style={{fontSize: '3.8vw', marginLeft: 10}}>D-KRW</div>
                    </div>
                </Amount>
            </div>
            <ExRunButton>
                교환하기
            </ExRunButton>
        </div>
    )
}

export { ExchangePage }

const Header = styled.div`
    background-color: #fff;
    height: 6.76vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    font-size: 4vw;
    font-weight: 600;
`
const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const HeaderText = styled.div`
    color: #000;
`
const CardChild = styled.div`
    width: 90vw;
    height: 14.31vh;
    padding-top: 3.5vh;
    padding-bottom: 3vh;
    border-top: 1px solid #dcdcdc;
    box-shadow: 1px 2px 6px 1px #bfcfea;
    border-radius: 4vw;
    margin-top: 4vw;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Amount = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    margin: 2vw 0;
`
const PriceInput = styled.input`
    border: 1px solid #cfcccc;
    border-radius: 5px;
    text-align: right;
    width: 50.9vw;
    height: 7.5vh;
    font-size: 4vw;
    padding-right: 20px;
`
const ExRunButton = styled.button`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 8.45vh;
    background-color: #00b2a7;
    border: none;
    font-size: 4.5vw;
    color: #ffffff;
`