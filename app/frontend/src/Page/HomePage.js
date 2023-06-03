import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <center style={{marginTop:"30px"}}>
                <h1>Home Page</h1>
            </center>

            <Link to='/dropdown'>DropDown</Link>
        </div>
    );
}

export default HomePage;
