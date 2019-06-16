import React, { Component } from 'react'
import { MenuCard } from '../components/m-card';
// import { menu } from '../utils/fake-img';

export default class MenuOrders extends Component {
  state = {
    menus: [],
    key: false
  }

  componentDidMount() {
    this.props.onGetMenu()
  }

  componentWillReceiveProps(nextProps, nextState) {
    this.setState({
      menus: nextProps.menus
    })
  }
  render() {
      const {menus,auth} = this.props
      // console.log(menus)
      const mymenu = auth ? menus.map((v,i) => {
        return (
            <div className="col-3" key={i} onClick={(e) => {
              if(this.props.editOrders) {
                  let index = this.props.menuOrder.findIndex(val => val.id === this.props.dataOrders.id && val.id_makanan === v.id_makanan);
                  if(this.props.menuOrder[index]) {
                    alert('Ok')
                  } else {
                    let data = {
                      id: this.props.dataOrders.id,
                      id_makanan: v.id_makanan,
                      price: v.harga,
                      foodName: v.nama,
                      count: 1
                    }
                    this.props.onAddMenu(data)
                  }
                
              } else {
                alert('Tidak ada pelanggan yang dipilih')
                this.props.history.push('/pelanggan')
              }
            }}>
                <MenuCard 
                    {...v}
                />
            </div>
        )
      }) : null
    return (
      <div className="menu">
        <div className="row">
            {mymenu}
        </div>
      </div>
    )
  }
}
