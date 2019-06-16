import React, { Component } from 'react'
import { splitRupiah } from '../utils/utils';

export default class OrderStatus extends Component {
  state = {
    clickId: ''
  }
  componentWillReceiveProps(nextProps, nextState)  {
    if(!nextProps.editOrders) {
      this.setState({clickId: ''})
    }
  }
  render() {
    console.log(this.props)
    const da = this.props.orders.map((v, i) => {
      return (
        <div className="col-md-3" key={i} onClick={() => {
            this.setState({
              clickId: v.id
            })
            this.props.onEditOrders({
              edited: true,
              data: v
            })
            this.props.history.push('/makanan')
        }} style={{cursor: 'pointer'}}>
          <div className={`card ${this.state.clickId == v.id ? 'text-white bg-primary' : 'text-secondary bg-white'}`}>
            <div className="card-header" style={{fontSize: '1.3em', fontWeight: 'bold'}}>{v.name}</div>
            <div className="card-body">
              Total {splitRupiah(v.total, 'Rp')}
            </div>
            <div className="card-footer">
              {
                this.state.clickId == v.id ?
                <span className="text-light">Belum Bayar</span>
                :
                <span className="text-danger">Belum Bayar</span>
              }
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="order">
        <div className="garis text-secondary display-4">Order</div>
        <div className="row">
        {da}
        </div>
      </div>
    )
  }
}
