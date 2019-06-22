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
    });
  }
  render() {
      const {menus,auth} = this.props
      // console.log(menus)
      const mymenu = auth ? menus.map((v,i) => {
        return (
            <div className="col-3" key={i} onClick={(e) => {
              if(this.props.editOrders) {
                  let index = this.props.menuOrder.findIndex(val => val.id_pelanggan === this.props.dataOrders.id_pelanggan && val.id_makanan === v.id_makanan);
                  if(this.props.menuOrder[index]) {
                    alert('Ok')
                  } else {
                    let data = {
                      id_pelanggan: this.props.dataOrders.id_pelanggan,
                      id_makanan: v.id_makanan,
                      harga: v.harga,
                      nama_makanan: v.nama,
                      count: 1
                    }
                    this.props.onAddMenu(data)
                  }
                
              } else if(this.props.admin) {
                  this.props.onEditMenu({
                    onEditMenu: true,
                    editMenu: v
                  })
              } else {
                alert('Tidak ada pelanggan yang dipilih')
                this.props.history.push('/pelanggan')
              }
            }}>
                <MenuCard 
                    {...v}
                    admin={this.props.admin}
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
