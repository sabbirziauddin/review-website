import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div className=" bgcolor">
            <div className='mt-5'>
                <h1 >Total courses are: {services.length}</h1>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4  ">



                {
                    services.map(ser => <Service key={ser.id} serv={ser}></Service>)



                }





            </div>
        </div>

    );
};

export default Services;