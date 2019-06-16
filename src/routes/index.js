import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import { routes, MRoutes } from './config';
import Navbars from '../components/navbars';
import MenuOrders from '../pages/menu';
import Sidebars from '../components/sidebars';

export default class MainRoutes extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            {
              this.props.auth ?
              this.props.admin ? 
              null
              : 
              <React.Fragment>
                < Navbars {
                  ...this.props
                }
                />
                <Sidebars {...this.props}/>
              </React.Fragment>
               : null
            }
            {
              this.props.admin ?
              <React.Fragment>

              <Route
                exact={true}
                path={'/'}
                render={props => {
                  return <MenuOrders props={props} /> 
                }}
                />
              <Route
               path={'/login'}
               render={props => {
                 return <LoginPage props={props} />
               }}
               />
              </React.Fragment>
              :
              <Switch>
                  {
                      routes.map((route, i) => {
                          return (
                            <MRoutes 
                                key={i}
                                {...route}
                                {...this.props}
                            />
                          )
                      })
                  }
              </Switch>
            }
          </React.Fragment>
      </Router>
    )
  }
}
