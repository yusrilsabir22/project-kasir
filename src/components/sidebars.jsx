import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
export default withRouter(class Sidebars extends Component {

    render() {
        return (
            <div className={`sidenav bg-dark navbar-dark${this.props.nav ? ' slideIn': ''}`}>
                <div className="side-content">
                    <div id="dashboardku" className="side-item">
                        <NavLink to="/pelanggan" className="side-link">
                            <i className="fas fa-users"></i><span>Order</span>
                        </NavLink>
                    </div>
                    <div className="side-item">
                        <NavLink to="/makanan" className="side-link"><i className="fas fa-fish"></i><span>Menu</span></NavLink>
                    </div>
                </div>
                <div className="p-2">
                    <button className="btn btn-danger">Logout</button>
                </div>
            </div>
        )
    }
})
