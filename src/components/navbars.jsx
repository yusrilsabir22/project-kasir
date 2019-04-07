import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
export default withRouter(class Navbars extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-primary bg-light fixed-top">
            <a className="navbar-brand" href="javascript:void(0)">Dapur Aki</a>
            <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" to={'/table-orders'}>Table <span className="sr-only">(current)</span></NavLink>
                <NavLink className="nav-item nav-link" to={'/menu-orders'}>Menu</NavLink>
                <NavLink className="nav-item nav-link" to={'/orders'}>Order Status</NavLink>
            </div>
        </nav>
    )
  }
})
