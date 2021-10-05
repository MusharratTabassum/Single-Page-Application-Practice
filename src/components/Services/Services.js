import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("./Services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >
            <h3 className="text-center red">Our Courses</h3>
            {
                services.map(service => <Service service={service}
                    key={service.id}></Service>)
            }

        </div>
    );
};

export default Services;