import React, { Component } from 'react'
import uuid from 'uuid'

export default class RegisterModal extends Component {
    state = {
        nama: ''
    }
    addOrders(e) {
        e.preventDefault()
        if(this.state.nama != '') {
            this.props.addOrder({
                nama: this.state.nama, bayar: 0, status: 'belum bayar'})
            this.setState({
                nama: ''
            })
            setTimeout(() => {
                this.props.onGetCustomers()
            }, 1000)
            this.props.openModal(false)
        } else {
            alert('Silahkan masukkan nama pelanggan')
        }
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">
                        <div className="close-button" onClick={(e) => {
                            this.props.openModal(false)
                        }}>X</div>
                    </div>
                    <div className="card-body">
                        <div className="text-center text-secondary display-4">Pelanggan</div>
                        <form className="form" onSubmit={this.addOrders.bind(this)}>
                            <div className="form-group">
                                <label htmlFor="nama" className="text-secondary">Nama Pelanggan</label>
                                <input type="text" className="form-control" value={this.state.nama} onChange={(e) => {
                                    this.setState({
                                        nama: e.target.value
                                    })
                                }}/>
                            </div>
                            <button className="btn btn-primary btn-block">Tambahkan</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
