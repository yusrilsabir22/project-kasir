import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
export default withRouter(class Navbars extends Component {
  render() {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top justify-content-between">
            <a className="navbar-brand" href="javascript:void(0)" onClick={(e) => {
              this.props.onToggleNav(!this.props.nav)
            }}>
              <i className="fas fa-bars"/>
              </a>
            <div className="navbar-nav text-center">
                {/* <NavLink className="nav-item nav-link active" to={'/table-orders'}>Table <span className="sr-only">(current)</span></NavLink> */}
                {/* <NavLink className="nav-item nav-link" to={'/menu-orders'}>Menu</NavLink>
                <NavLink className="nav-item nav-link" to={'/orders'}>Order Status</NavLink> */}
              <div className="title-brand">
                Dapur Aki
              </div>
            </div>
            <form action="" className="form-inline">
              {/* <span>tes</span> */}
            </form>
        </nav>
    )
  }
})
