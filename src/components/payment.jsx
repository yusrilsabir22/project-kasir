import React, { Component, Fragment } from 'react'
import { splitRupiah } from '../utils/utils'

export default class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menuOrder: [],
       total: 0,
       id_pelanggan: ''
    }
  }

  componentDidMount() {
    this.props.onGetAllPesanan()
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      menuOrder: nextProps.menuOrder
    })
    if (nextProps.success_update && nextProps.success_pesanan) {
      window.location.reload()
    }
  }

  removeItems(v) {
      this.state.menuOrder.splice(this.state.menuOrder.indexOf(v), 1)
      this.setState({
        menuOrder: this.state.menuOrder
      })
      this.props.onRemoveOrders(this.state.menuOrder)
  }

  minusItem(v) {
    let index = this.state.menuOrder.indexOf(v)
    if(this.state.menuOrder[index].count-1 == 0) {
      this.state.menuOrder.splice(index, 1)
    } else {
      this.state.menuOrder[index].count -= 1;
    }
    this.setState({
      menuOrder: this.state.menuOrder
    })
    this.props.onRemoveOrders(this.state.menuOrder)

  }

  addItem(v) {
    let index = this.state.menuOrder.indexOf(v)
    this.state.menuOrder[index].count += 1;
    this.setState({
      menuOrder: this.state.menuOrder
    })
    this.props.onRemoveOrders(this.state.menuOrder)
  }

  savePayment(total) {
    let arr = []
    this.state.menuOrder.map((v, i) => {
      if(v.id_pelanggan === this.props.dataOrders.id_pelanggan) {
        let d = [`${this.props.dataOrders.id_pelanggan}`, v.id_makanan, v.count]
        arr.push(d)
      }
    })
    const data = {
      id_pelanggan: this.props.dataOrders.id_pelanggan,
      records: arr,
      total
    }
    console.log({
      id_pelanggan: data.id_pelanggan,
      records: data.records
    });
    this.props.onUpdateCustomers({
      id_pelanggan: data.id_pelanggan,
      status: 'belum bayar',
      bayar: data.total
    })
    setTimeout(() => {
      this.props.onPesanMakanan({
        id_pelanggan: data.id_pelanggan,
        records: data.records
      })
    }, 2000)
  }

  render() {
    let total = 0;
    const foodData = this.state.menuOrder.map((v, i) => {
      if(this.props.dataOrders.id_pelanggan == v.id_pelanggan) {
        total = total + (v.harga * v.count)
        console.log(total)
        return (
          <div className="col-12 d-item-order" key={i}>
            <div className="card">
              <div className="card-body d-items">
                <button className="btn btn-primary" onClick={
                  e => 
                  this.minusItem(v)
                  }>
                  <i className="fas fa-minus"></i>
                </button>

                <button className="btn btn-success"
                  onClick={e => this.addItem(v)}>
                  <i className="fas fa-plus"></i>
                </button>

                <button className="btn btn-danger fa-times" 
                  onClick={e => this.removeItems(v)}>X</button>
              </div>
              <div className="card-body" style={{color: '#000'}}>
                <span className="index-key">{v.count}</span>
                <span className="food-name">{v.nama_makanan}</span>
                <span className="price-item">{splitRupiah(v.harga, 'Rp')}</span>
              </div>
            </div>
          </div>
        )
      }
    })
    let index = this.props.customers.findIndex(val => val.id_pelanggan === this.props.dataOrders.id_pelanggan);
    this.props.customers[index].bayar = total
    this.props.onEditCustomer(this.props.customers)
    return (
      <Fragment>
        <div className="m-payment">
          <div className="row p-2">
            <div className="col-md-7">
              <span className="text-secondary">Order Number</span>
              <br />
              <span className="text-white">{this.props.dataOrders.id_pelanggan}</span>
            </div>
            <div className="col-md-5">
              <span className="text-secondary">Name</span>
              <br />
              <span className="text-white">{this.props.dataOrders.nama}</span>
            </div>
          </div>
          <div className="row justify-content-center text-center list-order-item">
              {foodData}
          </div>
          <div className="p-2 last-one mt-0">
              <span className="p-total">Total</span>
              <span className="n-total">{splitRupiah(total, 'Rp')}</span>
          </div>
          <div className="row last-two">
            <div className="col-4">
              <button className="btn btn-danger" onClick={(e) => {
                this.props.onEditOrders({edited: false, data: {}})
              }}>CLOSE</button>
            </div>
            <div className="col-5">
              <button className="btn btn-success">PURCHASE</button>
            </div>
            <div className="col-3" onClick={this.savePayment.bind(this, total)}>
              <button className="btn btn-secondary">SAVE</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
