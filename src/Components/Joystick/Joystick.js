import React, { Component } from 'react';
import { withGesture } from 'react-with-gesture';
import { Spring, config } from 'react-spring';
import GHJoystickSVG from '../svg/GHJoystickSVG';
import GHStepSVG from '../svg/GHStepSVG';
import classes from './Joystick.module.css';

class Slider extends Component {
    state = {
        angle: 0,
        nextAngle: 0
    }

    onAngleUpdate(angle) {

        if (angle !== this.state.angle) {
            this.setState({ angle })
        }
    }
    onNextAngleUpdate() {

        const angleToUpdate = this.state.angle;
        let updatedAngle = null;

        if (angleToUpdate < 45 && angleToUpdate > -45) {
            updatedAngle = 0
        } else if (angleToUpdate > 45 && angleToUpdate < 135) {
            updatedAngle = 90
        } else if (angleToUpdate > 135 || angleToUpdate < -135) {
            updatedAngle = 180
        } else if (angleToUpdate > -135 && angleToUpdate < -45) {
            updatedAngle = -90
        }

        if (this.state.nextAngle !== updatedAngle) {
            this.setState({ nextAngle: updatedAngle }, this.props.onJoystickMove(updatedAngle))
        }
    }




    render() {

        let scale = null;
        if (window.innerWidth < 700) {
            scale = 0.5
        } else if (window.innerWidth < 1050) {
            scale = 0.7
        } else {
            scale = 1
        }


        const { xDelta, yDelta, down } = this.props
        let to = { x: 0, y: 0 };
        // r for radius parameter
        const r = 60;
        // xMax & yMax map de coordinates of the circle of radius r around the origin point
        const xMax = r * xDelta / Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
        const yMax = r * yDelta / Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2));
        // figuring if mousedown position is inside or outside circle of radius r
        if (down) {
            if (Math.abs(xDelta) <= Math.abs(xMax) && Math.abs(yDelta) <= Math.abs(yMax)) {
                to = { x: xDelta, y: yDelta };
            } else if (xDelta !== 0 || yDelta !== 0) {
                to = { x: xMax, y: yMax };
            }
        }
        // converting coordinates to angle in degree
        let angle = Math.atan2(to.y, to.x) * 180.0 / Math.PI

        return (
            <Spring to={to} config={config.default}
                onDrop={!down ? this.onNextAngleUpdate() : null}
                onFrame={down ? this.onAngleUpdate(angle) : null}>

                {({ x, y }) => (
                    <div className={classes.joystick} style={{ transform: `translate3d(${x}px,${y}px,0)` }}>
                        <GHJoystickSVG scale={scale} />
                        <div
                            className={classes.triangle}
                            style={
                                down ?
                                    { transform: `rotate(${angle}deg)` }
                                    : { transform: `rotate(${this.state.nextAngle}deg)` }
                            }
                        >
                            <GHStepSVG width={"125px"} height={"125px"} scale={scale} />
                        </div>
                    </div>
                )}
            </Spring>
        )
    }
}

export default withGesture(Slider)

