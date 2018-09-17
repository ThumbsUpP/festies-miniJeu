import React from 'react';
import classes from './GHStepSVG.module.css'

const GHStepsSVG = (props) => {

    return (
        <svg width="125px"
            height="126px"
            style={{
                transform: `rotate(${props.rotate ? props.rotate : 0}deg) 
                            scale(${props.scale ? props.scale : 1})`
            }}>
            <path
                className={props.delay ? classes.SVGSteps : null}
                style={{ animationDelay: `${props.delay}s` }}
                d="M29.8032121,13.4074422 C19.3327999,19.2952164 29.1452431,37.8289893 29.8032121,59.6287484 C30.3646077,78.2288474 20.1591035,100.426932 29.8032121,105.850055 C43.5643007,113.588258 54.2438015,106.532308 73.9998813,90.5595801 C84.3166562,82.2185003 112,66.5702877 112,58.1296394 C112,49.6889911 93.199096,37.6255557 73.9998813,27.5583943 C56.5492469,18.4081058 39.0423394,8.21205017 29.8032121,13.4074422 Z" id="Path-5-Copy-5" fill="#FFFFFF">
            </path>
        </svg>
    );
};

export default GHStepsSVG;