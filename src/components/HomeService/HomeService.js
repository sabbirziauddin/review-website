import React from 'react';
import './HomeService.css'

const HomeService = (props) => {
    const { id, name, img, } = props.serv
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div class="card-body card-style">
                    <h2>Course Id: {id}</h2>
                    <h5 class="card-title">Course Name:{name}</h5>

                </div>
            </div>
        </div>
    );
};

export default HomeService;