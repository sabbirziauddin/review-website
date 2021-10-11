import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import TotalTeacher from '../TotalTeacher/TotalTeacher';

const Teacher = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])

    return (
        <div>
            <div className='mt-5'>
                <h1 >Total faculties are: {services.length}</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.slice(0, 3).map(ser => <TotalTeacher key={ser.id} serv={ser}></TotalTeacher>)
                }

            </div>

        </div>

    );
};

export default Teacher;