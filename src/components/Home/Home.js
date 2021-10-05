import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import './Home.css'

const Home = () => {
    return (
        <div >
            <div className="search-bar w-75 pt-5">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search Courses"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button className="btn-danger">
                        Search
                    </Button>
                </InputGroup>
            </div>
            <h1>From Home</h1>


        </div>
    );
};

export default Home;