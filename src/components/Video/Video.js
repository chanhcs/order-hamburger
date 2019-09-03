import React from 'react';
import classes from './Video.css';

const video = () => {
    return (
        <div>
            <h3>ღ How to make a perfect Hamburger ღ </h3>
            <div className={classes.Video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/talwV3qDM8E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    );
}

export default video;