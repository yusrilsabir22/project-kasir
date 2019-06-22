import React, { Component } from 'react'
import { splitRupiah } from '../utils/utils';

export default class OrderStatus extends Component {
  state = {
    clickId: '',
    customers: []
  }

  componentDidMount() {
    this.props.onGetCustomers()
    // this.props.onGetAllPesanan();
  }

  componentWillReceiveProps(nextProps, nextState)  {
    this.setState({
      customers: nextProps.customers
    })
    if(!nextProps.editOrders) {
      this.setState({clickId: ''})
    }
  }
  render() {
    const da = this.state.customers.map((v, i) => {
      return (
        <div className="col-md-3" key={i} onClick={() => {
            this.setState({
              clickId: v.id_pelanggan
            })
            this.props.onEditOrders({
              edited: true,
              data: v
            })
            this.props.history.push('/makanan')
        }} style={{cursor: 'pointer'}}>
          <div className={`card ${this.state.clickId == v.id ? 'text-white bg-primary' : 'text-secondary bg-white'}`}>
            <div className="card-header" style={{fontSize: '1.3em', fontWeight: 'bold'}}>{v.nama}</div>
            <div className="card-body">
              Total {splitRupiah(v.bayar, 'Rp')}
            </div>
            <div className="card-footer">
              {
                this.state.clickId == v.id_pelanggan ?
                <span className="text-light">{v.status}</span>
                :
                <span className="text-danger">{v.status}</span>
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
