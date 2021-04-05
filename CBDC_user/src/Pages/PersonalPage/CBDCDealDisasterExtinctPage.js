import React, { useState } from "react"
import styled from "styled-components"
import { faChevronLeft, faHome, faChevronDown, faChevronUp, faSearch, faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { history } from '../../_helpers'

const CBDCDealDisasterExtinctPage = () => {
    const [state, setState] = useState(false)
    return (
        <div>
            <Header>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <FontAwesomeIcon 
                        icon={faChevronLeft} 
                        style={{color: "#ffffff", fontSize: 20, marginLeft: 20}}
                        onClick={() => history.push('/personal/CBDC')}
                    />
                    <button 
                        style={{
                            borderRadius: 10, 
                            border: 'none',
                            color: '#009ae8',
                            marginLeft: 10,
                            outline: 'none'
                        }}
                    >
                        큰글씨
                    </button>
                </div>
                <HeaderText 
                    style={{
                        marginRight: 20
                    }}
                >
                    거래내역조회
                </HeaderText>
                <div 
                    style={{
                        display: 'flex', 
                        alignItems: 'center'
                    }}
                >
                    <FontAwesomeIcon 
                        icon={faHome} 
                        style={{
                            color: "#ffffff", 
                            fontSize: 20, 
                            marginRight: 10
                        }}
                    />
                    <Dbutton
                        style={{
                            marginRight: 20
                        }}
                        onClick={() => history.push('/personal/CBDC')}
                    >
                        D
                    </Dbutton>
                </div>
            </Header>
            <Body>
                <Card>
                    <CardBody>
                        <div 
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <img 
                                src={"/images/card-logo.png"} 
                                style={{width: 18, height: 18, marginLeft: 15}}
                                alt="logo"
                            />
                            <CardName>재난지원금 (소멸형)</CardName>
                        </div>
                        
                        <div style={{display: 'flex' }}>
                            <div 
                                style={{
                                    marginLeft: 'auto', 
                                    marginRight: 30, 
                                    marginTop: 30
                                }}
                            >
                                200,000 D-KRW
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <div 
                    style={{
                        display: 'flex'
                    }}
                >

                </div>
                <Tools>
                    <IconButton>
                        <FontAwesomeIcon icon={faSearch} />
                    </IconButton>
                    <SearchText>1개월ㆍ전체ㆍ최신</SearchText>
                    <IconButton>
                        <FontAwesomeIcon icon={faCog} />
                    </IconButton>
                </Tools>
                <List>
                    <ListHeader>
                        <ListDate>2021-02</ListDate>
                        <ListShow
                            onClick={() => setState(!state)}
                        >
                            <FontAwesomeIcon
                                icon={state? faChevronDown : faChevronUp} 
                            />
                        </ListShow>
                    </ListHeader>
                    {!state && <ListBody>
                        <ListItem>
                            <ListItemLeft>
                                <Time>02.01(월) 07:45:19</Time>
                                <Content>하나분식 결제</Content>
                            </ListItemLeft>
                            <ListItemRight style={{textAlign: 'right'}}>
                                - 200,000 <br/>D-KRW
                            </ListItemRight>
                        </ListItem>
                    </ListBody>}
                </List>
            </Body>

        </div>
    )
}

export { CBDCDealDisasterExtinctPage }

const Header = styled.div`
    background-color: #009ae8;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`
const Body = styled.div`
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`
const HeaderText = styled.div`
    color: #ffffff;
`
const Card = styled.div`
    background: #aeaeee;
    display: flex;
    flex-direction: column;
    width: 90vw;
    border-radius: 5px;
    box-shadow: 1px 2px 6px 1px #bfcfea;
    margin: auto;
    margin-top: 20px;
`
const CardBody = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`
const CardName = styled.div`
    margin-left: 20px;
    color: #414141;
    font-size: 20px;
    font-weight: 700;
`
const Tools = styled.div`
    width: 90vw;
    height: 50px;
    display: flex;
    align-items: center;
`
const IconButton = styled.button`
    width: 20px;
    height: 20px;
    font-size: 15px;
    background: none;
    outline: none;
    border: none;
    color: #888888;
`
const SearchText = styled.div`
    color: #888888;
    font-size: 15px;
    margin-left: auto;
`
const List = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #efefef;
`
const ListHeader = styled.div`
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
`
const ListDate = styled.div`
    font-size: 16px;
    font-weight: 500;
    margin-left: 20px;
`
const ListShow = styled.button`
    background: none;
    border: none;
    outline: none;
    color: #aaaaaa;
    font-size: 13px;
    margin-right: 15px;
`
const ListBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ListItem = styled.div`
    display: flex;
    width: 90vw;
    padding-top: 20px;
    padding-bottom: 20px;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
`
const ListItemLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Time = styled.div`
    color: #aaaaaa;
    font-size: 13px;
`
const Content = styled.div`
    margin-top: 10px;
    color: #212121;
    font-size: 15px;
`
const ListItemRight = styled.div`
    color: #8888aa;
`
const Dbutton = styled.button`
    color: #ffffff;
    border: 1px solid #000000;
    background-color: #888888;
    font-size: 15px;
    width: 25px;
    height: 25px;
    border-radius: 12.5px;
    text-align: center;
`