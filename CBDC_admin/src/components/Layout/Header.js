import React, { Component, useState } from 'react'
import styled from 'styled-components';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as settingsAction from '../../store/settings'


const Header = ({bankName,history}) =>{
    const [page,setPage] = useState(true)
    const onClickPage = ()=>{
        if(page){
            history.push('/distribution')
        }else{
            history.push('/home')
        }
        setPage(!page)
        //window.location.reload();
    }
    return (
        <header className="topnavbar-wrapper">
            <div className="w-100">
                <h3 className="mx-5">CDBC</h3>
                <Menus>
                    <div className="left-menu">
                        <MenuItem>Central Bank Digital Currency</MenuItem>
                        <MenuItem>CDBC메인</MenuItem>
                    </div>
                    <div className="right-menu">
                        <MenuItem>{bankName}</MenuItem>
                        <MenuItem>
                            <i onClick={onClickPage} className="fa fa-sign-out"></i>
                        </MenuItem>
                        <MenuItem>
                            <i className="fa fa-gear"></i>
                        </MenuItem>
                    </div>
                </Menus>
            </div>
        </header>
    )
}


const mapStateToProps = state => ({ settings: state.settings });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...settingsAction }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

const Menus = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MenuItem = styled.h5`
    padding: 0 10px;
    cursor: pointer;
`