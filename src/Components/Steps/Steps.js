import React, { Component } from 'react';
import classes from './Steps.module.css';
import GHStepsSVG from '../svg/GHStepSVG';
/* import { paths } from './paths' */

class Steps extends Component {
    state = {
        renderCount: 0
    }

    componentDidMount() {
        this.setState((prevState) => ({
            renderCount: prevState.renderCount++
        }))
    }

    shouldComponentUpdate() {
        if (this.state.renderCount === 0) {
            return true
        } else {
            return false
        }
    }

    render() {
        let scale = null;
        if (window.innerWidth < 700) {
            scale = 0.3
        } else if (window.innerWidth < 1050) {
            scale = 0.4
        } else {
            scale = 0.5
        }

        let animatedSteps = [];
        animatedSteps = this.props.path.map(path => (
            <div className={classes.Step} key={path[0]} style={{ animationDelay: `${path[0]}s` }} >
                <GHStepsSVG scale={scale} rotate={path[1]} delay={path[0]} />
            </div>
        ))

        return animatedSteps;
    }
}

export default Steps;