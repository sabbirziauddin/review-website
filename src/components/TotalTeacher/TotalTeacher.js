import React from 'react';
import './TotalTeacher.css';

const TotalTeacher = (props) => {
    const { t_name, t_img, id } = props.serv;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={t_img} className="card-img-top img-thumbnail image-style " alt="..." />
                <div className="card-body">
                    <h2 className="card-title">ID:{id}</h2>

                    <h5 className="card-title">Course teacher: <span style={{ color: 'Red' }}>{t_name}</span></h5>

                </div>
            </div>
        </div>
    );
};

export default TotalTeacher;