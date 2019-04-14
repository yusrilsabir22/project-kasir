import React, { Component } from 'react'
import { Card } from '../components/t-card';

export default class TableOrders extends Component {
  constructor(props) {
    super(props)
    this.customers = [
            {
                id: '0001',
                table: '01',
                name: 'Rasmita',
                clicked: false
            },
            {
                id: '0002',
                table: '02',
                name: 'Alya',
                clicked: false
            },
            {
                id: '0003',
                table: '03',
                name: 'Indri',
                clicked: false
            },
            {
                id: '0004',
                table: '04',
                name: 'Dewi',
                clicked: false
            },
            {
                id: '0005',
                table: '05',
                name: 'Selena',
                clicked: false
            },
            {
                id: '0006',
                table: '06',
                name: 'Bara',
                clicked: false
            },
            {
                id: '0007',
                table: '07',
                name: 'Tifancka',
                clicked: false
            },
            {
                id: '0008',
                table: '08',
                name: 'Deviana',
                clicked: false
            },
        ]
    this.state = {
      cli: ""
    };
  };
  
  render() {
    const mCustomers = this.customers.map((v,i) => {
      return (
        <div className="col-md-3" onClick={(e) => {
          this.setState({cli:v.id})
        }}>
          <Card
            key={i}
            id={v.id}
            table={v.table}
            name={v.name}
            clicked={this.state.cli}
          />
        </div>
      )
    })
    return (
      <div className="row justify-content-center">
        {mCustomers}
      </div>
    )
  }
}
