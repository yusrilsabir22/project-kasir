import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import Payment from './components/payment';
import MainRoutes from './routes';
import { signIn, checkAuth } from './redux/actions';

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
                    <div className="d-md-flex h-md-100">
                        <div className="p-0 col-md-8 bg-indigo h-md-100">                
                            <div className="content-body container">
                            <MainRoutes {...this.props} />
                            </div>
                        </div>
                        <div className="col-md-4 bg-dark fixed-right">
                            <div className="text-light">
                                <Payment {...this.props} />
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
        ...state.userReducers
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (payload) => {
            return dispatch(signIn(payload))
        },
        onCheckAuth: () => {
            return dispatch(checkAuth())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);