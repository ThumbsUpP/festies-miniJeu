import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './timer.module.css'


class Timer extends Component {

    
    render() {


        return (
                <CircularProgressbar
                    percentage={this.props.timer * 10}
                    strokeWidth={4}
                    /* counterClockwise = {true} */
                    /* classForPercentage={(percentage) => {
                        return percentage === 100 ? 'complete' : 'incomplete';
                    }} */
                    styles={{
                        text: { },
                      }}
                    textForPercentage={() => `${this.props.timer}`}
                />
        );
    }
}

export default Timer;