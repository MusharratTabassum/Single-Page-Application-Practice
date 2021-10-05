import React from 'react';
import img1 from './banner.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="container">
            <div className=" d-flex pt-4 row">
                <div className=" banner-section-title col-md-6 col-sm-12 col-12">
                    <h2>A Bridge To Move Forward In The Upcoming World Without Any Hiccups!
                    </h2>
                </div>
                <div className=" col-md-6 col-sm-12 col-12 ">
                    <img className="img-fluid" src={img1} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;