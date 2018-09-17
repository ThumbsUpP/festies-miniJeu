import React, { Component } from 'react';
import { withGesture } from 'react-with-gesture';
import { Spring, config } from 'react-spring';
//import './Joystick.module.css';
import classes from './Joystick.module.css';


class Slider extends Component {
    state = {
        angle: 0
    }

    /* componentDidUpdate(prevProps, prevState) {
        if (prevState.angle !== this.state.angle) {
            this.props.onJoystickMove(this.state.angle)
        }
    } */
    /*  componentDidUpdate() {
         console.log(this.state)
     }
  */
    onAngleUpdate(angle) {
        if (angle !== this.state.angle) {
            this.props.onJoystickMove(angle, this.setState({ angle }))
            //this.setState({ angle })
            //console.log(this.state)
        }

    }

    render() {
        const { xDelta, yDelta, down } = this.props
        const xAbs = Math.abs(xDelta)
        const yAbs = Math.abs(yDelta)

        let xs = 0;
        let ys = 0;

        const r = 20;
        const xMax = r * xDelta / Math.sqrt(Math.pow(xDelta, 2) + Math.pow((yDelta), 2))
        const yMax = r * yDelta / Math.sqrt(Math.pow(xDelta, 2) + Math.pow((yDelta), 2))



        const to = {
            x: down ? (xAbs < 100 ? xDelta : (xDelta > 0 ? 100 : -100)) : 0,
            y: down ? (yAbs < 100 ? yDelta : (yDelta > 0 ? 100 : -100)) : 0
        }

        let angle = 0

        if (xAbs || yAbs) {
            if (xAbs > yAbs) {
                xDelta > 0 ? angle = 0 : angle = 180
            } else {
                yDelta > 0 ? angle = 90 : angle = 270
            }
        }

        /*  if (this.state.angle !== angle) {
             this.onAngleUpdate(angle)
         } */


        return (
            <div>
                <Spring to={to} immediate={down && ['x']} config={config.wobbly} onDrop={this.onAngleUpdate(angle)} /* onDrop={this.onAngleUpdate(angle)}   */>
                    {({ x, y }) => (
                        <div className={classes.joystick} style={{ transform: `translate3d(${x}px,${y}px,0)` }}>
                            <div className={classes.triangle} style={{ transform: `rotate(${angle}deg)` }} />
                        </div>
                    )}
                </Spring>
            </div>


        )
    }
}

export default withGesture(Slider)
