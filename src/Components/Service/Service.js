import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { title, id, image, description } = props.service;
    return (
        <div className='col-lg-4'>
            <div className="p-3 m-2 rounded service-cart">
                <h2 className='d-flex justify-content-between'><span className='text-start'>{title}</span><span className='text-end'>{id}</span></h2>
                <img className='img-fluid rounded' src={image} alt="" srcset="" />
                <p className='text-start'>{description.slice(0, 100)}</p>
                <Link className='text-start nav-link' to=''>
                    <p className='fs-4'>Read More <span >{'->'}</span></p>
                </Link>
            </div>
        </div>
    );
};

export default Service;