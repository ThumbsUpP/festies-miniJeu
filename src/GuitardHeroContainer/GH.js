import React, { Component } from 'react';
import classes from './GH.module.css';
import Joystick from '../Components/Joystick/Joystick';
import Steps from '../Components/Steps/Steps';
import GHFormeDansanteSVG from '../Components/svg/GHFormeDansanteSVG';
/* import { paths } from '../Components/Steps/paths'; */

class GHContainer extends Component {
    state = {
        lastAngle: null,
        score: 0,
        retry: false
    }

    componentDidMount() {
        const { paths } = this.props
        const stepsNumber = paths.length;

        for (let i = 0; i < stepsNumber; ++i) {
            setTimeout(() => {
                if (this.state.lastAngle === paths[i][1]) {
                    this.setState(prevState => {
                        return { score: prevState.score + 100 }
                    })
                }
            }
                , (paths[i][0] * 1000 + 3000))
        }
    }

    onUpdateAngle = (angle) => {
        this.setState({ lastAngle: angle })
    }

    onRetry = () => {
        this.setState({ score: 0 })
    }

    render() {

        return (
            <div className={classes.Slider} >
                <div className={classes.FormeDansante}>
                    <GHFormeDansanteSVG />
                </div>
                <div className={classes.Joystick} >
                    <Joystick onJoystickMove={this.onUpdateAngle} />
                </div>
                <div className={classes.piste}  >
                    <Steps
                        path={this.props.paths}
                    />
                </div>
                <div className={classes.tuto}>
                    Utiliser le Joystick bleu pour orienter vos pas de danse !
                </div>
                <div className={classes.Score}>
                    Score : {this.state.score}
                    {/* <button onClick={this.onRetry} > Réessayer </button> */}
                </div>
            </div>

        )
    }
}

export default GHContainer
