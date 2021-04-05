import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { history } from './_helpers'

import { HomePage } from './Pages/HomePage'
import { PersonalPage, 
        SaveAccountPage, 
        SaveDealPage,
        CBDCDealCommonPage,
        CBDCDealDisasterExtinctPage,
        CBDCDealDisasterReductionPage,
        CBDCPage,
        TransferPage,
        ExchangePage,
        PaymentPage,
    } from './Pages/PersonalPage'

import { 
        AffiliatePage,
        ACBDCPage,
        ASaveAccountPage,
        ASaveDealPage,
        ACBDCDealPage,
        AExchangePage,
        ATransferPage
    } from './Pages/AffiliatePage'

function App() {

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="col-md-8 offset-md-2">
                    {alert.message &&
                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                    }
                    <Router history={history}>
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route path="/personal/deal/save" component={SaveDealPage} />
                            <Route path="/personal/deal/cbdc/common" component={CBDCDealCommonPage} />
                            <Route path="/personal/deal/cbdc/disaster/Extinct" component={CBDCDealDisasterExtinctPage} />
                            <Route path="/personal/deal/cbdc/disaster/Reduction" component={CBDCDealDisasterReductionPage} />
                            <Route path="/personal/save" component={SaveAccountPage} />
                            <Route path="/personal/cbdc" component={CBDCPage} />
                            <Route path="/personal/exchange" component={ExchangePage} />
                            <Route path="/personal/transfer" component={TransferPage} />
                            <Route path="/personal/payment" component={PaymentPage} />
                            <Route path="/personal" component={PersonalPage} />

                            <Route path="/affiliate/deal/save" component={ASaveDealPage} />
                            <Route path="/affiliate/deal/cbdc" component={ACBDCDealPage} />
                            <Route path="/affiliate/save" component={ASaveAccountPage} />
                            <Route path="/affiliate/cbdc" component={ACBDCPage} />
                            <Route path="/affiliate/exchange" component={AExchangePage} />
                            <Route path="/affiliate/transfer" component={ATransferPage} />
                            <Route path="/affiliate" component={AffiliatePage} />
                            

                            <Redirect from="*" to="/" />
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;