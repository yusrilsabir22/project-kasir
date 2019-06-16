import React, { Component, Fragment } from 'react'
import Payments from '../components/payment'
export default class Payment extends Component {
    render() {
        return (
            <Fragment>
                <Payments {...this.props}/>
            </Fragment>
        );
    }
}
