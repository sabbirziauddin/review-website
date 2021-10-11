import React, { useEffect, useState } from 'react';
import HomeService from '../HomeService/HomeService';

const Home = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./course.JSON')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    const style = {
        color: 'orange'
    }

    return (
        <div>
            <img
                className="d-block w-100"
                src="https://media.istockphoto.com/photos/teacher-desk-full-of-books-against-a-blackboard-background-whit-copy-picture-id1251272960"
                alt="First slide"
            />

            <br />
            <br />
            <div className='mt-5'>
                <h1> <span style={style} > Our</span> Services</h1>

            </div>


            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.slice(0, 4).map(ser => <HomeService key={ser.id} serv={ser}></HomeService>)



                }





            </div>
        </div>
    );
};

export default Home;