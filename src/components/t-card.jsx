import React from 'react';
export const Card = (props) => {
    console.log(props)
    return (
        <div className={`card ${props.clicked === props.id ? 'text-white bg-primary' : 'text-secondary bg-white'}`}>
            <div className="card-body">
                <div className="card-title font-weight-bold">
                    {props.id ? props.id : '0000'}
                </div>
                <span className="card-text font-weight-normal">{!props.table ? '00' : props.table}</span>
                <br/>
                <span className="card-text font-weight-normal">{props.name ? props.name : 'John Doe'}</span>
            </div>
        </div>
    )
}