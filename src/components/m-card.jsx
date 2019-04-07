import React, { Component } from 'react';
import { cilok } from '../utils/fake-img';

export const MenuCard = (props) => {
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={props.img ? props.img : cilok}
          alt="Card image cap"
          style={{
            height: '120px'
          }}
        />
        <div className="card-body">
          <div className="card-title font-weight-bold">{props.name ? props.name : 'none'}</div>
          <p className="card-text">
            {props.desc ? props.desc : 'Some quick example text to build on the card.'}
          </p>
        <div className="card-footer">
            <div className="card-text font-weight-bold">{props.cost ? props.cost : 'IDR 0'}</div>
        </div>
        </div>
      </div>
    );
}