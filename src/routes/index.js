import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom'
import { routes, MRoutes } from './config';
import Navbars from '../components/navbars';

export default class MainRoutes extends Component {
  render() {
    return (
      <Router>
          <React.Fragment>
            {
              this.props.auth ?
              <Navbars/> : null
            }
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
          </React.Fragment>
      </Router>
    )
  }
}
