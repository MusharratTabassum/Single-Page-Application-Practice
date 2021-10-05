import React from 'react';
import './Service.css'

const Service = (props) => {
    const { name, duration, modeltest, price, img } = props.service;
    return (
        <div className="service-part">
            <article className="service-info">
                <div className="couse-photo">
                    <img src={img} alt="" />
                </div>
                <div className="service-information">
                    <h4>Course Name:{name}</h4>
                    <p>Duration: <small className="text-danger"> {duration} Days</small></p>
                    <h5>Price:{price} taka</h5>
                    <p>Model Test: {modeltest}</p>
                    <button>Buy Now</button>
                </div>
            </article>
        </div>
    );
};

export default Service;