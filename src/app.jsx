import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Payments from './pages/payment';
import MainRoutes from './routes';
import { 
    signIn, 
    checkAuth, 
    getAllMenu, 
    addNewMenu, 
    toggleNav, 
    addOrdersMenu, 
    editOrders, 
    addCustomer, 
    removeMenus, 
    editCustomer, 
    getCustomers, 
    updateCustomers, 
    getAllPesanan, 
    pesanMakanan,
    editMenus,
    sendEditMenu
} from './redux/actions';
import AdminPage from './pages/admin';
import MenuOrders from './pages/menu';
import RegisterCustomer from './components/register.customer';

class App extends Component {
    constructor(props) {
      super(props)
    };

    componentDidMount() {
        this.props.onCheckAuth()
    }

    render() {
        return (
            <Fragment>
                {
                    this.props.auth ?
                    this.props.admin ?
                            <div className="d-md-flex h-md-100">
                                <div className="p-0 col-md-8 bg-indigo h-md-100">
                                    <div className="content-body container">
                                    <div className="text-center">Menu Makanan</div>
                                        <MenuOrders {...this.props} />
                                    </div>
                                </div>
                                <div className="col-md-3 bg-dark fixed-right">
                                    <div className="text-light">
                                        <AdminPage {...this.props} />
                                    </div>
                                </div>
                            </div>
                    :
                    <div className="d-md-flex h-md-100">
                        <div className="p-0 col-md-9 bg-indigo h-md-100">
                            <div className={`container${!this.props.nav ? ' content-body-nav' : ' content-body'}`}>
                            <MainRoutes {...this.props} />
                            </div>
                        </div>
                        <div className="col-md-3 bg-dark fixed-right right-section">
                            <div className="text-light">
                                {
                                    this.props.editOrders ?
                                    <Payments {...this.props} />
                                    :
                                    <RegisterCustomer {...this.props}/>
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <MainRoutes {...this.props} />
                }
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state.userReducers,
        ...state.menuReducers,
        ...state.customersReducers,
        ...state.pesananReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (payload) => {
            return dispatch(signIn(payload))
        },
        onCheckAuth: () => {
            return dispatch(checkAuth())
        },
        onGetMenu: () => {
            return dispatch(getAllMenu())
        },
        onAddMenus: payload => {
            return dispatch(addNewMenu(payload))
        },
        onToggleNav: (payload) => {
            return dispatch(toggleNav(payload))
        },
        onAddOrders: (payload) => {
            return dispatch(addCustomer(payload))
        },
        onEditOrders: payload => {
            return dispatch(editOrders(payload))
        },
        onAddMenu: payload => {
            return dispatch(addOrdersMenu(payload))
        },
        onRemoveOrders: payload => {
            return dispatch(removeMenus(payload))
        },
        onEditCustomer: payload => {
            return dispatch(editCustomer(payload))
        },
        onGetCustomers: () => {
            return dispatch(getCustomers())
        },
        onUpdateCustomers: (payload) => {
            return dispatch(updateCustomers(payload))
        },
        onGetAllPesanan: () => {
            return dispatch(getAllPesanan())
        },
        onPesanMakanan: payload => {
            return dispatch(pesanMakanan(payload))
        },
        onEditMenu: payload => {
            return dispatch(editMenus(payload))
        },
        onSendMenu: payload => {
            return dispatch(sendEditMenu(payload))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);