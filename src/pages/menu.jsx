import React, { Component } from 'react'
import { MenuCard } from '../components/m-card';
import { menu } from '../utils/fake-img';

export default class MenuOrders extends Component {
  render() {
      const mymenu = menu.map((v,i) => {
        return (
            <div className="col-3" key={i}>
                <MenuCard 
                    {...v}
                />
            </div>
        )
      })
    return (
      <div className="menu">
        <div className="row">
            {mymenu}
        </div>
      </div>
    )
  }
}
