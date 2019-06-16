import React, { Component, Fragment } from 'react'
import { splitRupiah } from '../utils/utils'

export default class Payment extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menuOrder: []
    }

  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      menuOrder: nextProps.menuOrder
    })
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

  render() {
    let total = 0;
    const foodData = this.state.menuOrder.map((v, i) => {
      if(this.props.dataOrders.id == v.id) {
        total = total + (v.price * v.count);
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
                <span className="food-name">{v.foodName}</span>
                <span className="price-item">{splitRupiah(v.price, 'Rp')}</span>
              </div>
            </div>
          </div>
        )
      }
    })
    let index = this.props.orders.findIndex(val => val.id === this.props.dataOrders.id);
    this.props.orders[index].total = total
    this.props.onEditCustomer(this.props.orders)
    return (
      <Fragment>
        <div className="m-payment">
          <div className="row p-2">
            <div className="col-md-7">
              <span className="text-secondary">Order Number</span>
              <br />
              <span className="text-white">{this.props.dataOrders.id}</span>
            </div>
            <div className="col-md-5">
              <span className="text-secondary">Name</span>
              <br />
              <span className="text-white">{this.props.dataOrders.name}</span>
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
            <div className="col-3">
              <button className="btn btn-secondary">SAVE</button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
