import React from 'react';

const GHJoystick = (props) => {
    console.log(props);

    return (
        <svg width="297px" height="284px"
            style={{
                transform: `scale(${props.scale ? props.scale : 1})`
            }}> >
                <path d="M130.563957,270 C59.8712666,270 20,223.452298 20,174.895852 C20,126.340229 96.4873422,6 167.17939,6 C237.87208,6 276,126.340229 276,174.895852 C276,223.452298 201.256648,270 130.563957,270 Z" fill="#0B24FB" id="Fill-1-Copy"></path>
        </svg>
    );
};

export default GHJoystick;