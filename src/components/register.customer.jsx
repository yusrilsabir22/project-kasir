import React, { Component } from 'react'
import RegisterModal from './modal';

export default class RegisterCustomer extends Component {
    state = {
        openModal: false
    }
    open(e) {
        this.setState({
            openModal: !this.state.openModal
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="reg-customer">
                    <div className="box-customer" onClick={this.open.bind(this)}>
                        <i className="fas fa-user"></i>
                        <div className="text-center">Add Customer</div>
                    </div>
                </div>
                <div className={`m-modal${this.state.openModal ? ' m-modal-open' : ''}`} >
                    <RegisterModal onGetCustomers={this.props.onGetCustomers} modal={this.state.openModal} addOrder={this.props.onAddOrders} openModal={(v) => {
                        this.setState({
                            openModal: v
                        })
                    }} />
                </div>
            </React.Fragment>
        )
    }
}
