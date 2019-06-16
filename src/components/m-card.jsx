import React, { Component } from 'react';
import { cilok } from '../utils/fake-img';
import { splitRupiah } from '../utils/utils';

export const MenuCard = (props) => {
    return (
      <div className="card" key={props.id}>
        <div className="d-item">
          <i className="fas fa-plus"></i>
        </div>
        <img
          className="card-img-top"
          src={props.img ? props.img : cilok}
          alt="Card image cap"
          style={{
            height: '120px'
          }}
        />
        <div className="card-body">
          <div className="card-title font-weight-bold">{props.nama ? props.nama : 'none'}</div>
          <p className="card-text">
            {props.stok ? 'Stok ' + props.stok : 'Habis'}
          </p>
        <div className="card-footer">
            <div className="card-text font-weight-bold">{splitRupiah(props.harga, 'Rp')}</div>
        </div>
        </div>
      </div>
    );
}