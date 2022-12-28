import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MenuBar from '../Shared/Menubar/MenuBar';
import './Booking.css'
const Booking = () => {
    const { serviceId } = useParams()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/dev-rahim/react-opta-care-clinic/main/src/Fakedata/servicess.json')
            .then(res => res.json())
            .then(data => {
                setServices(data.find(s => s.id === serviceId))
            })
    },)
    return (
        <>
            <MenuBar />
            <div className='booking-card mx-auto mt-5 rounded'>
                <img className='img-fluid img-thumbnail' src={services.image} alt="" />
                <h2>{services.title}</h2>
                <p className='text-start'>{services.description}</p>
            </div></>
    );
};

export default Booking;