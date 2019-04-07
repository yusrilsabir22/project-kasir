import React from 'react'
import { withRouter } from 'react-router-dom'

export const checkAuthenticated = (Component) => {
    return (withRouter(class AuthWrap extends React.Component {
        render() {
            if(this.props.auth) {
                return (
                    <Component {...this.props} />
                )
            } else {
                this.props.history.replace('/login')
                return null
            }
        }
    }))
}