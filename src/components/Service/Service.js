import React from 'react';
import './Service.css'

const Service = (props) => {
    const { id, name, img, price } = props.serv;

    return (
        <div classNameName="col ">
            <div classNameName="card h-100">
                <img src={img} classNameName="card-img-top" alt="..." />
                <div className="card-body">
                    <h2>Course Id: {id}</h2>
                    <h5 className="card-title">Course Name:{name}</h5>
                    <p className="card-text">Course Price:${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;