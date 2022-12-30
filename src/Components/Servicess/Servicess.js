import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Servicess = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dev-rahim/react-opta-care-clinic/main/src/Fakedata/servicess.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h2 >Our Services</h2>
            <div className="container mt-3 " id='services'>
                <div className="row">
                    {
                        services.map(services => <Service key={services.id} service={services} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Servicess;