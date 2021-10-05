import React from 'react';
import './Course.css'

const Course = (props) => {
    const { name, duration, modeltest, price, img } = props.course;
    return (
        <div className="course-part">
            <article className="course-info">
                <div className="couse-photo">
                    <img src={img} alt="" />
                </div>
                <div className="course-information">
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

export default Course;